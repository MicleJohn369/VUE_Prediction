const USERS = 'users';

function usersMethods(client) {
  const PronostigolClient = client;

  PronostigolClient.prototype.getUsers = function getUsers(params) {
    return this.restClient.get(`/${USERS}`, {
      params,
    })
      .then((response) => response.data);
  };
}

module.exports = usersMethods;
