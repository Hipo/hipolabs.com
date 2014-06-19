'use strict';

angular
  .module('hipoApp', [
    'ngTouch',
    'ui.router'
  ])
  .config(['$urlRouterProvider', '$stateProvider',
          function ($urlRouterProvider, $stateProvider) {

    // Default route
    $urlRouterProvider.otherwise('/');

    // UI Router Config
    $stateProvider
      .state('projects', {
        url: '/',
        templateUrl: 'views/projects.html',
        controller: 'ProjectsCtrl'
      });

  }]);
