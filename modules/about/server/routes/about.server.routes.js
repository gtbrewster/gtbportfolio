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
  app.route('/about').get(about.list);
    // .post(articles.create);

  // Single article routes
  // app.route('/api/articles/:articleId').all(articlesPolicy.isAllowed)
  //   .get(articles.read)
  //   .put(articles.update)
  //   .delete(articles.delete);

  // Finish by binding the article middleware
  app.param('aboutId', about.aboutByID);
};
