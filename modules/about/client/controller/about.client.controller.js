'use strict';

//About controller
angular.module('about').controller('AboutController', ['$scope', 'Authentication',
  function($scope, Authentication){
    $scope.authentication = Authentication;



  }
]);
