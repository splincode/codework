class SettlementsController {

	/**
	 * [инициация структуры приложения]
	 * @param  {Object} $rootScope     [глобальная область видимости приложения]
	 * @param  {Object} storageService [хранимая информация о приложении]
	 */
	constructor($rootScope, $scope, storageService, localService){

		this.storage = storageService;
		this.localStorage = localService;

		// создаем матрицу реакций А
		this.tempA = [];
		let len = storageService.structure.item.length+1;
		for(let i = 0; i < len; i++) {
			
			this.tempA[i] = [];

			for (let j = 0; j < len; j++) {
				this.tempA[i][j] = 0;
			}
		}

		this.tempQ = new Array(len).fill(0);
		for (let i = 0, setter = false; i < len; i++) {
		
			let F = storageService.structure.F[i];
			let L = (storageService.structure.item[ (i == len - 1) ? i-1 : i ].L);
			let q = storageService.structure.item[ (i == len - 1) ? i-1 : i ].q;

			let kF = storageService.kF;
			let kq = storageService.kq;
			let kL = storageService.base.L;

			if (typeof F == "number") {
				setter = true;
				this.tempQ[i] = ``;
				this.tempQ[i] += `${F/kF}F`;
			}

			// проверяем для первого узла
			if ((i == 0 || i == len-1)) {

				if (q != false) {
					if (!setter) this.tempQ[i] = ``;
					else {
						if ( q > 0) this.tempQ[i] += ` + `;
					}

					this.tempQ[i] += `${q/kq}*${L/kL}qL/2`;
				}

			} else {
				
				let q1 = storageService.structure.item[i-1].q;
				let L1 = storageService.structure.item[i-1].L;
				let q2 = storageService.structure.item[i].q;
				let L2 = storageService.structure.item[i].L;

				

				if (!setter) this.tempQ[i] = ``;
				else {
					if ( q1 > 0 ) this.tempQ[i] += ` + `;
				}

				if (q1 != false) {
					this.tempQ[i] += `${q1/kq}*${L1/kL}qL/2`;
					setter = true;
				}

				if (!setter) this.tempQ[i] = ``;
				else {
					if ( q2 > 0) this.tempQ[i] += ` + `;
				}
				
				if (q2 != false) {
					this.tempQ[i] += `${q2/kq}*${L2/kL}qL/2`;
					setter = true;
				}

			}

			setter = false;
		}

		this.tempQ.forEach((el, i) => {
			if (el == "") this.tempQ[i] = 0;
		});

		this.A = [];
		this.Q = new Array(len).fill(0);

		this.resultA = [];
		this.resultQ = new Array(len).fill(0);

		this.resultDelta = [];
		this.UResultDelta = [];

		this.Nx = []; this.tempNx = [];
		this.Sigmax = []; this.tempSigmax = [];
		this.Ux = []; this.tempUx = [];

		this.Math = window.Math;
	}

	/**
	 * [getNumberEdgeTo description]
	 * @return {[type]} [description]
	 */
	getNumberEdgeTo(){
	  let storageService = this.storage;
	  let len = storageService.structure.item.length+1;
	  let temp = [];
	  for(let i = 0; i < len; i++) temp.push(1+i);
	  return temp;
	}

	notQInKernel(){
		let storageService = this.storage;
		let len = storageService.structure.item.length;
		let not = true;

		for (let i = 0; i < len; i++) {
			if(typeof storageService.structure.item[i].q == 'number') {
				not = false; break;
			}
		}

		return not;
	}

	appendToTempA(i, j, p, type){
		let storageService = this.storage;

		i--; j--;

		if (type == "K11") {
			let kA = storageService.structure.item[p-1].A / storageService.base.A;
			let kL = storageService.structure.item[p-1].L / storageService.base.L;
			this.tempA[i][j] = ` ${kA} EA / ${kL}L`;
		}

		if (type == "K12" || type == "K21") {
			let kA = storageService.structure.item[p-1].A / storageService.base.A;
			let kL = storageService.structure.item[p-1].L / storageService.base.L;
			this.tempA[i][j] = `- ${kA} EA / ${kL}L`;
		}

		if (type == "K22+K11") {
			let kA1 = storageService.structure.item[p-1].A / storageService.base.A;
			let kL1 = storageService.structure.item[p-1].L / storageService.base.L;

			let kA2 = storageService.structure.item[p].A / storageService.base.A;
			let kL2 = storageService.structure.item[p].L / storageService.base.L;

			this.tempA[i][j] = `(${kA1} EA / ${kL1}L) + (${kA2} EA / ${kL2}L)`;
		}

	}

	/**
	 * [tempInto description]
	 * @return {[type]} [description]
	 */
	tempInto(){

		let storageService = this.storage;
		let len = storageService.structure.item.length+1;

		// обнуление заделки матрица A
		this.A = angular.copy(this.tempA);

		if (storageService.structure.leftSealing) {
			this.A[0][0] = 1;
			this.A[1][0] = 0;
			for (let i = 1; i < len; i++) this.A[0][i] = 0;
		}

		if (storageService.structure.rightSealing) {
			for (let i = 0; i < len; i++) this.A[len-1][i] = 0;
			this.A[len-1][len-1] = 1;
			this.A[len-2][len-1] = 0;
		}

		// обнуление заделки вектор b
		this.Q = angular.copy(this.tempQ);

		if (storageService.structure.leftSealing) this.Q[0] = 0;
		if (storageService.structure.rightSealing) this.Q[len-1] = 0;

		this.resultA = angular.copy(this.A);
		this.resultQ = angular.copy(this.Q);

		// вычисление коэффициентов
		for (let i = 0; i < len; i++) {
			for (let j = 0; j < len; j++) {
				if (typeof(this.resultA[i][j]) == "string") {
					try {
						this.resultA[i][j] = +(eval(this.resultA[i][j].replace(/F|q|L|E|A/g, ''))).toFixed(2);
					} catch(e){
						console.log(e)
					}
					
				}
			}
		}

		for (let i = 0; i < len; i++) {
			if (typeof(this.resultQ[i]) == "string") {
				try {
					this.resultQ[i] = +(eval(this.resultQ[i].replace(/F|q|L|E|A/g, ''))).toFixed(2);
				} catch(e){
					console.log(e)
				}
			}
		}

		let $A = angular.copy(this.resultA);
		let $x = angular.copy(this.resultQ);
		this.resultDelta = gauss($A, $x);

		this.UResultDelta = angular.copy(this.resultDelta);

		// если не имеет Q
		let self = this;
		if (this.notQInKernel()) {
			this.UResultDelta.forEach((el, i) => {
				if (self.gaussRound(self.resultDelta[i], 4) != 0){
					self.UResultDelta[i] = `(` + self.gaussRound(this.resultDelta[i], 4) + ` * ((F*L)/(E*A)))`;
				}
			});
		} else {
			this.UResultDelta.forEach((el, i) => {
				if (self.gaussRound(self.resultDelta[i], 4) != 0){
					self.UResultDelta[i] = `(` + self.gaussRound(this.resultDelta[i], 4) + ` * ( (q*(L^2)) / (E*A) ))`;
				}
			});
		}

		for (let i = 0; i < len-1; i++ ) {

			let kA = storageService.structure.item[i].A / storageService.base.A;
			let kL = storageService.structure.item[i].L / storageService.base.L;
			let kQ = storageService.structure.item[i].q;
			let kq = storageService.kq;

			let Up0 = this.UResultDelta[i];
			let UpL = this.UResultDelta[i+1];

			if (kQ) {
				this.Nx[i] = `( (${kA} * E * A) / (${kL} * L)) * (${UpL} - ${Up0}) + ((${kQ/kq} * q * ${kL} * L) / 2) * (1 - (2*(x/(${kL} * L))))`;
				this.tempNx[i] = `${kA}EA/${kL}L * (${UpL} - ${Up0}) + (${kQ/kq} * ${kL} qL/2)(1 - 2x/${kL}L)`;
			} else {
				this.Nx[i] = `( (${kA} * E * A) / (${kL} * L)) * (${UpL} - ${Up0})`;
				this.tempNx[i] = `${kA}EA/${kL}L * (${UpL} - ${Up0})`;
			}

		}

		for (let i = 0; i < len-1; i++ ) {

			let kA = storageService.structure.item[i].A / storageService.base.A;
			let kL = storageService.structure.item[i].L / storageService.base.L;
			let kQ = storageService.structure.item[i].q;
			let kq = storageService.kq;

			let Up0 = this.UResultDelta[i];
			let UpL = this.UResultDelta[i+1];

			if (kQ) {
				this.Sigmax[i] = `(( (${kA} * E * A) / (${kL} * L)) * (${UpL} - ${Up0}) + ((${kQ/kq} * q * ${kL} * L) / 2) * (1 - 2 * (x/(${kL} * L)))) / (${kA} * A)`;
				this.tempSigmax[i] = `(${kA}EA/${kL}L * (${UpL} - ${Up0}) + (${kQ/kq} * ${kL}qL)/2)(1 - 2x/${kL}L)) / ${kA}A`;
			} else {
				this.Sigmax[i] = `((${kA} * E * A / ${kL} * L) * (${UpL} - ${Up0})) / (${kA} * A)`;
				this.tempSigmax[i] = `(${kA}EA/${kL}L * (${UpL} - ${Up0})) / ${kA}A`;
			}

			
		}

		for (let i = 0; i < len-1; i++ ) {

			let kA = storageService.structure.item[i].A / storageService.base.A;
			let kL = storageService.structure.item[i].L / storageService.base.L;
			let kQ = storageService.structure.item[i].q;
			let kq = storageService.kq;

			let Up0 = this.UResultDelta[i];
			let UpL = this.UResultDelta[i+1];

			if (kQ) {
				this.Ux[i] = `${Up0} + ((x/(${kL} * L)) * (${UpL} - ${Up0})) + ((${kQ/kq} * q * ((${kL} * L)^2) * x)/(2 * ${kA} * E * A * ${kL} * L))*(1 - (x/(${kL} * L)))`;
				this.tempUx[i] = `${Up0} + x/${kL}L * (${UpL} - ${Up0}) + (${kQ/kq}q${kL}L^2x) / (2 * ${kA}EA * ${kL}L) * (1 - x/(${kL}L)`;
			} else {
				this.Ux[i] = `${Up0} + ((x/(${kL} * L)) * (${UpL} - ${Up0}))`;
				this.tempUx[i] = `${Up0} + x/${kL}L * (${UpL} - ${Up0})`;
			}

			
		}
		
		this.localStorage.exec = true;

	}


	resultMath(i, formula, x, t){
		if (i < 0) return ;

		let storageService = this.storage;
		let len = storageService.structure.item.length+1;

		let A = storageService.base.A;
		let L = storageService.base.L;

		let X = t ? `${x} * ${t}` : x; 

		X = X ? X : 0;

		let E = storageService.structure.item[i].E;
		let F = storageService.kF;
		let q = storageService.kq;

		let stackMath = `A = ${A}; L = ${L}; E = ${E}; F = ${F}; q = ${q}; x = ${X}; `;
		let line = stackMath + formula;
		let res = 0;
		let result = 0;

		try {
			res = math.eval(line);
			result = (Math.abs(res.entries[0]) > 0.9) ? this.gaussRound(res.entries[0], 2) : res.entries[0];
		} catch (e){
			console.log(e)
		}

		return result;
	}

	setItemNx(i, j, res){
	
		if (!Array.isArray(this.localStorage.itemNx[i])) {
			this.localStorage.itemNx[i] = [];
		}

		this.localStorage.itemNx[i][j] = res;
	}

	setItemSx(i, res){
		this.localStorage.itemSx[i] = res;
	}

	setItemUx(i, res){
		this.localStorage.itemUx[i] = res;
	}

	gaussRound(num, decimalPlaces) {
	    let d = decimalPlaces || 0,
	    m = Math.pow(10, d),
	    n = +(d ? num * m : num).toFixed(8),
	    i = Math.floor(n), f = n - i,
	    e = 1e-8,
	    r = (f > 0.5 - e && f < 0.5 + e) ?
			((i % 2 == 0) ? i : i + 1) : Math.round(n);
	    return d ? r / m : r;
	}

	getDecimal(num) {
	  return num > 0 ? num - Math.floor(num) : Math.ceil(num) - num;
	}

	ceil(i){

		let round = false;
		if (this.getDecimal(i) > 0.8) round = true;

		return i > 0 ? (round ? Math.ceil(i) : i) : ( round ? Math.floor(i) : i);
	}

	notQInKernelDelta(spl, i){
	/*	console.log(this.resultDelta);
		console.log(this.UResultDelta, i-1, this.resultDelta[i-1])
*/
		if (this.resultDelta[i-1].toString() === 'NaN') return;

		this.UResultDelta[i-1] = this.gaussRound(this.resultDelta[i-1], 4) + ` * ${spl}`;
	}

}



export const SettlementsComponent = {
  template: require("./settlements.html"),
  controller: ['$rootScope', '$scope', 'storageService', 'localService', SettlementsController] 
};
