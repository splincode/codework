const CoreWebAdapterTest = require("./helpers/core-web-adapter-test.model");
const config = require("./testconfig") || {};
const { host, user, startEventId } = config;

const test = new CoreWebAdapterTest(host).then(async function adapterProcess(webAdapter, cookie, processId, wait) {

	if (wait) {
		webAdapter.sleep(wait);
	}

	// получаем куки авторизации
	if (!cookie) {
		cookie = await webAdapter.getCookie(user.name, user.password);
	} 

	webAdapter.setCookieHeader(cookie);


	let newProcessId = null;
	let newProcessStepId = null;

	if (!processId) {

		// запускаем бизнес-процесс
		let startEvent = await webAdapter.startProcess(startEventId);
		newProcessId = (startEvent || {}).newProcessId || null;
		newProcessStepId = (startEvent || {}).newProcessStepId;

	} else {

		// получаем последний шаг процесса
		let processStep = await webAdapter.processStepGetLast(processId);
		newProcessStepId = processStep.id;

	}


	// получаем текущий шаг исполняемого запроса
	let { adapterRequestId, outputEntityList } = await webAdapter.getCurrentProcessStep(newProcessStepId);

	// заполняем исходящие сущности значениями
	let success = await webAdapter.setFillOutputEntityList(outputEntityList);

	// если все поля заполнены, завершаем шаг
	if (success) {

		let { newProcessStepId, processFinished } = await webAdapter.processStepComplete({adapterRequestId: adapterRequestId});

		if (!processFinished) {

			webAdapter.processNotFinished(newProcessStepId);
			adapterProcess(webAdapter, cookie, newProcessId, config.wait);

		} else {

			webAdapter.processFinished(newProcessStepId);

		}


	}

});
