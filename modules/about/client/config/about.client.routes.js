/**
 * Created by George on 5/1/2017.
 */
'use strict';

// Setting up route
angular.module('about').config(['$stateProvider',
  function ($stateProvider) {
    // Articles state routing
    $stateProvider
      .state('about', {
        url:'/about',
        abstract: true,
        template: '<ui-view/>'
      })
      .state('about.list', {
        url: '',
        templateUrl: 'modules/about/client/views/about.client.view.html'
      });
  }
]);
