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
    .state('projects', {
      url: '/projects',
      templateUrl: 'partials/projects.html',
      controller: 'ProjectsCtrl'
    })
    .state('skills', {
      url: '/skills',
      templateUrl: 'partials/skills.html',
      controller: 'SkillsCtrl'
    })
    .state('contact', {
      url: '/contact',
      templateUrl: 'partials/contact.html',
      controller: 'ContactCtrl'
    })
  $locationProvider.html5Mode(true);
}])


// CONTROLLER
app.controller("HomeCtrl", ["$scope", function ($scope) {
  $scope.message = "About"
}])
app.controller("ProjectsCtrl", ["$scope", function ($scope) {
  $scope.message = "Projects"
}])
app.controller("SkillsCtrl", ["$scope", function ($scope) {
  $scope.message = "Skills"
}])
app.controller("ContactCtrl", ["$scope", function ($scope) {
  $scope.message = "Contact"
}])