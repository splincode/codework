function component(k, nextPointer, valFx, prevPointer, valPrevPointer, valNextPointer, h){
	console.log(`Итерация, k = ${k}`);
	console.log(`Поиск по образцу:`);
	console.log(`x${prevPointer}(${valPrevPointer}), x${nextPointer}(${valNextPointer})`);
	console.log(`f(x${nextPointer}) = ${valFx}`);
	console.log(`h = ${h}`);
	console.log(`e = 0.01`);
	console.log("");
}

/**
 * [Целевая функция]
 * @param  {Number} x  [x1 - направление по оси x]
 * @param  {Number} x  [x2 - направление по оси y]
 * @return {Number}    [Значение функции в точке]
 */
function f(x1, x2) { 
	return (x1 -2)*(x1 -2) + (x1 - 2 * x2)*(x1 - 2 * x2); 
}

let h = 1; // шаг 
let k = 0;
let e = 0.01; // эпсилон
let x1 = 2;
let x2 = 0;
let valFx;

console.log('Исходные значения: ');
console.log('f(x) = (x1 - 2)^2 + (x1 - 2*x2)^2')
console.log(`x1(${x1}, ${x2})`)
console.log('f(x1)=', f(x1, x2))
console.log("e = 0.01")
console.log("h = 1")
console.log("")

while (h > e) {

	// иследовательский поиск
	while(
		(f(x1,x2) > f(x1+h,x2)) || 
		(f(x1,x2) > f(x1-h,x2)) || 
		(f(x1,x2) > f(x1,x2+h)) ||
		(f(x1,x2) > f(x1,x2-h))
	) 
	{
		// удачный поиск
		let x1_0 = x1;
		let x2_0 = x2;
		let fx = f(x1, x2);

		f4=f(x1-h,x2);
		f3=f(x1,x2+h);
		f2=f(x1+h,x2);
		f1=f(x1,x2-h);
		
		let Min = Math.min(f1, f2, f3, f4);

		if (Min < fx) {
			// поиск по образцу
			let prevX = `${x1}, ${x2}`;
			if (Min == f4) { x1 = x1 - h; x2 = x2; valFx = f4; }
			if (Min == f3) { x1 = x1; x2 = x2 + h; valFx = f3; }
			else if (Min == f2) { x1 = x1 + h; x2 = x2; valFx = f2; }
			else if (Min == f1) { x1 = x1; x2 = x2 - h; valFx = f1; }

			let nextPointer;
			if (k>0) nextPointer = 3; else nextPointer = 2;

			component(k, nextPointer, valFx, nextPointer - 1, prevX, `${x1}, ${x2}`, h)
		}

		k++;
	}


	h = h / 2;
	k++;


	console.log(`Итерация, k = ${k}`);
	console.log(`Исследующий поиск оказался безуспешным`);
	console.log(`h = ${h}`);
	console.log(``);

}
	

console.log(`Результат`);
console.log(`Ответ: (${x1}, ${x2})`);
console.log(`f(x) = ${valFx}`);