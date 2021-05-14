/* eslint-disable max-len */
/* eslint-disable no-underscore-dangle */
/* eslint-disable no-param-reassign */
/* eslint-disable camelcase */
/* eslint-disable global-require */
module.exports = function api(app) {
  // const middlewares = require('../../middlewares');
  // const { ROLES, HTTP_CODES } = require('../../constants');

  const express = require('express');
  const primitiva = express.Router();
  const historical = express.Router();

  const PrimitivaCtrl = require('../../controllers/primitiva');

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

  /* Tickets de Primitiva */
  primitiva
    .route('/tickets')
    .get(validate(validations.getTickets), PrimitivaCtrl.findAllTickets);
  /* .post(
      middlewares.isLogged_api,
      middlewares.isAuthorized_api([ROLES.ADMIN]),
      primitiva_api_nuevoTicket,
    ) */
  primitiva
    .route('/tickets/:id')
    .get(PrimitivaCtrl.findTicketById);
  /* .put(
      middlewares.isLogged_api,
      middlewares.isAuthorized_api([ROLES.ADMIN]),
      primitiva_api_editarTicket,
    )
    .delete(
      middlewares.isLogged_api,
      middlewares.isAuthorized_api([ROLES.ADMIN]),
      primitiva_api_deleteTicket,
    ) */

  /* Anyos */
  primitiva
    .route('/years')
    .get(PrimitivaCtrl.findAllYears);
  /* .post(
      middlewares.isLogged_api,
      middlewares.isAuthorized_api([ROLES.ADMIN]),
      primitiva_api_addNewYear,
    ) */

  primitiva
    .route('/years/:id')
    .get(PrimitivaCtrl.findYearById);
  /* .put(
      middlewares.isLogged_api,
      middlewares.isAuthorized_api([ROLES.ADMIN]),
      primitiva_api_editYear,
    )
    .delete(
      middlewares.isLogged_api,
      middlewares.isAuthorized_api([ROLES.ADMIN]),
      primitiva_api_deleteYear,
    ) */

  /* Consultas: Estandar */
  historical.get(
    '/occurrencesByResult',
    validate(validations.getOccurrencesByResult),
    PrimitivaCtrl.findOccurrencesByResult,
  );
  historical.get(
    '/occurrencesByResultWithReimbursement',
    validate(validations.getOccurrencesByResultWithReimbursement),
    PrimitivaCtrl.findOccurrencesByResultWithReimbursement,
  );
  historical.get(
    '/occurrencesByNumber',
    validate(validations.getOccurrencesByNumber),
    PrimitivaCtrl.findOccurrencesByNumber,
  );
  historical.get(
    '/occurrencesByReimbursement',
    validate(validations.getOccurrencesByReimbursement),
    PrimitivaCtrl.findOccurrencesByReimbursement,
  );
  historical.get(
    '/lastDateByNumber',
    validate(validations.getLastDateByNumber),
    PrimitivaCtrl.findLastDateByNumber,
  );
  historical.get(
    '/lastDateByReimbursement',
    validate(validations.getLastDateByReimbursement),
    PrimitivaCtrl.findLastDateByReimbursement,
  );

  primitiva.use('/historical', historical);

  app.use('/primitiva', primitiva);
};
