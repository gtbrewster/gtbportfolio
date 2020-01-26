'use strict';

// Configuring the About module
angular.module('about').run(['Menus',
  function (Menus) {
    // Add the about item
    Menus.addMenuItem('topbar', {
      title: 'About',
      state: 'about',
      roles: ['*']
    });
    
  }
]);
