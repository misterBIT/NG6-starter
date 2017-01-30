import template from './carList.html';
import controller from './carList.controller';
import './carList.scss';

let carListComponent = {
  restrict: 'E',
  bindings: {cars: '<'},
  template,
  controller
};

export default carListComponent;
