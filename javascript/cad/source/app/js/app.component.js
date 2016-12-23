class AppController {

  	/**
  	 * [инициация структуры приложения]
  	 * @param  {Object} $rootScope     [глобальная область видимости приложения]
  	 * @param  {Object} storageService [хранимая информация о приложении]
  	 */
  	constructor($rootScope, $scope, storageService, localService){
          let self = this;

          this.storage = storageService;
          this.localStorage = localService;

          this.Math = window.Math;

          this.page = {
            preprocess: true,
            process: false,
            postprocess: false
          };

          this.copyYE = angular.copy(storageService.ye);

          this.dimension = {
            setting: false
          };

          this._newProject = angular.copy(storageService); 

          window.clicked = false;
          window.clickX = 0;
          window.clickY = 0;

          $rootScope.onLoad = false;
          setTimeout(function(){
            $rootScope.onLoad = true;
            angular.element($( 'body' )).scope().$apply();
          }, 2000);

          $('.mdl-layout__content').on({
              'mousemove': function(e) {
                  clicked && updateScrollPos(e);
              },
              'mousedown': function(e) {
                  clicked = true;
                  clickY = e.pageX;
              },
              'mouseup': function() {
                  clicked = false;
                  $('.mdl-layout__content').css('cursor', 'auto');
              }
          });

          let updateScrollPos = function(e) {
              $('.mdl-layout__content').css('cursor', 'move');
              $('.mdl-layout__content').scrollLeft($('.mdl-layout__content').scrollLeft() + (clickY - e.pageX));
          };

          $(window).bind('keydown', function(event) {
              if (event.ctrlKey || event.metaKey) {
                  switch (String.fromCharCode(event.which).toLowerCase()) {
                  case 's':
                      $('.save-project').trigger('click')
                      event.preventDefault();
                      break;
                  case 'o':
                      $('.open-project').trigger('click')
                      event.preventDefault();
                      break;
                  case 'n':
                      $('.new-project').trigger('click')
                      event.preventDefault();
                      break;
                  }
              }
          });

          $(document).bind('keydown', function(e) {

              if (!self.page.preprocess) return;

              if (e.shiftKey && e.which === 78) {

                  self.addKernelBlock();
                  self.reRender();

                  e.preventDefault();
                  return false;
              }
          });

          $('.mdl-layout__content').bind('mousewheel', function(e){
              if (!storageService.start) return;
              if (!self.page.preprocess) return;

              if (e.originalEvent.wheelDelta /120 > 0 && event.ctrlKey == true) {
                if (storageService.ye < self.copyYE) {
                  storageService.ye += 10;
                }
              } else if (e.originalEvent.wheelDelta /120 < 0 && event.ctrlKey == true) {
                if (storageService.ye > 10) {
                  storageService.ye -= 10;
                }
              }
              angular.element($( 'body' )).scope().$apply();
              e.preventDefault();
              return false;
          });

          
          $('input').on('focus', ()=>{
            self.reRender();
          });

          $(window).keydown(function (e) {
            if (e.which == 32){//space bar
                if (!storageService.minimal) {
                  storageService.minimal = true;
                  angular.element($( 'body' )).scope().$apply();
                }  
            }
          });

          $(window).keyup(function (e) {
            if (e.which == 32){//space bar
                storageService.minimal = false;
                angular.element($( 'body' )).scope().$apply();
            }
          });
      
  	}

    /**
     * [reRender description]
     * @return {[type]} [description]
     */
    reRender(){
      angular.element($( 'body' )).scope().$apply();
    }

    /**
     * [добавление стержня]
     */
    addKernelBlock(){

        let storageService = this.storage;

        // первый старт приложения
        this.storage.start = true;

        // добавление первого стержня
        this.storage.structure.item.push(
          angular.copy(storageService.base)
        );

    }

    openSettings(){
      this.dimension.setting = true;
    }

    closeSettings(){
      this.dimension.setting = false;
    }

    /**
     * Количество узлов
     * @return {[type]} [description]
     */
    getNumberEdge(){
      let storageService = this.storage;
      let countEdge = new Array(storageService.structure.item.length+1);
      return countEdge;
    }

    /**
     * Открытие проекта
     * @return {[type]} [description]
     */
    openProject(){
      let $scope = this._$scope;
      let page = this.page;
      let $rootScope = this._$rootScope;
      let storageService = this.storage;

      this.localStorage.itemNx = [];
      this.localStorage.exec = false;

      try {

        dialog.showOpenDialog({ filters: [ { name: 'Файл проекта', extensions: ['spс'] } ]}, function (fileNames) {

          if (fileNames === undefined) return;

          var fileName = fileNames[0];

          fs.readFile(fileName, 'utf-8', function (err, data) {
           
            try {
              let project = JSON.parse(data);
              if (project.hasOwnProperty('spc_version')) {
                angular.extend(storageService, project);
                
                for (let i in page) page[i] = false;
                page.preprocess = true;

                angular.element($( 'body' )).scope().$apply();
              } else {
                dialog.showErrorBox("Данный файл не является файлом проекта", 'Отсутствует строка spc_version');
              }
              
            } catch (err){
              dialog.showErrorBox("Данный файл не является файлом проекта", err.message);
            }

          });

         }); 

      } catch (e){
        alert(e)
      }

    }

    /**
     * Сохранение проекта
     * @return {[type]} [description]
     */
    saveProject(){
      let storageService = this.storage;
      let prj = JSON.stringify(storageService, null, "\t");

      try {

        dialog.showSaveDialog({ filters: [ { name: 'Файл проекта', extensions: ['spс'] } ]}, function (fileName) {

          if (fileName === undefined) return;

          fs.writeFile(fileName, prj, function (err) {   
            if (!err) {
              
              dialog.showMessageBox({ 
                message: "Файл проекта успешно сохранен!",
                buttons: ["OK"] 
              });

            } else {
              dialog.showErrorBox("File Save Error", err.message);
            }

          });

        }); 

      } catch(e){
        alert(e)
      }

    }

    /**
     * Завершение программы
     * @return {[type]} [description]
     */
    appQuit(){
      window.app.quit();
    }

    newProject(){
      let storageService = this.storage;
      let startService = angular.copy(this._newProject);

      this.localStorage.itemNx = [];
      this.localStorage.exec = false;

      let page = this.page;
      for (let i in page) page[i] = false;
      page.preprocess = true;

      angular.extend(storageService, startService);
    }

    /**
     * [pageProcess description]
     * @return {[type]} [description]
     */
    pageProcess(){
      let page = this.page;
      for (let i in page) page[i] = false;
      page.process = true;
    }

    pagePreProcess(){
      let page = this.page;
      for (let i in page) page[i] = false;
      page.preprocess = true;
    }

    pagePostProcess(){
      let page = this.page;
      for (let i in page) page[i] = false;
      page.postprocess = true;
    }

}

export const AppComponent = {
  template: require("./app.html"),
  controller: ['$rootScope', '$scope', 'storageService', 'localService', AppController] 
};
