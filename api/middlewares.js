const jwt = require('express-jwt');
/* eslint-disable camelcase */
const { HTTP_CODES } = require('./constants');

/**
 * Encapsulación del middleware de JWT para comprobar si el usuario que
 * accede al recurso se encuentra logado.
 * En caso contrario se devuelve el error de autenticación.
 */
function isLogged() {
  return jwt({
    secret: process.env.TOKEN_SECRET,
    algorithms: ['HS256'],
  });
}

/**
 * Middleware para comprobar si el usuario que accede al recurso tiene un rol autorizado.
 * Para ello el rol del usuario debe ser alguno de los roles indicados en el parámetro allowedRoles.
 * En caso contrario se devuelve el error de autorización.
 *
 * @param allowedRoles
 */
function isAuthorized(allowedRoles) {
  return function middleware(req, res, next) {
    const { user } = req.session;

    // Para el caso en que no esté logado: GUEST
    let actualRole = null;

    // Para cualquier otro caso: BASIC, PRIVILEGED Y ADMIN
    if (user !== undefined) {
      actualRole = req.session.user.role;
    }

    let authorized = false;

    for (let i = 0; i < allowedRoles.length; i += 1) {
      if (actualRole === allowedRoles[i]) {
        authorized = true;
        break;
      }
    }

    if (!authorized) {
      return res.status(HTTP_CODES.FORBIDDEN).send({
        message: 'No puede acceder a este recurso porque no está autorizado.',
      });
    }

    return next();
  };
}

module.exports = {
  isLogged,
  isAuthorized,
};
