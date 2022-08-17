const middlewares = require('../../middlewares');

/* eslint-disable max-len */
/* eslint-disable no-underscore-dangle */
/* eslint-disable no-param-reassign */
/* eslint-disable camelcase */
/* eslint-disable global-require */
module.exports = function api(app) {
  const express = require('express');
  const users = express.Router();

  const UserCtrl = require('../../controllers/users');

  // Validations
  const { validate } = require('express-validation');
  const validations = require('./validations');

  users
    .route('/')
    .get(middlewares.isLogged(), validate(validations.getUsers, {}, {
      allowUnknown: true,
    }), UserCtrl.findAllUsers)
    .post(middlewares.isLogged(), middlewares.isAuthorized(['admin']), validate(validations.createUser), UserCtrl.createUser);

  users.route('/:id')
    .get(middlewares.isLogged(), middlewares.isAuthorized(['admin']), validate(
      validations.getUser,
    ), UserCtrl.editUser)
    .put(middlewares.isLogged(), middlewares.isAuthorized(['admin']), validate(validations.editUser), UserCtrl.editUser);

  app.use('/users', users);
};
