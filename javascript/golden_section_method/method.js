
let auto = confirm("Хотите ввести свою функцию и значения?");	
let a, b, eps, fn;

if (!auto) {

	// ввод автоматический
	a = 1;
	b = 2;
	eps = 0.0001;
	fn = "x - 2*pow(x, 2)+ (1/5)*pow(x, 5)";

} else {

	// пользовательский ввод
	a = Number(prompt("Введите a: ")) || 0;
	b = Number(prompt("Введите b: ")) || 0;
	eps = Number(prompt("Введите eps: ")) || 0;
	fn = prompt("Введите свою математическую функцию F(x): ") || "";
}

let c = 0.618*a + 0.382*b;
let	d = 0.382*a + 0.618*b;

function f (x) {
	
	let res = 0;
	with(Math){
		res = eval(fn);
	}
	
	return res;
}

let h = (1/2) * (b - a);

document.write(` 
	Заданная точность: <b>eps</b> = ${eps} <br>
`)

if (!auto) {
	document.write(`F(x) = x - 2*x<sup>2</sup> + (1/5)*x<sup>5</sup> [${a}, ${b}]<br> <br>`);
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
		<td>d</td>
		<td>f(c)</td>
		<td>f(d)</td>
		<td>Сравнение f(c) и f(d)</td>
		<td>h</td>
	</tr>
`)
while (h >= eps) {

	document.write(` 
		<tr>
			<td> ${i} </td>
			<td>` + a.toFixed(3) + `</td>
			<td>` + b.toFixed(3) + `</td>
			<td>` + c.toFixed(3) + `</td>
			<td>` + d.toFixed(3) + `</td>
			<td>` + (f(c)).toFixed(3) + `</td>
			<td>` + (f(d)).toFixed(3) + `</td>
			<td>` + (f(c) >= f(d) ? '>' : '<')  + `</td>
			<td>` + h.toFixed(3)  + `</td>
		</tr>
	`)

	if (f(c) < f(d)) {
		
		a = c;
		b = b;
		c = d;
		d = 0.382*a + 0.618*b;

	} else {

		a = a;
		b = d;
		d = c;
		c = 0.618*a + 0.382*b;

	}

	h = (1/2) * (b - a);
	++i;

}

document.write(` 
	</table>
	</div>
`)

let x = (c + d)/2;

document.write('x = (c+d)/2 = ' + x.toFixed(3) + '<br>');
//document.write('f(x) = ' + f(x).toFixed(3) + '<br>');