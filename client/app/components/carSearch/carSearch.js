import angular from 'angular';
import uiRouter from 'angular-ui-router';
import carSearchComponent from './carSearch.component';

let carSearchModule = angular.module('carSearch', [
  uiRouter
])

.component('carSearch', carSearchComponent)

.name;

export default carSearchModule;
