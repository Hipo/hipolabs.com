'use strict';

angular.module('hipoApp')
  .factory('projectsService', function () {

    var projects = [
    {
      'title': 'Tryouts',
      'description': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis maxime quod obcaecati, vero facilis neque, quasi! Quod porro excepturi, maiores.',
      'appstoreUrl': 'http://appstore.com/tryouts',
      'webUrl': 'http://tryouts.io',
      'images': [
        {
          'type': 'desktop',
          'url': 'http://lorempixel.com/512/384/sports/1'
        },
        {
          'type': 'desktop',
          'url': 'http://lorempixel.com/512/384/sports/2'
        },
        {
          'type': 'mobile',
          'url': 'http://lorempixel.com/480/640/sports/3'
        }
      ]
    },
    {
      'title': 'Chroma',
      'description': 'Quis maxime quod obcaecati, vero facilis neque, quasi! Quod porro excepturi, maiores. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt molestiae nemo quasi eligendi eaque mollitia blanditiis similique facilis praesentium doloribus, esse vitae optio fugit sed officiis iusto, nihil rerum culpa.',
      'appstoreUrl': 'http://appstore.com/chroma',
      'webUrl': 'http://chro.ma',
      'images': [
        {
          'type': 'desktop',
          'url': 'http://lorempixel.com/512/384/sports/4'
        },
        {
          'type': 'desktop',
          'url': 'http://lorempixel.com/512/384/sports/5'
        },
        {
          'type': 'mobile',
          'url': 'http://lorempixel.com/480/640/sports/6'
        }
      ]
    }
    ];

    // Public API here
    return {
      getProjects: function () {
        return projects;
      }
    };
  });
