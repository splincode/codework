// дихотомия
let auto = confirm("Хотите ввести свою функцию и значения?");	
let a, b, eps, fn;

if (!auto) {

	// ввод автоматический
	a = 1; 
	b = 2;
	eps = 0.00001;
	fn = "x - 2*x*x + (1/5)*pow(x, 5)";

} else {

	// пользовательский ввод
	a = Number(prompt("Введите a: ")) || 0;
	b = Number(prompt("Введите b: ")) || 0;
	eps = Number(prompt("Введите eps: ")) || 0;
	fn = prompt("Введите свою математическую функцию F(x): ") || "";
}

function f (x) {
	
	let res = 0;
	with(Math){
		res = eval(fn);
	}
	
	return res;
}

document.write(` 
	Заданная точность: <b>eps</b> = ${eps} <br>
`)

if (!auto) {
	document.write(`F(x) = x - 2*x<sup>2</sup> + (1/5)*x<sup>5</sup> [${a}, ${b}]<br> <br>`);
} else {
	document.write(`F(x) = ${fn}, [${a}, ${b}] <br> <br>`);
}

let c, i = 1;

document.write(` 
	<div class="form-group">
	<table class="table table-bordered text-center">
	<tr>
		<td>Номер итерации</td>
		<td>a</td>
		<td>b</td>
		<td>c</td>
		<td>f(a)</td>
		<td>f(c)</td>
		<td>|b-a|</td>
	</tr>
`)


while (b - a > eps){
    c = (a + b) / 2;
    
    if(f(b) * f(c) < 0)
        a = c;
    else
    	b = c;

    document.write(` 
    	<tr>
    		<td> ${i} </td>
    		<td>` + (+a.toFixed(3)) + `</td>
    		<td>` + (+b.toFixed(3)) + `</td>
    		<td>` + (+c.toFixed(3)) + `</td>
    		<td>` + (+(f(a)).toFixed(3) )+ `</td>
    		<td>` + (+(f(c)).toFixed(3)) + `</td>
    		<td>` + (+(Math.abs(b-a)).toFixed(3))  + `</td>
    	</tr>
    `);

    i++

}

document.write(` 
	</table>
	</div>
`)

x = (a + b) / 2 ;

document.write('x  = ' + (+x.toFixed(3)) + '<br>');
//document.write('f(x) = ' + (+f(x).toFixed(3)) + '<br>');