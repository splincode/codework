// дихотомия
let auto = confirm("Хотите ввести свою функцию и значения?");	
let a, b, eps, fn;

if (!auto) {

	// ввод автоматический
	a = 0; 
	b = 3;
	eps = 0.001;
	fn = "-x*exp(-0.5*x)";

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
	document.write(`F(x) = -x*e<sup>-0.5x</sup> [${a}, ${b}]<br> <br>`);
} else {
	document.write(`F(x) = ${fn}, [${a}, ${b}] <br> <br>`);
}

let i = 1;

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
		<td>сравнение</td>
		<td>|b-a|</td>
	</tr>
`)


console.log(b-a)
while (b - a >  eps) {

	 let f1 = f(a);
	 let c = (a+b)/2;
	 let f2 = f(c);

	 if (f1*f2 <= 0) {
	 	b = c;
	 } else {
	 	a = c;
	 	f1=f2;
	 }

	document.write(` 
		<tr>
			<td> ${i} </td>
			<td>` + (+a.toFixed(3)) + `</td>
			<td>` + (+b.toFixed(3)) + `</td>
			<td>` + (+c.toFixed(3)) + `</td>
			<td>` + (+(f(a)).toFixed(3) )+ `</td>
			<td>` + (+(f(c)).toFixed(3)) + `</td>
			<td>` + ((f1 <= f2) ? "<" : ">")  + `</td>
			<td>` + (+(Math.abs(b-a)).toFixed(3))  + `</td>
		</tr>
	`)

	++i;
	console.log(i)
}


document.write(` 
	</table>
	</div>
`)

let x = (a+b)/2;

document.write('x  = ' + (+x.toFixed(3)) + '<br>');
document.write('f(x) = ' + (+f(x).toFixed(3)) + '<br>');