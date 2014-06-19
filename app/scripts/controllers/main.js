'use strict';

/**
 * @ngdoc function
 * @name hipoApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the hipoApp
 */
angular.module('hipoApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
