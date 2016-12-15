class DrawController {

	/**
	 * [инициация структуры приложения]
	 * @param  {Object} $rootScope     [глобальная область видимости приложения]
	 * @param  {Object} storageService [хранимая информация о приложении]
	 */
	constructor($rootScope, storageService, localService){
        this.storage = storageService;
        this.localStorage = localService;
        this.Math = window.Math;
	}

  bigHeight(){
    let storageService = this.storage;

    let len = storageService.structure.item.length;
    let max = 0;
    for (let i = 0; i < len; i++) {
      if ((storageService.structure.item[i].A / storageService.structure.item[i].L) > max) {
        max = storageService.structure.item[i].A / storageService.structure.item[i].L
      }
    }

    return max;

  }

  bigAbsNx(){

    let localStorage = this.localStorage;

    let len = localStorage.itemNx.length;
    let max = 0;

    for (let i = 0; i < len; i++) {
      if (Math.abs(localStorage.itemNx[0][i]) > max) {
        max = Math.abs(localStorage.itemNx[0][i]);
      }
    }

    for (let i = 0; i < len; i++) {
      if (Math.abs(localStorage.itemNx[1][i]) > max) {
        max = Math.abs(localStorage.itemNx[1][i]);
      }
    }

    return max;

  }

  getDecimal(num) {
    return num > 0 ? num - Math.floor(num) : Math.ceil(num) - num;
  }

  ceil(i){

    let round = false;
    if (this.getDecimal(i) > 0.8) round = true;

    return i > 0 ? (round ? Math.ceil(i) : i) : ( round ? Math.floor(i) : i);
  }

  abs(i){
    return Math.abs(i);
  }

}

export const DrawComponent = {
  bindings: {},
  template: require("./draw.html"),
  controller: ['$rootScope', 'storageService', 'localService', DrawController] 
};
