import angular from 'angular';
import uiRouter from 'angular-ui-router';
import carBuyComponent from './carBuy.component';

let carBuyModule = angular.module('carBuy', [
  uiRouter
])

.component('carBuy', carBuyComponent)

.name;

export default carBuyModule;
