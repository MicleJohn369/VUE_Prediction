const { Joi } = require('express-validation');

module.exports = {
  getUsers: {
    query: Joi.object({
      user: Joi.string(),
      page: Joi.number().min(1),
      per_page: Joi.number().min(1),
      sort_type: Joi.string().valid('asc', 'desc'),
      sort_property: Joi.string().valid('user'),
    }),
  },
  getUser: {
    params: Joi.object({
      id: Joi.string().hex().length(24),
    }),
  },
  createUser: {
    body: Joi.object({
      user: Joi.string().required(),
      role: Joi.string().allow('admin', 'privileged').required(),
      password: Joi.string().required(),
    }),
  },
  editUser: {
    params: Joi.object({
      id: Joi.string().hex().length(24),
    }),
    body: Joi.object({
      user: Joi.string().required(),
      role: Joi.string().allow('admin', 'privileged').required(),
      password: Joi.string().required(),
    }),
  },
};
