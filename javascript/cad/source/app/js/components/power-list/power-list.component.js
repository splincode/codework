class PowerListController  {

	/**
	 * [инициация структуры приложения]
	 * @param  {Object} $rootScope     [глобальная область видимости приложения]
	 * @param  {Object} storageService [хранимая информация о приложении]
	 */
	constructor($rootScope, storageService){
        this.storage = storageService;
        this.Math = window.Math;
	}

}

export const PowerListComponent = {
  bindings: {
  	kid: '=',
  	index: '=',
  	nextIndex: '=',
  	structure: '=',
  	storage: '='
  },
  template: require("./power-list.html"),
  controller: ['$rootScope', 'storageService', PowerListController] 
};
