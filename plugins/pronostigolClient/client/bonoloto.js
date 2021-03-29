const BONOLOTO = 'bonoloto';
const TICKETS = 'tickets';
const YEARS = 'years';
const HISTORICAL = 'historical';
const COMBINATIONS = 'combinations';

function bonolotoMethods(client) {
  const PronostigolClient = client;

  PronostigolClient.prototype.getBonolotoTickets = function getBonolotoTickets(params) {
    return this.restClient.get(`/${BONOLOTO}/${TICKETS}`, {
      params,
    })
      .then((response) => response.data);
  };

  PronostigolClient.prototype.getBonolotoTicket = function getBonolotoTickets(params) {
    const year = params && params.year;
    const day = params && params.day;

    return this.restClient.get(`/${BONOLOTO}/${TICKETS}/year/${year}/day/${day}`)
      .then((response) => response.data);
  };

  PronostigolClient.prototype.getBonolotoYears = function getBonolotoYears(params) {
    return this.restClient.get(`/${BONOLOTO}/${YEARS}`, {
      params,
    })
      .then((response) => response.data);
  };

  PronostigolClient.prototype.getBonolotoStats = function getBonolotoStats(params) {
    return this.restClient.get(`/${BONOLOTO}/${HISTORICAL}`, {
      params,
    })
      .then((response) => response.data);
  };

  PronostigolClient.prototype.getBonolotoStandardStats = function getBonolotoStandardStats(params) {
    return this.restClient.get(`/${BONOLOTO}/${HISTORICAL}/${COMBINATIONS}`, {
      params,
    })
      .then((response) => response.data);
  };
}

module.exports = bonolotoMethods;
