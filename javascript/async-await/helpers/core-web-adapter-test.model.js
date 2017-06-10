const colors = require('colors');
const util = require('util');
require('util.promisify').shim();
const request =  util.promisify(require("request-promise"));
const sleep = require('system-sleep');


class CoreWebAdapterTest {

	constructor(host) {

		this.urls = {
			login: `${host}/auth/login-check`,
			startProcess: `${host}/api/start-event-execute?id=`,
			processStepGet: `${host}/api/process-step-get?processStepId=`,
			entityFieldGetList: `${host}/api/entity-field-get-list?entityInstanceId=`,
			entityFieldSave: `${host}/api/entity-field-save?entityFieldInstanceId=`,
			entityFieldCollectionElementAdd: `${host}/api/entity-field-collection-element-add?entityInstanceId=`,
			processStepComplete: `${host}/api/process-step-complete`,
			processStepGetList: `${host}/api/process-step-get-list-for-process?processId=`,
		};

	}


	then(callback){

		try {
			callback(this);
		} catch (err) {
			console.log(colors.red(err));
		}

		return this;

	}

	error(text) {
		console.log(colors.red(text));
	}

	sleep(time) {

		console.log(`${this.getTime()} [SLEEP]: `.blue, time, "ms");
		sleep(time);

	}

	getTime() {

	    let date = new Date();
	    let year = date.getFullYear();
	    let month = (date.getMonth() + 1);
	    let day = date.getDate();
	    let hours = date.getHours();
	    let minutes = date.getMinutes();
	    let seconds = date.getSeconds();
	    let milliseconds = date.getMilliseconds();

	    return String(`[${year}-${month}-${day} ${hours}:${minutes}:${seconds}:${milliseconds}]`);
	}

	validateResponse(response) {

		let result = JSON.parse(response || "{}");
		let errorExist = true; 
		if (result.hasOwnProperty('success') && result.success) {
			errorExist = false;
		} else if (result.hasOwnProperty('success')) {
			console.log(`${this.getTime()} [ERROR]: `.red, "\n", JSON.stringify(result, null, 4), "\n");
		} else {
			console.log(`${this.getTime()} [ERROR]: `.red, "ответ от сервера был пустым");
		}

		if (errorExist) {
			throw new Error("bad response");
		}

		return (result.data || {});

	}

	serialiseObject(obj) {
	    let pairs = [];
	    for (let prop in obj) {
	        if (!obj.hasOwnProperty(prop)) {
	            continue;
	        }
	        pairs.push(prop + '=' + obj[prop]);
	    }

	    return pairs.join('&');
	}

	setCookieHeader(cookie) {
		this.cookie = cookie;
	}



	processNotFinished(newProcessStepId) {

		console.log(`${this.getTime()} [PROCESS NOT FINISHED, NEXT CURRENT STEP ID]: `.blue, newProcessStepId);

	}

	processFinished(newProcessStepId) {

		console.log(`${this.getTime()} [PROCESS FINISHED, LAST CURRENT STEP ID]: `.blue, newProcessStepId);

	}

	async getRequest(url, resolveWithFullResponse = false) {
		console.log(`${this.getTime()} [GET-REQUEST]: `.yellow, url);

		let options = { url: url };

		if (this.cookie) {
			options['headers'] = {
				'Cookie': this.cookie
			};
		}

		if (resolveWithFullResponse) {
			options["resolveWithFullResponse"] = true;
		}


		return  await request.get(options);
	}


	async postRequest(url, form) {
		console.log(`${this.getTime()} [POST-REQUEST]: `.yellow, url);

		let options = { url: url };

		if (this.cookie) {
			options['headers'] = {
				'Cookie': this.cookie
			};
		}

		if (form) {
			options["form"] = form;
		}


		return  await request.post(options);
	}


	async getCookie(username, password){

		if (this.cookie) return;

		console.log(`${this.getTime()} [USER]: `.green, username);

		let url = `${this.urls.login}?login=${username}&password=${password}`;
		let login = await this.getRequest(url, true);

	    let result = login.body;
	    let cookie = login.headers["set-cookie"][0];

	    if (result === "Success") {
	    	console.log(`${this.getTime()} [GET COOKIE]: `.green, cookie);
	    } else {
	    	console.log(`${this.getTime()} [FAIL]: `.red, "не правильный логин или пароль");
	    	process.exit(1);
	    }

	    return cookie;

	}

	async startProcess(startEventId) {


		let url = this.urls.startProcess + startEventId;
		let response = await this.getRequest(url);
		let result = this.validateResponse(response);

		console.log(`${this.getTime()} [START PROCESS, NEW ID]: `.green, result.newProcessId);

	    return result;
	}

	async getCurrentProcessStep(processStepId) {

		let url = this.urls.processStepGet + processStepId;
		let response = await this.getRequest(url);

	    return this.validateResponse(response);

	}

	async entityFieldGetList(entityInstanceId) {

		let url = this.urls.entityFieldGetList + entityInstanceId;
		let response = await this.getRequest(url);

	    return this.validateResponse(response);

	}


	async setFillOutputEntityList(outputEntityList){

		let outputEntityListSize = outputEntityList.length;

		for (let i = 0; i < outputEntityListSize; ++i) {
			
			let { entityInstanceId } = outputEntityList[i];
			let { fields } = await this.entityFieldGetList(entityInstanceId);

			let fieldsSize = fields.length;
			for (let j = 0; j < fieldsSize; ++j) {

				
				if (fields[j].type === "textfield" && !fields[j].collection) {

					// заполняем обычные поля текстом
					let entityFieldInstanceId = (fields[j].values[0] || {}).entityFieldInstanceId;
					let result = await this.entityFieldSave(entityFieldInstanceId, {stringValue: "lorem ipsum..."});

				} else if (fields[j].type === "composite-link" && fields[j].collection) {

					// добавляем элементы в коллекцию
					let { childEntityInstanceId } = await this.entityFieldCollectionElementAdd(entityInstanceId, {entityFieldId: fields[j].fieldId});

				}

			}


		}


		return true;

	}



	async entityFieldSave(entityFieldInstanceId, value) {

		let url = this.urls.entityFieldSave + entityFieldInstanceId + "&" + this.serialiseObject(value);
		let response = await this.getRequest(url);
	    let result = this.validateResponse(response);

		console.log(`${this.getTime()} [ADD VALUE IN TEXTFIELD, entityFieldInstanceId]: `.green, entityFieldInstanceId);
		
	    return result;

	}

	async entityFieldCollectionElementAdd(entityInstanceId, value) {

		let url = this.urls.entityFieldCollectionElementAdd + entityInstanceId + "&" + this.serialiseObject(value);
		let response = await this.getRequest(url);
	    let result = this.validateResponse(response);

		console.log(`${this.getTime()} [ADD ELEMENT IN COLLECION COMPOSIT-LINK, entityInstanceId, entityFieldId]: `.green, entityInstanceId, value.entityFieldId);
		
	    return result;

	}

	async processStepGetLast(processId) {

		let url = this.urls.processStepGetList + processId;
		let response = await this.getRequest(url);
	    let result = this.validateResponse(response);

	    let rows = result.rows;
	    let last = rows[rows.length - 1];

	    return last;

	}


	async processStepComplete(form) {

		let url = this.urls.processStepComplete;
		let response = await this.postRequest(url, form);
	    let result = this.validateResponse(response);

		console.log(`${this.getTime()} [CLOSE STEP, adapterRequestId]: `.green, form.adapterRequestId);
		
	    return result;

	}

}



module.exports = CoreWebAdapterTest;
