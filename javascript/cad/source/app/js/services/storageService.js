export default function (){

	let service = {

		start: false, // запущена ли отрисовка
		ye: 10, // условные единицы
		kq: 1,
		kF: 1,

		base: {
			A: 100, // A
			L: 10, // L
			q: false
		},

		structure: {
			item: [], // KernelList
			F: [],
			leftSealing: false, // заделка слева
			rightSealing: false // заделка
		},

		spc_version: 1.0
	
	};

	
	return service;

};