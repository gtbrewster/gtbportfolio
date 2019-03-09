/**
 * Created by George on 5/1/2017.
 */
'use strict';

// Configuring the About module
angular.module('about',['AboutController']).run(['Menus',
  function (Menus) {
    // Add the about dropdown item
    Menus.addMenuItem('topbar', {
      title: 'About',
      state: 'about',
      type: 'dropdown',
      roles: ['*']
    });
  }
]);
