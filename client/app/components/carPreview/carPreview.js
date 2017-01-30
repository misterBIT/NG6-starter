import angular from 'angular';
import uiRouter from 'angular-ui-router';
import carPreviewComponent from './carPreview.component';

let carPreviewModule = angular.module('carPreview', [
  uiRouter
])

.component('carPreview', carPreviewComponent)

.name;

export default carPreviewModule;
