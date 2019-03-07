'use strict';

// Declare app level module which depends on views, and core components
angular.module('myApp', [
  'ui.router',
  'myApp.version'
])

.config(['$locationProvider', '$stateProvider', function($locationProvider, $stateProvider) {
  $locationProvider.hashPrefix('!');

//   $stateProvider.otherwise({redirectTo: '/view1'});
}]);
