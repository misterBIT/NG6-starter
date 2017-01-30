import template from './carSearch.html';
import controller from './carSearch.controller';
import './carSearch.scss';

let carSearchComponent = {
  restrict: 'E',
  bindings: {onSearch: '&'},
  template,
  controller
};

export default carSearchComponent;
