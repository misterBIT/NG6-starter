import angular from 'angular';
import uiRouter from 'angular-ui-router';
import carListComponent from './carList.component';

let carListModule = angular.module('carList', [
  uiRouter
])

.component('carList', carListComponent)

.name;

export default carListModule;
