const middlewares = require('../../middlewares');

/* eslint-disable max-len */
/* eslint-disable no-underscore-dangle */
/* eslint-disable no-param-reassign */
/* eslint-disable camelcase */
/* eslint-disable global-require */
module.exports = function api(app) {
  // const middlewares = require('../../middlewares');
  // const { ROLES, HTTP_CODES } = require('../../constants');

  const express = require('express');
  const user = express.Router();

  const UserCtrl = require('../../controllers/users');

  // Validations
  const { validate } = require('express-validation');
  const validations = require('./validations');

  user
    .route('/')
    .get(middlewares.isLogged(), validate(validations.getUsers), UserCtrl.findAllUsers);

  app.use('/users', user);
};
