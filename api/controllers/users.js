/* eslint-disable camelcase */
/* eslint-disable max-len */
const mongoose = require('mongoose');

const { HTTP_CODES } = require('../constants');

const Account = mongoose.model('Account');

/**
 * @api {get} /users Obtención de todos los usuarios registrados en la web
 * @apiName GetUsers
 * @apiGroup Users
 *
 * @apiDescription Recurso para la consulta de usuarios registrados en el sistema.
 *
 * @apiVersion 2.1.0
 *
 * @apiParam {String} [user] Nombre de usuario
 * @apiParam {String} [role] Rol del usuario
 * @apiParam {Number} [page] Número de página a consultar. Por defecto se establece a 1.
 * @apiParam {Number} [per_page] Número de registros por página deseados. Por defecto se establece a 10.
 * @apiParam {String} [sort_type] Sentido de la ordenación de registros. Por defecto se ordenan por fecha descendentemente.
 * @apiParam {String} [sort_property] Propiedad por la que ordenar los registros. Los posibles valores son "user". Por defecto se ordenan por "user".
 * @apiSampleRequest /api/users
 */
exports.findAllUsers = async (req, res) => {
  const { query } = req;

  const { user } = query;
  const { role } = query;
  const page = Number(query.page) || 1;
  const perPage = Number(query.per_page) || 10;
  let sort_property = query.sort_property || 'date';
  const sort_type = query.sort_type || 'desc';

  const filters = {};

  if (user) {
    filters.user = {
      $regex: user,
    };
  }

  if (role) filters.role = role;

  sort_property = 'user';

  const sort = {
    [sort_property]: sort_type,
  };
  const skip = (page - 1) * perPage;
  const limit = perPage;

  const options = {
    sort,
    skip,
    limit,
  };

  try {
    const total = await Account.countDocuments().exec();

    const users = await Account.find(filters, null, options).exec();

    return res.status(HTTP_CODES.OK).json({
      page,
      perPage,
      total,
      data: users,
    });
  } catch (err) {
    return res.status(HTTP_CODES.INTERNAL_SERVER_ERROR).send(err.message);
  }
};

exports.createUser = async (req, res) => {
  const { body } = req;

  try {
    const account = new Account({
      ...body,
      estaActivo: true,
      estaBaneado: false,
      date: new Date(),
    });
    await account.save();
    return res.status(HTTP_CODES.CREATED).json();
  } catch (err) {
    return res.status(HTTP_CODES.INTERNAL_SERVER_ERROR).send(err.message);
  }
};
