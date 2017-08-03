//const angular = require('angular');
import angular from 'angular';
//var style = require('./style.less');

//creating app module
const ngModule = angular.module("app", []);

//talking to directive components
require('./directives').default(ngModule);