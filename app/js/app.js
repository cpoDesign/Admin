'use strict';


// Declare app level module which depends on filters, and services
angular.module('myApp', [
  'ngRoute',
  'myApp.filters',
  'myApp.services',
  'myApp.directives',
  'myApp.controllers'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/', {templateUrl: 'partials/login.html', controller: 'LoginCtrl'});
  $routeProvider.when('/blankpage', {templateUrl: 'partials/blankpage.html', controller: 'BlankPageCtrl'});
  $routeProvider.when('/tables', {templateUrl: 'partials/tables.html', controller: 'TablesCtrl'});

  $routeProvider.when('/view1', {templateUrl: 'partials/partial1.html', controller: 'MyCtrl1'});
  $routeProvider.when('/view2', {templateUrl: 'partials/partial2.html', controller: 'MyCtrl2'});
  $routeProvider.otherwise({redirectTo: '/view1'});
}]);
