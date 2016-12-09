class AppController {

	/**
	 * [инициация структуры приложения]
	 * @param  {Object} $rootScope     [глобальная область видимости приложения]
	 * @param  {Object} storageService [хранимая информация о приложении]
	 */
	constructor($rootScope, storageService){
        this.storage = storageService;
	}

    /**
     * [добавление стержня]
     */
    addKernelBlock(){

        // первый старт приложения
        this.storage.start = true;
        this.storage.structure.item.push({
            F: {},
            q: {}
        });

    }

}

export const AppComponent = {
  template: require("./app.html"),
  controller: ['$rootScope', 'storageService', AppController] 
};
