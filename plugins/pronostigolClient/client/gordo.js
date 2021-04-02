const GORDO = 'gordo';
const TICKETS = 'tickets';
const YEARS = 'years';
const HISTORICAL = 'historical';

function bonolotoMethods(client) {
  const PronostigolClient = client;

  PronostigolClient.prototype.getGordoTickets = function getGordoTickets(params) {
    return this.restClient.get(`/${GORDO}/${TICKETS}`, {
      params,
    })
      .then((response) => response.data);
  };

  PronostigolClient.prototype.getGordoYears = function getGordoYears(params) {
    return this.restClient.get(`/${GORDO}/${YEARS}`, {
      params,
    })
      .then((response) => response.data);
  };

  PronostigolClient.prototype
    .getGordoOccurrencesByNumberStats = function getGordoOccurrencesByNumberStats(params) {
      return this.restClient.get(`/${GORDO}/${HISTORICAL}/occurrencesByNumber`, {
        params,
      })
        .then((response) => response.data);
    };

  PronostigolClient.prototype
    .getGordoOccurrencesByResultStats = function getGordoOccurrencesByResultStats(params) {
      return this.restClient.get(`/${GORDO}/${HISTORICAL}/occurrencesByResult`, {
        params,
      })
        .then((response) => response.data);
    };

  PronostigolClient.prototype
    .getGordoOccurrencesByResultWithReimbursementStats = function
    getGordoOccurrencesByResultWithReimbursementStats(params) {
      return this.restClient.get(`/${GORDO}/${HISTORICAL}/occurrencesByResultWithReimbursement`, {
        params,
      })
        .then((response) => response.data);
    };

  PronostigolClient.prototype
    .getGordoOccurrencesByReimbursementStats = function
    getGordoOccurrencesByReimbursementStats(params) {
      return this.restClient.get(`/${GORDO}/${HISTORICAL}/occurrencesByReimbursement`, {
        params,
      })
        .then((response) => response.data);
    };

  PronostigolClient.prototype
    .getGordoLastDateByNumberStats = function getGordoLastDateByNumberStats(params) {
      return this.restClient.get(`/${GORDO}/${HISTORICAL}/lastDateByNumber`, {
        params,
      })
        .then((response) => response.data);
    };

  PronostigolClient.prototype
    .getGordoLastDateByReimbursementStats = function
    getGordoLastDateByReimbursementStats(params) {
      return this.restClient.get(`/${GORDO}/${HISTORICAL}/lastDateByReimbursement`, {
        params,
      })
        .then((response) => response.data);
    };
}

module.exports = bonolotoMethods;
