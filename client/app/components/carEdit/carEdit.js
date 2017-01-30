import angular from 'angular';
import uiRouter from 'angular-ui-router';
import carEditComponent from './carEdit.component';

let carEditModule = angular.module('carEdit', [
  uiRouter
])

.component('carEdit', carEditComponent)

.name;

export default carEditModule;
