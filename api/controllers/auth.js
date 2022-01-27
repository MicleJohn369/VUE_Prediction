/* eslint-disable camelcase */
/* eslint-disable max-len */
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const { HTTP_CODES } = require('../constants');

const Account = mongoose.model('Account');

/**
 * @api {get} /auth/login Recurso para autenticar un usuario
 * @apiName Login
 * @apiGroup Auth
 *
 * @apiDescription Recurso para la autenticación de un usuario en la web.
 *
 * @apiVersion 2.1.0
 *
 * @apiParam {String} user Usuario a autenticar en la web.
 * @apiParam {String} password Contraseña vinculada al usuario a autenticar en la web.
 *
 * @apiSampleRequest /api/auth/login
 */
exports.login = async (req, res) => {
  const { body } = req;

  try {
    const account = await Account.findOne({ user: body.user });
    if (!account) return res.status(400).json({ error: 'Credenciales no válidas' });

    const validPassword = await bcrypt.compare(body.password, account.password);
    if (!validPassword) return res.status(400).json({ error: 'Credenciales no válidas' });

    const token = jwt.sign({
      user: account.user,
      role: account.role,
    }, process.env.TOKEN_SECRET);

    return res
      .status(HTTP_CODES.OK)
      .header('auth-token', token)
      .json({ token });
  } catch (err) {
    return res.status(HTTP_CODES.INTERNAL_SERVER_ERROR).send(err.message);
  }
};

/**
 * @api {get} /auth/user Recurso para obtener la información del usuario autenticado
 * @apiName GetUser
 * @apiGroup Auth
 *
 * @apiDescription Recurso para obtener la información del usuario autenticado siguiendo el estándar de JWT.
 *
 * @apiVersion 2.1.0
 *
 * @apiSampleRequest /api/auth/login
 */
exports.getUser = async (req, res) => res.json({ user: req.user });

/**
 * @api {get} /auth/logout Recurso para cerrar la sesión del usuario autenticado en la conexión actual.
 * @apiName Logout
 * @apiGroup Auth
 *
 * @apiDescription Recurso para cerrar la sesión del usuario autenticado en la conexión actual.
 *
 * @apiVersion 2.1.0
 *
 * @apiSampleRequest /api/auth/logout
 */
exports.logout = async (req, res) => res.json({ status: 'OK' });
