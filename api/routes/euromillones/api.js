/* eslint-disable max-len */
/* eslint-disable no-underscore-dangle */
/* eslint-disable no-param-reassign */
/* eslint-disable camelcase */
/* eslint-disable global-require */
module.exports = function api(app) {
  // const middlewares = require('../../middlewares');
  // const { ROLES, HTTP_CODES } = require('../../constants');

  const express = require('express');
  const euromillones = express.Router();
  const historical = express.Router();

  const EuromillonesCtrl = require('../../controllers/euromillones');

  // Validations
  const { validate } = require('express-validation');
  const validations = require('./validations');

  /* Tickets del Euromillones */
  euromillones
    .route('/tickets')
    .get(validate(validations.getTickets), EuromillonesCtrl.findAllTickets);
  /* .post(
      middlewares.isLogged_api,
      middlewares.isAuthorized_api([ROLES.ADMIN]),
      euromillones_api_nuevoTicket,
    ) */
  euromillones
    .route('/tickets/:id')
    .get(EuromillonesCtrl.findTicketById);
  /* .put(
      middlewares.isLogged_api,
      middlewares.isAuthorized_api([ROLES.ADMIN]),
      euromillones_api_editarTicket,
    );
    .delete(
      middlewares.isLogged_api,
      middlewares.isAuthorized_api([ROLES.ADMIN]),
      euromillones_api_deleteTicket,
    ) */

  /* Anyos */
  euromillones
    .route('/years')
    .get(EuromillonesCtrl.findAllYears);
  /* .post(
      middlewares.isLogged_api,
      middlewares.isAuthorized_api([ROLES.ADMIN]),
      euromillones_api_addNewYear,
    )
    .put(
      middlewares.isLogged_api,
      middlewares.isAuthorized_api([ROLES.ADMIN]),
      euromillones_api_editYear,
    ); */

  euromillones
    .route('/years/:id')
    .get(EuromillonesCtrl.findYearById);
  /* .delete(
      middlewares.isLogged_api,
      middlewares.isAuthorized_api([ROLES.ADMIN]),
      euromillones_api_deleteYear,
    ); */

  /* Consultas: Estandar */
  historical.get(
    '/occurrencesByResult',
    validate(validations.getOccurrencesByResult),
    EuromillonesCtrl.findOccurrencesByResult,
  );
  historical.get(
    '/occurrencesByResultWithStars',
    validate(validations.getOccurrencesByResultWithStars),
    EuromillonesCtrl.findOccurrencesByResultWithStars,
  );
  historical.get(
    '/occurrencesByNumber',
    validate(validations.getOccurrencesByNumber),
    EuromillonesCtrl.findOccurrencesByNumber,
  );
  historical.get(
    '/occurrencesByStar',
    validate(validations.getOccurrencesByStar),
    EuromillonesCtrl.findOccurrencesByStar,
  );
  historical.get(
    '/occurrencesByStarsPair',
    validate(validations.getOccurrencesByStarsPair),
    EuromillonesCtrl.findOccurrencesByStarsPair,
  );
  historical.get(
    '/lastDateByNumber',
    validate(validations.getLastDateByNumber),
    EuromillonesCtrl.findLastDateByNumber,
  );
  historical.get(
    '/lastDateByStar',
    validate(validations.getLastDateByStar),
    EuromillonesCtrl.findLastDateByStar,
  );

  euromillones.use('/historical', historical);

  app.use('/euromillones', euromillones);
};
