import angular from 'angular';
import uiRouter from 'angular-ui-router';
import carCenterComponent from './carCenter.component';

let carCenterModule = angular.module('carCenter', [
  uiRouter
])

.component('carCenter', carCenterComponent)
.config(($stateProvider) => {
  "ngInject";
  $stateProvider
    .state('cars', {
      url: '/cars',
      component: 'carCenter'
    })
    .state('cars.details', {
      url: '/:id',
      component: 'carDetails'
    })
    .state('cars.edit', {
      url: '/edit/?id',
      component: 'carEdit'
    })
})
.name;

export default carCenterModule;
