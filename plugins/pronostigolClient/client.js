function PronostigolClient({
  restClient,
}) {
  this.restClient = restClient;
}

const QUINIELA = 'quiniela';
const TICKETS = 'tickets';
const SEASONS = 'seasons';
const COMPETITIONS = 'competitions';
const TEAMS = 'teams';
const HISTORICAL = 'historical';
const COMBINATIONS = 'combinations';

/**
 * API Resources
 */

PronostigolClient.prototype.setBaseURL = function setBaseURL(baseURL) {
  this.restClient.defaults.baseURL = baseURL;
};

/**
 * Github methods
 */
PronostigolClient.prototype.getLastCommitDate = function getLastCommitDate() {
  return this.restClient.get('https://api.github.com/repos/jualoppaz/pronostigol-v2/commits')
    .then((response) => response.data);
};

/**
 * Quiniela methods
 */
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

PronostigolClient.prototype.getQuinielaCompetitions = function getQuinielaCompetitions(params) {
  return this.restClient.get(`/${QUINIELA}/${COMPETITIONS}`, {
    params,
  })
    .then((response) => response.data);
};

PronostigolClient.prototype.getQuinielaTeams = function getQuinielaTeams(params) {
  return this.restClient.get(`/${QUINIELA}/${TEAMS}`, {
    params,
  })
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

module.exports = (deps) => PronostigolClient.bind(null, deps);
