/* eslint-disable max-len */
/* eslint-disable no-underscore-dangle */
/* eslint-disable no-param-reassign */
/* eslint-disable camelcase */
/* eslint-disable global-require */
module.exports = function api(app) {
  // const middlewares = require('../../middlewares');
  // const { ROLES, HTTP_CODES } = require('../../constants');

  const express = require('express');
  const bonoloto = express.Router();
  const historical = express.Router();

  const BonolotoCtrl = require('../../controllers/bonoloto');

  // Validations
  const { validate } = require('express-validation');
  const validations = require('./validations');

  /* Tickets de Bonoloto */
  bonoloto
    .route('/tickets')
    .get(validate(validations.getTickets), BonolotoCtrl.findAllTickets);
  /* .post(
      middlewares.isLogged_api,
      middlewares.isAuthorized_api([ROLES.ADMIN]),
      bonoloto_api_newTicket,
    ) */
  bonoloto
    .route('/tickets/:id')
    .get(BonolotoCtrl.findTicketById);
  /* .put(
      middlewares.isLogged_api,
      middlewares.isAuthorized_api([ROLES.ADMIN]),
      bonoloto_api_editTicket,
    )
    .delete(
      middlewares.isLogged_api,
      middlewares.isAuthorized_api([ROLES.ADMIN]),
      bonoloto_api_deleteTicket,
    ); */

  /* Anyos */
  bonoloto
    .route('/years')
    .get(BonolotoCtrl.findAllYears);
  /* .post(
      middlewares.isLogged_api,
      middlewares.isAuthorized_api([ROLES.ADMIN]),
      bonoloto_api_newYear,
    ) */

  bonoloto
    .route('/years/:id')
    .get(BonolotoCtrl.findYearById);
  /* .put(
      middlewares.isLogged_api,
      middlewares.isAuthorized_api([ROLES.ADMIN]),
      bonoloto_api_editYear,
    );
    .delete(
      middlewares.isLogged_api,
      middlewares.isAuthorized_api([ROLES.ADMIN]),
      bonoloto_api_deleteYear,
    ); */

  /* Consultas: Estandar */
  historical.get(
    '/occurrencesByResult',
    validate(validations.getOccurrencesByResult),
    BonolotoCtrl.findOccurrencesByResult,
  );
  historical.get(
    '/occurrencesByResultWithReimbursement',
    validate(validations.getOccurrencesByResultWithReimbursement),
    BonolotoCtrl.findOccurrencesByResultWithReimbursement,
  );
  historical.get(
    '/occurrencesByNumber',
    validate(validations.getOccurrencesByNumber),
    BonolotoCtrl.findOccurrencesByNumber,
  );
  historical.get(
    '/occurrencesByReimbursement',
    validate(validations.getOccurrencesByReimbursement),
    BonolotoCtrl.findOccurrencesByReimbursement,
  );
  historical.get(
    '/lastDateByNumber',
    validate(validations.getLastDateByNumber),
    BonolotoCtrl.findLastDateByNumber,
  );
  historical.get(
    '/lastDateByReimbursement',
    validate(validations.getLastDateByReimbursement),
    BonolotoCtrl.findLastDateByReimbursement,
  );

  bonoloto.use('/historical', historical);

  app.use('/bonoloto', bonoloto);
};
