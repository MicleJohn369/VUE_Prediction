/* eslint-disable max-len */
/* eslint-disable no-underscore-dangle */
/* eslint-disable no-param-reassign */
/* eslint-disable camelcase */
/* eslint-disable global-require */
module.exports = function api(app) {
  // const middlewares = require('../../middlewares');
  // const { ROLES, HTTP_CODES } = require('../../constants');

  const express = require('express');
  const gordo = express.Router();
  const historical = express.Router();

  const GordoCtrl = require('../../controllers/gordo');

  // Validations
  const { validate } = require('express-validation');
  const validations = require('./validations.js');

  /* Tickets de Gordo */
  gordo
    .route('/tickets')
    .get(validate(validations.getTickets), GordoCtrl.findAllTickets);
  /* .post(
      middlewares.isLogged_api,
      middlewares.isAuthorized_api([ROLES.ADMIN]),
      gordo_api_newTicket,
    ) */
  gordo
    .route('/tickets/:id')
    .get(GordoCtrl.findTicketById);
  /* .put(
      middlewares.isLogged_api,
      middlewares.isAuthorized_api([ROLES.ADMIN]),
      gordo_api_editTicket,
    )
    .delete(
      middlewares.isLogged_api,
      middlewares.isAuthorized_api([ROLES.ADMIN]),
      gordo_api_deleteTicket,
    ); */

  /* Anyos */
  gordo
    .route('/years')
    .get(GordoCtrl.findAllYears);
  /* .post(
      middlewares.isLogged_api,
      middlewares.isAuthorized_api([ROLES.ADMIN]),
      gordo_api_newYear,
    ) */

  gordo
    .route('/years/:id')
    .get(GordoCtrl.findYearById);
  /* .put(
      middlewares.isLogged_api,
      middlewares.isAuthorized_api([ROLES.ADMIN]),
      gordo_api_editYear,
    );
    .delete(
      middlewares.isLogged_api,
      middlewares.isAuthorized_api([ROLES.ADMIN]),
      gordo_api_deleteYear,
    ); */

  /* Consultas: Estandar */
  historical.get(
    '/occurrencesByResult',
    validate(validations.getOccurrencesByResult),
    GordoCtrl.findOccurrencesByResult,
  );
  historical.get(
    '/occurrencesByResultWithSpecialNumber',
    validate(validations.getOccurrencesByResultWithSpecialNumber),
    GordoCtrl.findOccurrencesByResultWithSpecialNumber,
  );
  historical.get(
    '/occurrencesByNumber',
    validate(validations.getOccurrencesByNumber),
    GordoCtrl.findOccurrencesByNumber,
  );
  historical.get(
    '/occurrencesBySpecialNumber',
    validate(validations.getOccurrencesBySpecialNumber),
    GordoCtrl.findOccurrencesBySpecialNumber,
  );
  historical.get(
    '/lastDateByNumber',
    validate(validations.getLastDateByNumber),
    GordoCtrl.findLastDateByNumber,
  );
  historical.get(
    '/lastDateBySpecialNumber',
    validate(validations.getLastDateBySpecialNumber),
    GordoCtrl.findLastDateBySpecialNumber,
  );

  gordo.use('/historical', historical);

  app.use('/gordo', gordo);
};
