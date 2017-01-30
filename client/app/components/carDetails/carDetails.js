import angular from 'angular';
import uiRouter from 'angular-ui-router';
import carDetailsComponent from './carDetails.component';

let carDetailsModule = angular.module('carDetails', [
  uiRouter
])

.component('carDetails', carDetailsComponent)

// .config(($stateProvider) => {
//   "ngInject";
//   $stateProvider
//     .state('car', {
//       url: '/car/:id',
//       component: 'carDetails'
//     });
// })

.name;

export default carDetailsModule;
