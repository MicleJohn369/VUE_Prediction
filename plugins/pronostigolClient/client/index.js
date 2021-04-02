function PronostigolClient({
  restClient,
}) {
  this.restClient = restClient;
}

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

require('./quiniela')(PronostigolClient);

/**
 * Bonoloto methods
 */
require('./bonoloto')(PronostigolClient);

/**
 * Primitiva methods
 */
require('./primitiva')(PronostigolClient);

/**
 * Gordo methods
 */
require('./gordo')(PronostigolClient);

module.exports = (deps) => PronostigolClient.bind(null, deps);
