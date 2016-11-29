/**
 * Include library
 */

const readline = require('readline');
const db = require('./libs/roles.js');
const math = require('./libs/math.js');

/**
 * Instance
 */

var rl = readline.createInterface(process.stdin, process.stdout);
var stack = [], stackAlias = [], stackMath = "";
var roles = db.roles;

var globalCommand = ['ввод фактов> ', 'ввод выражения> '];
var globalStateMath = false;
var globalCountMathCommand = 0;

function first(obj) {
    for (var a in obj) return a;
}

//var counterCommand = 0;

rl.setPrompt(globalCommand[0]);
rl.prompt();


/**
 * ReadLine command user
 */

rl.on('line', function(line) {

	if (line.replace(/\s/g, "") === '!') {
		// смена режима
		globalStateMath = !globalStateMath;
		rl.setPrompt(globalCommand[Number(globalStateMath)]);
		rl.prompt();
		return;
	}


	if (globalStateMath) {
		// в режиме исполнения математических команд
		
		if (line.indexOf("set") != -1) {
			line = line.replace("set", "");
			stackMath = stackMath + line + ";";
			globalCountMathCommand++;
			console.log(stackMath)
		} else {
			console.log(math.eval(stackMath + line))
		}

		for (let i =0 ; i < roles.length; i++) {
			if (!roles[i].EXCLUDE && roles[i].MODE == 'EVAL') {
			
				let count = 0;
				let conditions = roles[i].IF;
				let conditionsState;
				for (let j = 0; j < conditions.length; j++) {

					if (conditions[j].indexOf("$") != -1) {
						conditionsState = conditions[j];
						
						for (let option in stackAlias) {
						 let replaceKey = first(stackAlias[option]);
						 let value = stackAlias[option][first(stackAlias[option])];
						 conditionsState = conditionsState.split(replaceKey).join(value);
						}
					}

					let checkFormule = false;
					for (let k = 0; k < stack.length; k++) {
						if (conditionsState.indexOf("f(") != -1) {
							try { 
								if (globalCountMathCommand >= conditionsState.match(new RegExp(",", 'g')).length && !checkFormule) {
									let result = math.eval(stackMath + conditionsState);
									if (Boolean(result.entries)) checkFormule = true;
								}
								
							} catch (e) {}
						} else if (stack[k].line == conditionsState) count++;

					}

					if (checkFormule) count++;

					if (count == conditions.length) {
						roles[i].EXCLUDE = true;
						
						stack.push({
							line: roles[i].THEN,
							alias: { "$0" : null }
						});

						for (let option in stackAlias) {
						 let replaceKey = first(stackAlias[option]);
						 let value = stackAlias[option][first(stackAlias[option])];
						 stack[stack.length-1].line = stack[stack.length-1].line.split(replaceKey).join(value);
						}

						console.log(stack[stack.length-1].line);

					}

				}
			}
		}


		globalCountMathCommand++;
		rl.prompt();
		return;

	} else {

		if (line.replace(/\s/g, "") == "") {
			rl.prompt();
			return;
		}

		if (line.replace(/\s/g, "") == "new") {
			
			stack = [];
			stackAlias = [];
			for (let i = 0; i < db.roles.length; i++) db.roles[i].EXCLUDE = false;

			rl.prompt();
			return;
		}

		// классический режим
		stack.push({line: line.replace(/\s/g, ""), excludeForFunction: false});

		for (let i = 0; i < roles.length; i++) {


			if (!roles[i].EXCLUDE && !roles[i].MODE) {
				let count = 0;
				let conditions = roles[i].IF;
				//console.log(conditions)

				if (typeof conditions == 'function') {
					for (let k = 0; k < stack.length; k++) {
		
						if (conditions(stack[k].line) && !stack[k].excludeForFunction)  { 
							stackAlias.push(roles[i].THEN(stack[k].line));
							stack[k].alias = roles[i].THEN(stack[k].line); 
							stack[k].excludeForFunction = true;
							roles[i].EXCLUDE = true;
						}
					}
					
				} else {


					for (let j = 0; j < conditions.length; j++) {
						
						for (let k = 0; k < stack.length; k++) {
							let firstKey = first(stack[k].alias);
							if (stack[k].line == conditions[j].replace(firstKey, stack[k].alias[firstKey])) count++;
						}

					}

					if (count == conditions.length) {

						roles[i].EXCLUDE = true;
						stack.push({
							line: roles[i].THEN,
							alias: { "$0" : null }
						});

						for (let option in stackAlias) {
						 let replaceKey = first(stackAlias[option]);
						 let value = stackAlias[option][first(stackAlias[option])];
						 stack[stack.length-1].line = stack[stack.length-1].line.split(replaceKey).join(value);
						}

						console.log(stack[stack.length-1].line);
					}

				}


			}


		}

	}

  rl.prompt();
}).on('close',function(){
  process.exit(0);
});