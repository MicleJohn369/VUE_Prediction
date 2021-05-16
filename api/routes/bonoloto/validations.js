const { Joi } = require('express-validation');

module.exports = {
  getTickets: {
    query: Joi.object({
      year: Joi.number(),
      raffle: Joi.number().min(1),
      page: Joi.number().min(1),
      per_page: Joi.number().min(1),
      sort_type: Joi.string().valid('asc', 'desc'),
      sort_property: Joi.string().valid('date', 'occurrences'),
    }),
  },
  getOccurrencesByNumber: {
    query: Joi.object({
      page: Joi.number()
        .min(1)
        .required(),
      per_page: Joi.number()
        .min(1)
        .required(),
      sort_type: Joi.string().valid('asc', 'desc'),
      sort_property: Joi.string().valid('number', 'occurrences'),
    }),
  },
  getOccurrencesByReimbursement: {
    query: Joi.object({
      page: Joi.number()
        .min(1)
        .required(),
      per_page: Joi.number()
        .min(1)
        .required(),
      sort_type: Joi.string().valid('asc', 'desc'),
      sort_property: Joi.string().valid('reimbursement', 'occurrences'),
    }),
  },
  getOccurrencesByResultWithReimbursement: {
    query: Joi.object({
      page: Joi.number()
        .min(1)
        .required(),
      per_page: Joi.number()
        .min(1)
        .required(),
      sort_type: Joi.string().valid('asc', 'desc'),
      sort_property: Joi.string().valid('result', 'occurrences'),
    }),
  },
  getOccurrencesByResult: {
    query: Joi.object({
      page: Joi.number()
        .min(1)
        .required(),
      per_page: Joi.number()
        .min(1)
        .required(),
      sort_type: Joi.string().valid('asc', 'desc'),
      sort_property: Joi.string().valid('result', 'occurrences'),
    }),
  },
  getLastDateByNumber: {
    query: Joi.object({
      page: Joi.number()
        .min(1)
        .required(),
      per_page: Joi.number()
        .min(1)
        .required(),
      sort_type: Joi.string().valid('asc', 'desc'),
      sort_property: Joi.string().valid('number', 'date'),
    }),
  },
  getLastDateByReimbursement: {
    query: Joi.object({
      page: Joi.number()
        .min(1)
        .required(),
      per_page: Joi.number()
        .min(1)
        .required(),
      sort_type: Joi.string().valid('asc', 'desc'),
      sort_property: Joi.string().valid('reimbursement', 'date'),
    }),
  },
};
