/**
 * Created by George on 5/1/2017.
 */
'use strict';

//About controller
angular.module('about').controller('AboutController', ['$scope', 'Authentication',
  function($scope, Authentication){
    // Find a list of About
    // $scope.find = function () {
    //   $scope.about = About.query();
    // };
    $scope.authentication = Authentication;
  }
]);
