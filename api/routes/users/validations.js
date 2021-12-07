const { Joi } = require('express-validation');

module.exports = {
  getUsers: {
    body: Joi.object({
      user: Joi.string(),
      page: Joi.number().min(1),
      per_page: Joi.number().min(1),
      sort_type: Joi.string().valid('asc', 'desc'),
      sort_property: Joi.string().valid('user'),
    }),
  },
};
