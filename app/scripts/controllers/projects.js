'use strict';

angular.module('hipoApp')
  .controller('ProjectsCtrl', ['$scope', 'projectsService', function ($scope, projectsService) {

      $scope.projects = projectsService.getProjects();

    }]);
