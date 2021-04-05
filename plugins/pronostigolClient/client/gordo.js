const GORDO = 'gordo';
const TICKETS = 'tickets';
const YEARS = 'years';
const HISTORICAL = 'historical';

function methods(client) {
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
    .getGordoOccurrencesByResultWithSpecialNumberStats = function
    getGordoOccurrencesByResultWithSpecialNumberStats(params) {
      return this.restClient.get(`/${GORDO}/${HISTORICAL}/occurrencesByResultWithSpecialNumber`, {
        params,
      })
        .then((response) => response.data);
    };

  PronostigolClient.prototype
    .getGordoOccurrencesBySpecialNumberStats = function
    getGordoOccurrencesBySpecialNumberStats(params) {
      return this.restClient.get(`/${GORDO}/${HISTORICAL}/occurrencesBySpecialNumber`, {
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
    .getGordoLastDateBySpecialNumberStats = function
    getGordoLastDateBySpecialNumberStats(params) {
      return this.restClient.get(`/${GORDO}/${HISTORICAL}/lastDateBySpecialNumber`, {
        params,
      })
        .then((response) => response.data);
    };
}

module.exports = methods;
