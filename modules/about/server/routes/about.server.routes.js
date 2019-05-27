/**
 * Created by George on 5/4/2017.
 */
'use strict';

/**
 * Module dependencies.
 */
var aboutPolicy = require('../policies/about.server.policy'),
  about = require('../controllers/about.server.controller');

module.exports = function (app) {
  // About collection routes
  app.route('/api/about').all(aboutPolicy.isAllowed);
};
