import './sass/material.min.scss';
import './sass/template.scss';
import './sass/custom.scss';

import { AppComponent } from './app.component';
import { KernelComponent } from './components/kernel/kernel.component';
import { OptionListComponent } from './components/option-list/option-list.component';
import { PowerListComponent } from './components/power-list/power-list.component';
import { SettlementsComponent } from './components/settlements/settlements.component';
import { DrawComponent } from './components/draw/draw.component';

import  storageService  from './services/storageService';
import  localService  from './services/localService';

import './plugins/materialize';
import './plugins/materialize-plugins';
import './plugins/elif';

window.gauss = require('./plugins/gauss');
window.math = require('./plugins/math');

/*** Инициализация приложения */
const app = angular.module('cad', ['elif']);

app.component('appComponent', AppComponent);
app.component('kernel', KernelComponent);
app.component('optionList', OptionListComponent);
app.component('powerList', PowerListComponent);
app.component('settlements', SettlementsComponent);
app.component('draw', DrawComponent);

/*** Инициализация директив и сервисов */

app.service('storageService', storageService);
app.service('localService', localService);

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


app.directive('collapsible', function () {
  let directive = {
    restrict: 'A',
    link: link
  };

  return directive;

  function link($scope, element, attrs) {
      setTimeout(() => $(element).collapsible(), 200);
  }
  
});


app.directive('closemenu', function () {
  let directive = {
    restrict: 'A',
    link: link
  };

  return directive;

  function link($scope, element, attrs) {
      setTimeout(() => {

      	$(element).on({
      		'click': function(e){
      			$('.mdl-layout').addClass('is-small-screen')
      		}
      	});

      }, 200);
  }
  
});

