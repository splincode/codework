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
var stack = [];
var stackEval = [];

var globalCommand = ['ввод фактов> ', 'ввод выражения> '];
var globalStateMath = false;

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

	} else {
		// классический режим
		


		
	}




	//counterCommand++;

	/*if (line.replace(/\s/g, "") === '!') {
		// смена режима
		globalStateMath = !globalStateMath;
		rl.setPrompt(globalCommand[Number(globalStateMath)]);
		rl.prompt();
		return;
	}



	try {
		stackEval.push(eval(line));
	} catch(e){
		stack.push(line.replace(/\s/g, ""));
	}

	console.log(db)

	// пробигаемся по правилам
	let roles = db.roles;
	for (let i = 0; i < roles.length; i++) {
		if (!roles[i].EXCLUDE) {

			let count = 0;
			let conditions = roles[i].IF;
			//console.log(conditions)
			for (let j = 0; j < conditions.length; j++) {
				//console.log(conditions[j])
				
				for (let k = 0; k < stack.length; k++) {
					if (conditions[j] === stack[k]) count++;
				}
			}

			if (count == conditions.length) {
				roles[i].EXCLUDE = true;
				stack.push(roles[i].THEN);
				console.log(roles[i].THEN);
			}

			//console.log(count);


		}
	}

*/

  rl.prompt();
  //console.log(stack)
}).on('close',function(){
  process.exit(0);
});