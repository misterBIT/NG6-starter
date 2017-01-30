import angular from 'angular';
import Navbar from './navbar/navbar';
import Hero from './hero/hero';
import User from './user/user';
import CarFactory from './car/car.factory';
import CartFactory from './cart/cart.factory';

let commonModule = angular.module('app.common', [
  Navbar,
  Hero,
  User
])

.factory('CarFactory', CarFactory)
.factory('CartFactory', CartFactory)

.name;

export default commonModule;
