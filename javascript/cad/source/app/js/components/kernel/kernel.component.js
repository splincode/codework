class KernelController {

	/**
	 * [инициация структуры приложения]
	 * @param  {Object} $rootScope     [глобальная область видимости приложения]
	 * @param  {Object} storageService [хранимая информация о приложении]
	 */
	constructor($rootScope, storageService){
        this.storage = storageService;

        Array.prototype.insert = function (index, item) {
          this.splice(index, 0, item);
        };

        this.Math = window.Math;
	}

	/**
	 * Добавляем стержень
	 * @param {[type]} i [description]
	 */
	addKernelBlock(i){
			
		let storageService = this.storage;

		this.storage.structure.item.insert(
			i+1, 
			angular.copy(storageService.base)
		);
	}

	/**
	 * Удаляем стержень
	 * @param {[type]} i [description]
	 */
	removeKernelBlock(i){
		this.storage.structure.item.splice(i, 1);
	}

	/**
	 * Добавляем заделку справа
	 * [addSealingRight description]
	 */
	addSealingRight(){
		let storageService = this.storage;
		storageService.structure.rightSealing = true;
	}

	/**
	 * Удаляем заделку справа
	 * [removeSealingRight description]
	 * @return {[type]} [description]
	 */
	removeSealingRight(){
		let storageService = this.storage;
		storageService.structure.rightSealing = false;
	}

	/**
	 * Добавляем заделку слева
	 * [addSealingLeft description]
	 */
	addSealingLeft(){
		let storageService = this.storage;
		storageService.structure.leftSealing = true;
	}

	/**
	 * Добавляем заделку слева
	 * [removeSealingLeft description]
	 * @return {[type]} [description]
	 */
	removeSealingLeft(){
		let storageService = this.storage;
		storageService.structure.leftSealing = false;
	}

	/**
	 * Добавляем силу q
	 * [addPowerQ description]
	 * @param {[type]} i [description]
	 */
	addPowerQ(i){
		let storageService = this.storage;
		storageService.structure.item[i].q = 1;
	}

	/**
	 * Удаляем силу q
	 * [removePowerQ description]
	 * @param  {[type]} i [description]
	 * @return {[type]}   [description]
	 */
	removePowerQ(i){
		let storageService = this.storage;
		storageService.structure.item[i].q = false;
	}

	/**
	 * Изменяем направление силы q
	 * @param  {[type]} i [description]
	 * @return {[type]}   [description]
	 */
	changePowerQ(i){
		let storageService = this.storage;
		storageService.structure.item[i].q = (-1) * storageService.structure.item[i].q;
	}

	/**
	 * Добавляем силу F
	 * [addPowerF description]
	 * @param {[type]} i [description]
	 */
	addPowerF(i){
		let storageService = this.storage;
		storageService.structure.F[i] = 1;
	}


	/**
	 * Добавляем силу F (противоположную)
	 * @param {[type]} i [description]
	 */
	addPowerLeftF(i){
		let storageService = this.storage;
		storageService.structure.F[i] = -1;
	}

	removePowerF(i){
		let storageService = this.storage;
		storageService.structure.F[i] = null;
	}

}

export const KernelComponent = {
  bindings: {
  	kid: '=',
  	index: '=',
  	nextIndex: '=',
  	structure: '=',
  	storage: '='
  },
  template: require("./kernel.html"),
  controller: ['$rootScope', 'storageService', KernelController] 
};
