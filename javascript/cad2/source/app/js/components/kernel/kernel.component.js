class KernelController {

	/**
	 * [инициация структуры приложения]
	 * @param  {Object} $rootScope     [глобальная область видимости приложения]
	 * @param  {Object} storageService [хранимая информация о приложении]
	 */
	constructor($rootScope, storageService){
        this.storage = storageService;
	}

	/**
	 * Добавляем стержень
	 * @param {[type]} i [description]
	 */
	addKernelBlock(i){
		console.log(this.storage)
		this.storage.structure.item.push({
            F: {},
            q: {}
        });
	}

}

export const KernelComponent = {
  bindings: {
  	kid: '=',
  	index: '=',
  	nextIndex: '='
  },
  template: require("./kernel.html"),
  controller: ['$rootScope', 'storageService', KernelController] 
};
