/* eslint-disable max-len */
/* eslint-disable no-underscore-dangle */
/* eslint-disable no-param-reassign */
/* eslint-disable camelcase */
/* eslint-disable global-require */
module.exports = function api(app) {
  const middlewares = require('../../middlewares');
  const { ROLES } = require('../../constants');

  const express = require('express');
  const quiniela = express.Router();
  const historical = express.Router();

  const QuinielaCtrl = require('../../controllers/quiniela');

  // Validations
  const { validate } = require('express-validation');
  const validations = require('./validations');

  /* Equipos */
  quiniela
    .route('/teams')
    .get(validate(validations.getTeams), QuinielaCtrl.findAllTeams)
    .post(
      middlewares.isLogged(),
      middlewares.isAuthorized([ROLES.ADMIN]),
      validate(validations.createTeam),
      QuinielaCtrl.createTeam,
    );

  quiniela
    .route('/teams/:id')
    .get(QuinielaCtrl.findTeamById)
    .put(
      middlewares.isLogged(),
      middlewares.isAuthorized([ROLES.ADMIN]),
      validate(validations.editTeam),
      QuinielaCtrl.editTeam,
    ).delete(
      middlewares.isLogged(),
      middlewares.isAuthorized([ROLES.ADMIN]),
      validate(validations.deleteTeam),
      QuinielaCtrl.deleteTeam,
    );

  /* Competiciones */
  quiniela
    .route('/competitions')
    .get(validate(validations.getCompetitions), QuinielaCtrl.findAllCompetitions)
    .post(
      middlewares.isLogged(),
      middlewares.isAuthorized([ROLES.ADMIN]),
      QuinielaCtrl.createCompetition,
    );

  quiniela
    .route('/competitions/:id')
    .get(QuinielaCtrl.findCompetitionById)
    .put(
      middlewares.isLogged(),
      middlewares.isAuthorized([ROLES.ADMIN]),
      QuinielaCtrl.editCompetition,
    );
  /* .delete(
      middlewares.isLogged_api,
      middlewares.isAuthorized_api([ROLES.ADMIN]),
      quiniela_api_deleteCompetition,
    ); */

  /* Temporadas */
  quiniela
    .route('/seasons')
    .get(validate(validations.getSeasons), QuinielaCtrl.findAllSeasons);
  /* .post(
      middlewares.isLogged_api,
      middlewares.isAuthorized_api([ROLES.ADMIN]),
      quiniela_api_createSeason,
    )
    .put(
      middlewares.isLogged_api,
      middlewares.isAuthorized_api([ROLES.ADMIN]),
      quiniela_api_editSeason,
    ); */
  quiniela
    .route('/seasons/:id')
    .get(QuinielaCtrl.findSeasonById);
  /* .delete(
      middlewares.isLogged_api,
      middlewares.isAuthorized_api([ROLES.ADMIN]),
      quiniela_api_deleteSeason,
    ); */

  /* Tickets de quinielas */
  quiniela
    .route('/tickets')
    .get(validate(validations.getTickets), QuinielaCtrl.findAllTickets);
  /* .post(
      middlewares.isLogged_api,
      middlewares.isAuthorized_api([ROLES.ADMIN]),
      quiniela_api_createTicket,
    ) */

  quiniela
    .route('/tickets/season/:season/day/:day')
    .get(validate(validations.getTicketBySeasonAndDay), QuinielaCtrl.findTicketBySeasonAndDay);
  /* .put(
      middlewares.isLogged_api,
      middlewares.isAuthorized_api([ROLES.ADMIN]),
      quiniela_api_editTicket,
    ); */

  /* Historico (Consultas Personalizadas) */
  historical
    .route('')
    .get(validate(validations.getHistorical), QuinielaCtrl.findHistorical);

  /* Historico (Consultas Estandar/Fijas) */
  historical
    .route('/combinations')
    .get(validate(validations.getHistoricalAppearedResults), QuinielaCtrl.findHistoricalAppearedResults);

  // quiniela.get('/getAllStoredTeams', general_api_storedTeams);

  quiniela.use('/historical', historical);

  app.use('/quiniela', quiniela);
};
