import template from './carDetails.html';
import controller from './carDetails.controller';
import './carDetails.scss';

let carDetailsComponent = {
  restrict: 'E',
  bindings: {car: '<'},
  template,
  controller
};

export default carDetailsComponent;
