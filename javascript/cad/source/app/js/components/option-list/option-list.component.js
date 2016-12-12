class OptionListController {

	/**
	 * [инициация структуры приложения]
	 * @param  {Object} $rootScope     [глобальная область видимости приложения]
	 * @param  {Object} storageService [хранимая информация о приложении]
	 */
	constructor($rootScope, storageService){
        this.storage = storageService;
	}

}

export const OptionListComponent = {
  bindings: {
  	kid: '=',
  	index: '=',
  	nextIndex: '=',
  	structure: '=',
  	storage: '='
  },
  template: require("./option-list.html"),
  controller: ['$rootScope', 'storageService', OptionListController] 
};
