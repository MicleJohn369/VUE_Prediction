const USERS = 'users';

function usersMethods(client) {
  const PronostigolClient = client;

  PronostigolClient.prototype.getUsers = function getUsers(params) {
    return this.restClient.get(`/${USERS}`, {
      params,
    })
      .then((response) => response.data);
  };

  PronostigolClient.prototype.getUser = function getUser(id) {
    return this.restClient.get(`/${USERS}/${id}`)
      .then((response) => response.data);
  };

  PronostigolClient.prototype.createUser = function createUser(user) {
    return this.restClient.post(`/${USERS}`, user)
      .then((response) => response.data);
  };

  PronostigolClient.prototype.editUser = function editUser(id, user) {
    return this.restClient.put(`/${USERS}/${id}`, {
      ...user,
    })
      .then((response) => response.data);
  };

  PronostigolClient.prototype.deleteUser = function deleteUser(id) {
    return this.restClient.delete(`/${USERS}/${id}`)
      .then((response) => response.data);
  };
}

module.exports = usersMethods;
