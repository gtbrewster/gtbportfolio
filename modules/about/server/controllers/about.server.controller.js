/**
 * Created by George on 5/4/2017.
 */
'use strict';

/**
 * Module dependencies.
 */
var path = require('path'),
  mongoose = require('mongoose'),
  About = mongoose.model('About'),
  errorHandler = require(path.resolve('./modules/core/server/controllers/errors.server.controller'));
/**
 * List of About
 */
exports.list = function (req, res) {
  About.find().sort('-created').populate('user', 'displayName').exec(function (err, about) {
    if (err) {
      return res.status(400).send({
        message: errorHandler.getErrorMessage(err)
      });
    } else {
      res.json(about);
    }
  });
};

/**
 * About middleware
 */
exports.aboutByID = function (req, res, next, id) {

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).send({
      message: 'About is invalid'
    });
  }

  About.findById(id).populate('user', 'displayName').exec(function (err, about) {
    if (err) {
      return next(err);
    } else if (!about) {
      return res.status(404).send({
        message: 'No about with that identifier has been found'
      });
    }
    req.about = about;
    next();
  });
};
