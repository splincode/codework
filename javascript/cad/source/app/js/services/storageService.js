export default function (){

	let service = {

		start: false, // запущена ли отрисовка
		minimal: false, // масштабирование с коэффициент 0
		ye: 100, // условные единицы
		kq: 1,
		kF: 1,

		base: {
			A: 1, // A
			L: 1, // L
			E: 1, // E
			sigma: '', // допускаемое напряжене
			q: false
		},

		structure: {
			item: [], // KernelList
			F: [], // PowerFList
			leftSealing: false, // заделка слева
			rightSealing: false // заделка
		},

		spc_version: 1.0
	
	};

	
	return service;

};