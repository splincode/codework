var readline = require('readline');
var r = require('./roles.js');
var rl = readline.createInterface(process.stdin, process.stdout);
var bdNumber = 0;
var stack = [];
var stackEval = [];
var globalCommand = ['выбор базы знаний с номером> ', 'ввод фактов> ']
var counterCommand = 0;

console.log('Список баз знаний: ');
for (let i = 0; i < r.length; i++) {
	console.log(`${i+1}.${r[i].name}`);
}

rl.setPrompt(globalCommand[0]);
rl.prompt();
rl.on('line', function(line) {

	counterCommand++;

	if (counterCommand == 1) {
		bdNumber = parseInt(line.replace(/\D+/g,""));
		console.log('Выбрана база знаний:', r[bdNumber-1].name);
		rl.setPrompt(globalCommand[1]);
	} else {
		try {
			stackEval.push(eval(line));
		} catch(e){
			stack.push(line.replace(/\s/g, ""));
		}

		// пробигаемся по правилам
		let roles = r[bdNumber-1].roles;
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
	}


  rl.prompt();
  //console.log(stack)
}).on('close',function(){
  process.exit(0);
});