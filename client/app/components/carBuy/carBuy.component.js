import template from './carBuy.html';
import controller from './carBuy.controller';
import './carBuy.scss';

let carBuyComponent = {
  restrict: 'E',
  bindings: {},
  template,
  controller,
  transclude: true
};

export default carBuyComponent;
