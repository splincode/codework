import './sass/material.min.scss';
import './sass/template.scss';
import './sass/custom.scss';

import { AppComponent } from './app.component';
import { KernelComponent } from './components/kernel/kernel.component';
import  storageService  from './services/storageService';

import './plugins/materialize';
import './plugins/materialize-plugins';

/*** Инициализация приложения */
const app = angular.module('cad', []);

app.component('appComponent', AppComponent);
app.component('kernel', KernelComponent);

app.service('storageService', storageService);
app.directive('dropdown', function () {
  let directive = {
    restrict: 'A',
    link: link
  };

  return directive;

  function link($scope, element, attrs) {
      setTimeout(() => $(element).dropdown(), 200);
  }
  
});