import template from './carPreview.html';
import controller from './carPreview.controller';
import './carPreview.scss';

let carPreviewComponent = {
  restrict: 'E',
  bindings: {car: '<'},
  template,
  controller
};

export default carPreviewComponent;
