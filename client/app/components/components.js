import angular from 'angular';
import Home from './home/home';
import About from './about/about';
import CarList from './carList/carList';
import CarPreview from './carPreview/carPreview';
import CarDetails from './carDetails/carDetails';
import CarSearch from './carSearch/carSearch';
import CarEdit from './carEdit/carEdit';
import CarBuy from './carBuy/carBuy';
import CarCenter from './carCenter/carCenter';

let componentModule = angular.module('app.components', [
  Home,
  About,
  CarList,
  CarPreview,
  CarDetails,
  CarSearch,
  CarEdit,
  CarBuy,
  CarCenter
])

.name;

export default componentModule;
