const QUINIELA = 'quiniela';
const TICKETS = 'tickets';
const SEASONS = 'seasons';
const COMPETITIONS = 'competitions';
const TEAMS = 'teams';
const HISTORICAL = 'historical';
const COMBINATIONS = 'combinations';

function methods(client) {
  const PronostigolClient = client;

  PronostigolClient.prototype.getQuinielaTickets = function getQuinielaTickets(params) {
    return this.restClient.get(`/${QUINIELA}/${TICKETS}`, {
      params,
    })
      .then((response) => response.data);
  };

  PronostigolClient.prototype.getQuinielaTicket = function getQuinielaTickets(params) {
    const season = params && params.season;
    const day = params && params.day;

    return this.restClient.get(`/${QUINIELA}/${TICKETS}/season/${season}/day/${day}`)
      .then((response) => response.data);
  };

  PronostigolClient.prototype.getQuinielaSeasons = function getQuinielaSeasons(params) {
    return this.restClient.get(`/${QUINIELA}/${SEASONS}`, {
      params,
    })
      .then((response) => response.data);
  };

  PronostigolClient.prototype.getQuinielaSeason = function getQuinielaSeason(id) {
    return this.restClient.get(`/${QUINIELA}/${SEASONS}/${id}`)
      .then((response) => response.data);
  };

  PronostigolClient.prototype
    .createQuinielaSeason = function createQuinielaSeason(season) {
      return this.restClient.post(`/${QUINIELA}/${SEASONS}`, season)
        .then((response) => response.data);
    };

  PronostigolClient.prototype
    .editQuinielaSeason = function editQuinielaSeason(id, season) {
      return this.restClient.put(`/${QUINIELA}/${SEASONS}/${id}`, season)
        .then((response) => response.data);
    };

  PronostigolClient.prototype.deleteQuinielaSeason = function deleteQuinielaSeason(id) {
    return this.restClient.delete(`/${QUINIELA}/${SEASONS}/${id}`)
      .then((response) => response.data);
  };

  PronostigolClient.prototype.getQuinielaCompetitions = function getQuinielaCompetitions(params) {
    return this.restClient.get(`/${QUINIELA}/${COMPETITIONS}`, {
      params,
    })
      .then((response) => response.data);
  };

  PronostigolClient.prototype.getQuinielaCompetition = function getQuinielaCompetition(id) {
    return this.restClient.get(`/${QUINIELA}/${COMPETITIONS}/${id}`)
      .then((response) => response.data);
  };

  PronostigolClient.prototype
    .createQuinielaCompetition = function createQuinielaCompetition(competition) {
      return this.restClient.post(`/${QUINIELA}/${COMPETITIONS}`, competition)
        .then((response) => response.data);
    };

  PronostigolClient.prototype
    .editQuinielaCompetition = function editQuinielaCompetition(id, competition) {
      return this.restClient.put(`/${QUINIELA}/${COMPETITIONS}/${id}`, competition)
        .then((response) => response.data);
    };

  PronostigolClient.prototype.deleteQuinielaCompetition = function deleteQuinielaCompetition(id) {
    return this.restClient.delete(`/${QUINIELA}/${COMPETITIONS}/${id}`)
      .then((response) => response.data);
  };

  PronostigolClient.prototype.getQuinielaTeams = function getQuinielaTeams(params) {
    return this.restClient.get(`/${QUINIELA}/${TEAMS}`, {
      params,
    })
      .then((response) => response.data);
  };

  PronostigolClient.prototype.getQuinielaTeam = function getQuinielaTeam(id) {
    return this.restClient.get(`/${QUINIELA}/${TEAMS}/${id}`)
      .then((response) => response.data);
  };

  PronostigolClient.prototype.createQuinielaTeam = function createQuinielaTeam(team) {
    return this.restClient.post(`/${QUINIELA}/${TEAMS}`, team)
      .then((response) => response.data);
  };

  PronostigolClient.prototype.editQuinielaTeam = function editQuinielaTeam(id, team) {
    return this.restClient.put(`/${QUINIELA}/${TEAMS}/${id}`, team)
      .then((response) => response.data);
  };

  PronostigolClient.prototype.deleteQuinielaTeam = function deleteQuinielaTeam(id) {
    return this.restClient.delete(`/${QUINIELA}/${TEAMS}/${id}`)
      .then((response) => response.data);
  };

  PronostigolClient.prototype.getQuinielaStats = function getQuinielaStats(params) {
    return this.restClient.get(`/${QUINIELA}/${HISTORICAL}`, {
      params,
    })
      .then((response) => response.data);
  };

  PronostigolClient.prototype.getQuinielaStandardStats = function getQuinielaStandardStats(params) {
    return this.restClient.get(`/${QUINIELA}/${HISTORICAL}/${COMBINATIONS}`, {
      params,
    })
      .then((response) => response.data);
  };
}

module.exports = methods;
