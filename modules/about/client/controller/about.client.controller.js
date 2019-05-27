/**
 * Created by George on 5/1/2017.
 */
'use strict';

//About controller
angular.module('about').controller('AboutController', ['$scope', 'Authentication',
  function($scope, Authentication){
    $scope.authentication = Authentication;


  }
]);
