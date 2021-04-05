const EUROMILLONES = 'euromillones';
const TICKETS = 'tickets';
const YEARS = 'years';
const HISTORICAL = 'historical';

function methods(client) {
  const PronostigolClient = client;

  PronostigolClient.prototype.getEuromillonesTickets = function getEuromillonesTickets(params) {
    return this.restClient.get(`/${EUROMILLONES}/${TICKETS}`, {
      params,
    })
      .then((response) => response.data);
  };

  PronostigolClient.prototype.getEuromillonesYears = function getEuromillonesYears(params) {
    return this.restClient.get(`/${EUROMILLONES}/${YEARS}`, {
      params,
    })
      .then((response) => response.data);
  };

  PronostigolClient.prototype
    .getEuromillonesOccurrencesByNumberStats = function
    getEuromillonesOccurrencesByNumberStats(params) {
      return this.restClient.get(`/${EUROMILLONES}/${HISTORICAL}/occurrencesByNumber`, {
        params,
      })
        .then((response) => response.data);
    };

  PronostigolClient.prototype
    .getEuromillonesOccurrencesByResultStats = function
    getEuromillonesOccurrencesByResultStats(params) {
      return this.restClient.get(`/${EUROMILLONES}/${HISTORICAL}/occurrencesByResult`, {
        params,
      })
        .then((response) => response.data);
    };

  PronostigolClient.prototype
    .getEuromillonesOccurrencesByResultWithStarsStats = function
    getEuromillonesOccurrencesByResultWithStarsStats(params) {
      return this.restClient.get(`/${EUROMILLONES}/${HISTORICAL}/occurrencesByResultWithStars`, {
        params,
      })
        .then((response) => response.data);
    };

  PronostigolClient.prototype
    .getEuromillonesOccurrencesByStarStats = function
    getEuromillonesOccurrencesByStarStats(params) {
      return this.restClient.get(`/${EUROMILLONES}/${HISTORICAL}/occurrencesByStar`, {
        params,
      })
        .then((response) => response.data);
    };

  PronostigolClient.prototype
    .getEuromillonesLastDateByNumberStats = function getEuromillonesLastDateByNumberStats(params) {
      return this.restClient.get(`/${EUROMILLONES}/${HISTORICAL}/lastDateByNumber`, {
        params,
      })
        .then((response) => response.data);
    };

  PronostigolClient.prototype
    .getEuromillonesLastDateByStarStats = function
    getEuromillonesLastDateByStarStats(params) {
      return this.restClient.get(`/${EUROMILLONES}/${HISTORICAL}/lastDateByStar`, {
        params,
      })
        .then((response) => response.data);
    };
}

module.exports = methods;
