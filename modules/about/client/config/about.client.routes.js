'use strict';

// Setting up route
angular.module('about').config(['$stateProvider',
  function ($stateProvider) {
    // About state routing
    $stateProvider
      .state('about', {
        url:'/about',
        templateUrl: 'modules/about/client/views/about.client.view.html'
      });  
    }
]);
