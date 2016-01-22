var app = angular.module('nickjonesIOApp', ['ui.router', 'ngMaterial'])


// CONFIG
app.config(['$urlRouterProvider', '$stateProvider', '$locationProvider', function($urlRouterProvider, $stateProvider, $locationProvider) {
  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: 'partials/home.html',
      controller: 'HomeCtrl'
    })
    $locationProvider.html5Mode(true);
}])


// CONTROLLER
app.controller("HomeCtrl", ["$scope", function ($scope) {
  $scope.message = "Home"
}])