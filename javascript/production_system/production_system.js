/*var stack = [];

var stdin = process.openStdin();

stdin.addListener("data", function(d) {
    // note:  d is an object, and when converted to a string it will
    // end with a linefeed.  so we (rather crudely) account for that  
    // with toString() and then trim() 
    console.log("you entered: [" + 
        d.toString().trim() + "]");

    stack.push(d.toString().trim())
    console.log(stack)
  });*/

var stack = '';
  var readline = require('readline');
  var rl = readline.createInterface(process.stdin, process.stdout);
  rl.setPrompt('guess> ');
  rl.prompt();
  rl.on('line', function(line) {
  	  
      if (line === "end") {
      	console.log(stack);
      	console.log(eval(stack))
      } else stack += line + ';';

      if (line === "right") rl.close();
      rl.prompt();
  }).on('close',function(){
      process.exit(0);
  });