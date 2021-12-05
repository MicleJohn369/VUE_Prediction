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
  const auth = express.Router();

  const AuthCtrl = require('../../controllers/auth');

  // Validations
  const { validate } = require('express-validation');
  const validations = require('./validations');

  auth
    .route('/login')
    .post(validate(validations.login), AuthCtrl.login);

  auth
    .route('/logout')
    .post(AuthCtrl.logout);

  auth
    .route('/user')
    .get(middlewares.isLogged(), AuthCtrl.getUser);

  app.use('/auth', auth);
};
