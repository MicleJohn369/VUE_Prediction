const BONOLOTO = 'bonoloto';
const TICKETS = 'tickets';
const YEARS = 'years';
const HISTORICAL = 'historical';

function bonolotoMethods(client) {
  const PronostigolClient = client;

  PronostigolClient.prototype.getBonolotoTickets = function getBonolotoTickets(params) {
    return this.restClient.get(`/${BONOLOTO}/${TICKETS}`, {
      params,
    })
      .then((response) => response.data);
  };

  PronostigolClient.prototype.getBonolotoYears = function getBonolotoYears(params) {
    return this.restClient.get(`/${BONOLOTO}/${YEARS}`, {
      params,
    })
      .then((response) => response.data);
  };

  PronostigolClient.prototype
    .getBonolotoOccurrencesByNumberStats = function getBonolotoOccurrencesByNumberStats(params) {
      return this.restClient.get(`/${BONOLOTO}/${HISTORICAL}/occurrencesByNumber`, {
        params,
      })
        .then((response) => response.data);
    };

  PronostigolClient.prototype
    .getBonolotoOccurrencesByResultStats = function getBonolotoOccurrencesByResultStats(params) {
      return this.restClient.get(`/${BONOLOTO}/${HISTORICAL}/occurrencesByResult`, {
        params,
      })
        .then((response) => response.data);
    };

  PronostigolClient.prototype
    .getBonolotoOccurrencesByResultWithReimbursementStats = function
    getBonolotoOccurrencesByResultWithReimbursementStats(params) {
      return this.restClient.get(`/${BONOLOTO}/${HISTORICAL}/occurrencesByResultWithReimbursement`, {
        params,
      })
        .then((response) => response.data);
    };

  PronostigolClient.prototype
    .getBonolotoOccurrencesByReimbursementStats = function
    getBonolotoOccurrencesByReimbursementStats(params) {
      return this.restClient.get(`/${BONOLOTO}/${HISTORICAL}/occurrencesByReimbursement`, {
        params,
      })
        .then((response) => response.data);
    };

  PronostigolClient.prototype
    .getBonolotoLastDateByNumberStats = function getBonolotoLastDateByNumberStats(params) {
      return this.restClient.get(`/${BONOLOTO}/${HISTORICAL}/lastDateByNumber`, {
        params,
      })
        .then((response) => response.data);
    };

  PronostigolClient.prototype
    .getBonolotoLastDateByReimbursementStats = function
    getBonolotoLastDateByReimbursementStats(params) {
      return this.restClient.get(`/${BONOLOTO}/${HISTORICAL}/lastDateByReimbursement`, {
        params,
      })
        .then((response) => response.data);
    };
}

module.exports = bonolotoMethods;
