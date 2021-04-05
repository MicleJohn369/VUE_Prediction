const PRIMITIVA = 'primitiva';
const TICKETS = 'tickets';
const YEARS = 'years';
const HISTORICAL = 'historical';

function methods(client) {
  const PronostigolClient = client;

  PronostigolClient.prototype.getPrimitivaTickets = function getPrimitivaTickets(params) {
    return this.restClient.get(`/${PRIMITIVA}/${TICKETS}`, {
      params,
    })
      .then((response) => response.data);
  };

  PronostigolClient.prototype.getPrimitivaYears = function getPrimitivaYears(params) {
    return this.restClient.get(`/${PRIMITIVA}/${YEARS}`, {
      params,
    })
      .then((response) => response.data);
  };

  PronostigolClient.prototype
    .getPrimitivaOccurrencesByNumberStats = function getPrimitivaOccurrencesByNumberStats(params) {
      return this.restClient.get(`/${PRIMITIVA}/${HISTORICAL}/occurrencesByNumber`, {
        params,
      })
        .then((response) => response.data);
    };

  PronostigolClient.prototype
    .getPrimitivaOccurrencesByResultStats = function getPrimitivaOccurrencesByResultStats(params) {
      return this.restClient.get(`/${PRIMITIVA}/${HISTORICAL}/occurrencesByResult`, {
        params,
      })
        .then((response) => response.data);
    };

  PronostigolClient.prototype
    .getPrimitivaOccurrencesByResultWithReimbursementStats = function
    getPrimitivaOccurrencesByResultWithReimbursementStats(params) {
      return this.restClient.get(`/${PRIMITIVA}/${HISTORICAL}/occurrencesByResultWithReimbursement`, {
        params,
      })
        .then((response) => response.data);
    };

  PronostigolClient.prototype
    .getPrimitivaOccurrencesByReimbursementStats = function
    getPrimitivaOccurrencesByReimbursementStats(params) {
      return this.restClient.get(`/${PRIMITIVA}/${HISTORICAL}/occurrencesByReimbursement`, {
        params,
      })
        .then((response) => response.data);
    };

  PronostigolClient.prototype
    .getPrimitivaLastDateByNumberStats = function getPrimitivaLastDateByNumberStats(params) {
      return this.restClient.get(`/${PRIMITIVA}/${HISTORICAL}/lastDateByNumber`, {
        params,
      })
        .then((response) => response.data);
    };

  PronostigolClient.prototype
    .getPrimitivaLastDateByReimbursementStats = function
    getPrimitivaLastDateByReimbursementStats(params) {
      return this.restClient.get(`/${PRIMITIVA}/${HISTORICAL}/lastDateByReimbursement`, {
        params,
      })
        .then((response) => response.data);
    };
}

module.exports = methods;
