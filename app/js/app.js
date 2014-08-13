'use strict';


// Declare app level module which depends on filters, and services
angular.module('myApp', [
  'ngRoute',
  'myApp.filters',
  'myApp.services',
  'myApp.directives',
  'myApp.controllers',
])
    .constant('ACCESS_LEVELS',{

        pub:1,
        user:2,
        admin:9

    })

 .config(['$routeProvider','ACCESS_LEVELS', function($routeProvider, ACCESS_LEVELS) {

   $routeProvider.when('/',{templateUrl: 'partials/login.html',controller: 'LoginCtrl',access_level: ACCESS_LEVELS.pub});
   $routeProvider.when('/tables', {templateUrl: 'partials/tables.html', controller: 'TablesCtrl', access_level: ACCESS_LEVELS.user});
   $routeProvider.when('/dashboard', {templateUrl: 'partials/dashboard.html', controller: 'DashboardCtrl', access_level: ACCESS_LEVELS.user});
   $routeProvider.when('/forms', {templateUrl: 'partials/forms.html', controller: 'FormsCtrl', access_level: ACCESS_LEVELS.user});
   $routeProvider.when('/charts', {templateUrl: 'partials/charts.html', controller: 'ChartsCtrl', access_level: ACCESS_LEVELS.user});
   $routeProvider.when('/grid', {templateUrl: 'partials/grid.html', controller: 'GridCtrl', access_level: ACCESS_LEVELS.user});
   $routeProvider.when('/elements', {templateUrl: 'partials/elements.html', controller: 'ElementsCtrl', access_level: ACCESS_LEVELS.user});
   $routeProvider.when('/elements', {templateUrl: 'partials/elements.html', controller: 'ElementsCtrl', access_level: ACCESS_LEVELS.user});
   $routeProvider.when('/messages', {templateUrl: 'partials/messages.html', controller: 'MessagesCtrl', access_level: ACCESS_LEVELS.user});
   $routeProvider.when('/messages/:messageId',{
                templateUrl: 'partials/messageDetail.html',
                controller: 'MessageDetailCtrl',
                access_level: 2,
                resolve: {
                    message: function (messagesSvc, $route) {
                        return messagesSvc.getMessage($route.current.params.messageId);
                    }
                }
            });

  $routeProvider.otherwise({redirectTo: '/'});
}]);
