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
  const validations = require('./validations.js');

  function borrarPronosticos(aux) {
    const json = aux;

    if (json.apuestas != null) {
      delete json.apuestas;
    }

    return json;
  }

  function borrarPrecio(aux) {
    const json = aux;

    if (json.precio != null) {
      delete json.precio;
    }

    return json;
  }

  function borrarPremio(aux) {
    const json = aux;

    if (json.premio != null) {
      delete json.premio;
    }

    return json;
  }

  // eslint-disable-next-line no-unused-vars
  function filtrarInformacion(result) {
    let json = JSON.parse(JSON.stringify(result));
    json = borrarPronosticos(json);
    json = borrarPrecio(json);
    json = borrarPremio(json);
    return json;
  }

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
    );
  */

  /* Anyos */
  bonoloto
    .route('/years')
    .get(BonolotoCtrl.findAllYears);
  /* .post(
      middlewares.isLogged_api,
      middlewares.isAuthorized_api([ROLES.ADMIN]),
      bonoloto_api_newYear,
    )
    .put(
      middlewares.isLogged_api,
      middlewares.isAuthorized_api([ROLES.ADMIN]),
      bonoloto_api_editYear,
    );
  */
  bonoloto
    .route('/years/:id')
    .get(BonolotoCtrl.findYearById);
  /* .delete(
      middlewares.isLogged_api,
      middlewares.isAuthorized_api([ROLES.ADMIN]),
      bonoloto_api_deleteYear,
    );
  */

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
