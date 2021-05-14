/* eslint-disable camelcase */
/* eslint-disable max-len */
const mongoose = require('mongoose');

const { HTTP_CODES } = require('../constants');

const BonolotoTicket = mongoose.model('BonolotoTicket');
const BonolotoYear = mongoose.model('BonolotoYear');

function borrarPronosticos(aux) {
  const json = aux;

  if (json.apuestas != null) {
    delete json.apuestas;
  }

  return json;
}

function borrarPrecio(aux) {
  const json = aux;

  if (json.precio != null) {
    delete json.precio;
  }

  return json;
}

function borrarPremio(aux) {
  const json = aux;

  if (json.premio != null) {
    delete json.premio;
  }

  return json;
}

function filtrarInformacion(result) {
  let json = JSON.parse(JSON.stringify(result));
  json = borrarPronosticos(json);
  json = borrarPrecio(json);
  json = borrarPremio(json);
  return json;
}

/**
 * @api {get} /bonoloto/tickets Obtención de todos los tickets de Bonoloto
 * @apiName GetBonolotoTickets
 * @apiGroup BonolotoTickets
 *
 * @apiDescription Recurso para la consulta de tickets de Bonoloto registrados en el sistema.
 *
 * @apiVersion 1.0.0
 *
 * @apiParam {Number} [year] Año asociado a los sorteos consultados
 * @apiParam {Number} [raffle] Identificador único del sorteo dentro de un año
 * @apiParam {Number} [page] Número de página a consultar. Por defecto se establece a 1.
 * @apiParam {Number} [per_page] Número de registros por página deseados. Por defecto se establece a 10.
 * @apiParam {String} [sort_type] Sentido de la ordenación de registros. Por defecto se ordenan por fecha descendentemente.
 * @apiSampleRequest /api/bonoloto/tickets
 */
exports.findAllTickets = async (req, res) => {
  const { query } = req;

  const { year } = query;
  const { raffle } = query;
  const page = Number(query.page) || 1;
  const perPage = Number(query.per_page) || 10;
  const type = query.sort_type || 'desc';

  const filters = {};

  if (year) filters.anyo = Number(year);
  if (raffle) filters.sorteo = Number(raffle);

  const sort = {
    fecha: type,
  };
  const skip = (page - 1) * perPage;
  const limit = perPage;

  const options = {
    sort,
    skip,
    limit,
  };

  try {
    const total = await BonolotoTicket.countDocuments().exec();

    const tickets = await BonolotoTicket.find(filters, null, options).exec();

    // TODO: Filtrar respuesta en base a los permisos del usuario
    const filteredTickets = tickets.map((ticket) => filtrarInformacion(ticket));

    return res.status(HTTP_CODES.OK).json({
      page,
      perPage,
      total,
      data: filteredTickets,
    });
  } catch (err) {
    return res.status(HTTP_CODES.INTERNAL_SERVER_ERROR).send(err.message);
  }
};

exports.findTicketById = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.isValidObjectId(id)) {
    return res.status(HTTP_CODES.NOT_FOUND).send('not-found');
  }

  try {
    const ticket = await BonolotoTicket.findById(id).exec();

    if (!ticket) return res.status(HTTP_CODES.NOT_FOUND).send('not-found');
    // TODO: Filtrar respuesta en base a los permisos del usuario

    const filteredTicket = filtrarInformacion(ticket);
    return res.status(HTTP_CODES.OK).json(filteredTicket);
  } catch (err) {
    return res.status(HTTP_CODES.INTERNAL_SERVER_ERROR).send(err.message);
  }
};

/**
 * @api {get} /bonoloto/years Obtención de todos los años de Bonoloto
 * @apiName GetBonolotoYears
 * @apiGroup BonolotoYears
 *
 * @apiDescription Recurso para la consulta de años de la Bonoloto registrados en el sistema.
 *
 * @apiVersion 1.0.0
 *
 * @apiSampleRequest /api/bonoloto/years
 */
exports.findAllYears = async (req, res) => {
  try {
    const tickets = await BonolotoYear.find().exec();

    return res.status(HTTP_CODES.OK).json(tickets);
  } catch (err) {
    return res.status(HTTP_CODES.INTERNAL_SERVER_ERROR).send(err.message);
  }
};

/**
 * @api {get} /bonoloto/years/:id Obtención de un año de Bonoloto según su id
 * @apiName GetBonolotoYear
 * @apiGroup BonolotoYears
 *
 * @apiDescription Recurso para la consulta de un año de Bonoloto registrado en el sistema.
 *
 * @apiVersion 1.0.0
 *
 * @apiSampleRequest /api/bonoloto/years/:id
 *
 * @apiParam {String} id Identificador del año de Bonoloto
 */
exports.findYearById = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.isValidObjectId(id)) {
    return res.status(HTTP_CODES.NOT_FOUND).send('not-found');
  }

  try {
    const year = await BonolotoYear.findById(id).exec();

    if (!year) return res.status(HTTP_CODES.NOT_FOUND).send('not-found');

    return res.status(HTTP_CODES.OK).json(year);
  } catch (err) {
    return res.status(HTTP_CODES.INTERNAL_SERVER_ERROR).send(err.message);
  }
};

/**
 * @api {get} /bonoloto/historical/occurrencesByResult Consulta de apariciones por resultado sin reintegro en histórico de Bonoloto
 * @apiName GetBonolotoOccurrencesByResult
 * @apiGroup BonolotoHistorical
 *
 * @apiDescription Recurso para la consulta de apariciones por resultado sin reintegro en histórico de Bonoloto.
 *
 * @apiVersion 1.0.0
 *
 * @apiParam {Number} page Número de página a consultar. Por defecto se establece a 1.
 * @apiParam {Number} per_page Número de registros por página deseados. Por defecto se establece a 10.
 * @apiParam {String} [sort_property] Propiedad por la que ordenar los registros. Los posibles valores son "result"
 * y "occurrences". Por defecto se ordenan por "occurrences".
 * @apiParam {String} [sort_type] Sentido de la ordenación de registros. Los posibles valores son "asc" y "desc".
 * Por defecto se ordenan descendentemente.
 * @apiSampleRequest /api/bonoloto/historical/occurrencesByResult
 */
exports.findOccurrencesByResult = async (req, res) => {
  const { query } = req;

  const page = Number(query.page) || 1;
  const perPage = Number(query.per_page) || 10;
  let sort_property = query.sort_property || 'occurrences';
  let sort_type = query.sort_type || 'desc';

  const skip = (page - 1) * perPage;
  const limit = perPage;

  try {
    const pipeline = [];
    pipeline.push({
      $group: {
        _id: '$resultado.bolas',
        apariciones: {
          $sum: 1,
        },
      },
    });

    pipeline.push({
      $project: {
        _id: 0,
        resultado: '$_id',
        apariciones: 1,
      },
    });

    const results = await BonolotoTicket.aggregate(pipeline).exec();

    const result = {
      page,
      perPage,
      total: results.length,
    };

    sort_property = sort_property === 'result' ? 'resultadoAsString' : 'apariciones';
    sort_type = sort_type === 'asc' ? 1 : -1;

    const sortConfig = {};
    sortConfig[sort_property] = sort_type;

    // Añadimos ordenación alternativa
    if (sort_property === 'apariciones') {
      sortConfig.resultadoAsString = sort_type;
    } else {
      sortConfig.apariciones = sort_type;
    }

    pipeline.push({
      $addFields: {
        resultadoAsString: {
          $reduce: {
            input: '$resultado',
            initialValue: '',
            in: {
              $concat: [
                '$$value',
                {
                  $substr: [
                    {
                      $cond: [
                        {
                          $gte: [
                            '$$this.numero',
                            10,
                          ],
                        },
                        '$$this.numero',
                        {
                          $concat: [
                            '0',
                            {
                              $substr: [
                                '$$this.numero',
                                0,
                                -1,
                              ],
                            },
                          ],
                        },
                      ],
                    },
                    0,
                    -1,
                  ],
                },
              ],
            },
          },
        },
      },
    });

    pipeline.push({
      $sort: sortConfig,
    });

    pipeline.push({
      $skip: skip,
    });

    pipeline.push({
      $limit: limit,
    });

    const data = await BonolotoTicket.aggregate(pipeline).exec();
    result.data = data;

    return res.status(HTTP_CODES.OK).json(result);
  } catch (err) {
    return res.status(HTTP_CODES.INTERNAL_SERVER_ERROR).send(err.message);
  }
};

/**
 * @api {get} /bonoloto/historical/occurrencesByResultWithReimbursement Consulta de apariciones por resultado con reintegro en histórico de Bonoloto
 * @apiName GetBonolotoOccurrencesByResultWithReimbursement
 * @apiGroup BonolotoHistorical
 *
 * @apiDescription Recurso para la consulta de apariciones por resultado con reintegro en histórico de Bonoloto.
 *
 * @apiVersion 1.0.0
 *
 * @apiParam {Number} page Número de página a consultar. Por defecto se establece a 1.
 * @apiParam {Number} per_page Número de registros por página deseados. Por defecto se establece a 10.
 * @apiParam {String} [sort_property] Propiedad por la que ordenar los registros. Los posibles valores son "result"
 * y "occurrences". Por defecto se ordenan por "occurrences".
 * @apiParam {String} [sort_type] Sentido de la ordenación de registros. Los posibles valores son "asc" y "desc".
 * Por defecto se ordenan descendentemente.
 * @apiSampleRequest /api/bonoloto/historical/occurrencesByResultWithReimbursement
 */
exports.findOccurrencesByResultWithReimbursement = async (req, res) => {
  const { query } = req;

  const page = Number(query.page) || 1;
  const perPage = Number(query.per_page) || 10;
  let sort_property = query.sort_property || 'occurrences';
  let sort_type = query.sort_type || 'desc';

  const skip = (page - 1) * perPage;
  const limit = perPage;

  try {
    const pipeline = [];
    pipeline.push({
      $group: {
        _id: {
          resultado: '$resultado.bolas',
          reintegro: '$resultado.reintegro',
        },
        resultado: {
          $first: '$resultado.bolas',
        },
        reintegro: {
          $first: '$resultado.reintegro',
        },
        apariciones: {
          $sum: 1,
        },
      },
    });

    pipeline.push({
      $project: {
        _id: 0,
        resultado: 1,
        reintegro: 1,
        apariciones: 1,
      },
    });

    const results = await BonolotoTicket.aggregate(pipeline).exec();

    const result = {
      page,
      perPage,
      total: results.length,
    };

    sort_property = sort_property === 'result' ? 'resultadoAsString' : 'apariciones';
    sort_type = sort_type === 'asc' ? 1 : -1;

    const sortConfig = {};
    sortConfig[sort_property] = sort_type;

    if (sort_property === 'apariciones') {
      sortConfig.resultadoAsString = sort_type;
      sortConfig.reintegro = sort_type;
    } else {
      sortConfig.apariciones = sort_type;
      sortConfig.reintegro = sort_type;
    }

    pipeline.push({
      $addFields: {
        resultadoAsString: {
          $concat: [
            {
              $reduce: {
                input: '$resultado',
                initialValue: '',
                in: {
                  $concat: [
                    '$$value',
                    {
                      $substr: [
                        {
                          $cond: [
                            {
                              $gte: [
                                '$$this.numero',
                                10,
                              ],
                            },
                            '$$this.numero',
                            {
                              $concat: [
                                '0',
                                {
                                  $substr: [
                                    '$$this.numero',
                                    0,
                                    -1,
                                  ],
                                },
                              ],
                            },
                          ],
                        },
                        0,
                        -1,
                      ],
                    },
                  ],
                },
              },
            },
            'R',
            {
              $substr: [
                {
                  $cond: [
                    {
                      $gte: ['$reintegro', 10],
                    },
                    '$reintegro',
                    {
                      $concat: [
                        {
                          $cond: [
                            {
                              $eq: [
                                '$reintegro',
                                null,
                              ],
                            },
                            '--',
                            {
                              $concat: [
                                '0',
                                {
                                  $substr: [
                                    '$reintegro',
                                    0,
                                    -1,
                                  ],
                                },
                              ],
                            },
                          ],
                        },
                      ],
                    },
                  ],
                },
                0,
                -1,
              ],
            },
          ],
        },
      },
    });

    pipeline.push({
      $sort: sortConfig,
    });

    pipeline.push({
      $skip: skip,
    });

    pipeline.push({
      $limit: limit,
    });

    const data = await BonolotoTicket.aggregate(pipeline).exec();
    result.data = data;

    return res.status(HTTP_CODES.OK).json(result);
  } catch (err) {
    return res.status(HTTP_CODES.INTERNAL_SERVER_ERROR).send(err.message);
  }
};

/**
 * @api {get} /bonoloto/historical/occurrencesByNumber Consulta de apariciones por número en histórico de Bonoloto
 * @apiName GetBonolotoOccurrencesByNumber
 * @apiGroup BonolotoHistorical
 *
 * @apiDescription Recurso para la consulta de apariciones por número en histórico de Bonoloto.
 *
 * @apiVersion 1.0.0
 *
 * @apiParam {Number} page Número de página a consultar. Por defecto se establece a 1.
 * @apiParam {Number} per_page Número de registros por página deseados. Por defecto se establece a 10.
 * @apiParam {String} [sort_property] Propiedad por la que ordenar los registros. Los posibles valores son "number"
 * y "occurrences". Por defecto se ordenan por "occurrences".
 * @apiParam {String} [sort_type] Sentido de la ordenación de registros. Los posibles valores son "asc" y "desc".
 * Por defecto se ordenan descendentemente.
 *
 * @apiSampleRequest /api/bonoloto/historical/occurrencesByNumber
 */
exports.findOccurrencesByNumber = async (req, res) => {
  const { query } = req;

  const page = Number(query.page) || 1;
  const perPage = Number(query.per_page) || 10;
  let sort_property = query.sort_property || 'occurrences';
  let sort_type = query.sort_type || 'desc';

  const skip = (page - 1) * perPage;
  const limit = perPage;

  try {
    const pipeline = [];
    pipeline.push({
      $unwind: '$resultado.bolas',
    });

    pipeline.push({
      $group: {
        _id: '$resultado.bolas.numero',
        apariciones: {
          $sum: 1,
        },
      },
    });

    pipeline.push({
      $project: {
        _id: 0,
        numero: '$_id',
        apariciones: 1,
      },
    });

    const results = await BonolotoTicket.aggregate(pipeline).exec();

    const result = {
      page,
      perPage,
      total: results.length,
    };

    sort_property = sort_property === 'number' ? 'numero' : 'apariciones';
    sort_type = sort_type === 'asc' ? 1 : -1;

    const sortConfig = {};
    sortConfig[sort_property] = sort_type;

    if (sort_property === 'apariciones') {
      sortConfig.numero = sort_type;
    }

    pipeline.push({
      $sort: sortConfig,
    });

    pipeline.push({
      $skip: skip,
    });

    pipeline.push({
      $limit: limit,
    });

    const data = await BonolotoTicket.aggregate(pipeline).exec();
    result.data = data;

    return res.status(HTTP_CODES.OK).json(result);
  } catch (err) {
    return res.status(HTTP_CODES.INTERNAL_SERVER_ERROR).send(err.message);
  }
};

/**
 * @api {get} /bonoloto/historical/occurrencesByReimbursement Consulta de apariciones por reintegro en histórico de Bonoloto
 * @apiName GetBonolotoOccurrencesByReimbursement
 * @apiGroup BonolotoHistorical
 *
 * @apiDescription Recurso para la consulta de apariciones por reintegro en histórico de Bonoloto.
 *
 * @apiVersion 1.0.0
 *
 * @apiParam {Number} page Número de página a consultar. Por defecto se establece a 1.
 * @apiParam {Number} per_page Número de registros por página deseados. Por defecto se establece a 10.
 * @apiParam {String} [sort_property] Propiedad por la que ordenar los registros. Los posibles valores son "reimbursement"
 * y "occurrences". Por defecto se ordenan por "occurrences".
 * @apiParam {String} [sort_type] Sentido de la ordenación de registros. Los posibles valores son "asc" y "desc".
 * Por defecto se ordenan descendentemente.
 * @apiSampleRequest /api/bonoloto/historical/occurrencesByReimbursement
 */
exports.findOccurrencesByReimbursement = async (req, res) => {
  const { query } = req;

  const page = Number(query.page) || 1;
  const perPage = Number(query.per_page) || 10;
  let sort_property = query.sort_property || 'occurrences';
  let sort_type = query.sort_type || 'desc';

  const skip = (page - 1) * perPage;
  const limit = perPage;

  try {
    const pipeline = [];
    pipeline.push({
      $group: {
        _id: '$resultado.reintegro',
        apariciones: {
          $sum: 1,
        },
      },
    });

    pipeline.push({
      $project: {
        _id: 0,
        reintegro: '$_id',
        apariciones: 1,
      },
    });

    const results = await BonolotoTicket.aggregate(pipeline).exec();

    const result = {
      page,
      perPage,
      total: results.length,
    };

    sort_property = sort_property === 'reimbursement' ? 'reintegro' : 'apariciones';
    sort_type = sort_type === 'asc' ? 1 : -1;

    const sortConfig = {};
    sortConfig[sort_property] = sort_type;

    if (sort_property === 'apariciones') {
      sortConfig.reintegro = sort_type;
    }

    pipeline.push({
      $sort: sortConfig,
    });

    pipeline.push({
      $skip: skip,
    });

    pipeline.push({
      $limit: limit,
    });

    const data = await BonolotoTicket.aggregate(pipeline).exec();
    result.data = data;

    return res.status(HTTP_CODES.OK).json(result);
  } catch (err) {
    return res.status(HTTP_CODES.INTERNAL_SERVER_ERROR).send(err.message);
  }
};

/**
 * @api {get} /bonoloto/historical/lastDateByNumber Consulta de fecha de última aparición por número en histórico de Bonoloto
 * @apiName GetBonolotoLastDateByNumber
 * @apiGroup BonolotoHistorical
 *
 * @apiDescription Recurso para la consulta de fecha de última aparición por número en histórico de Bonoloto.
 *
 * @apiVersion 1.0.0
 *
 * @apiParam {Number} page Número de página a consultar. Por defecto se establece a 1.
 * @apiParam {Number} per_page Número de registros por página deseados. Por defecto se establece a 10.
 * @apiParam {String} [sort_property] Propiedad por la que ordenar los registros. Los posibles valores son "number"
 * y "date". Por defecto se ordenan por "date".
 * @apiParam {String} [sort_type] Sentido de la ordenación de registros. Los posibles valores son "asc" y "desc".
 * Por defecto se ordenan descendentemente.
 *
 * @apiSampleRequest /api/bonoloto/historical/lastDateByNumber
 */
exports.findLastDateByNumber = async (req, res) => {
  const { query } = req;

  const page = Number(query.page) || 1;
  const perPage = Number(query.per_page) || 10;
  let sort_property = query.sort_property || 'date';
  let sort_type = query.sort_type || 'desc';

  const skip = (page - 1) * perPage;
  const limit = perPage;

  try {
    const pipeline = [];
    pipeline.push({
      $unwind: '$resultado.bolas',
    });

    pipeline.push({
      $group: {
        _id: '$resultado.bolas.numero',
        ultimaAparicion: {
          $max: '$fecha',
        },
      },
    });

    pipeline.push({
      $project: {
        _id: 0,
        numero: '$_id',
        fecha: '$ultimaAparicion',
      },
    });

    const results = await BonolotoTicket.aggregate(pipeline).exec();

    const result = {
      page,
      perPage,
      total: results.length,
    };

    sort_property = sort_property === 'date' ? 'fecha' : 'numero';
    sort_type = sort_type === 'asc' ? 1 : -1;

    const sortConfig = {};
    sortConfig[sort_property] = sort_type;

    if (sort_property === 'numero') {
      sortConfig.fecha = sort_type;
    } else if (sort_property === 'fecha') {
      sortConfig.numero = 1;
    }

    pipeline.push({
      $sort: sortConfig,
    });

    pipeline.push({
      $skip: skip,
    });

    pipeline.push({
      $limit: limit,
    });

    const data = await BonolotoTicket.aggregate(pipeline).exec();
    result.data = data;

    return res.status(HTTP_CODES.OK).json(result);
  } catch (err) {
    return res.status(HTTP_CODES.INTERNAL_SERVER_ERROR).send(err.message);
  }
};

/**
 * @api {get} /bonoloto/historical/lastDateByReimbursement Consulta de fecha de última aparición por reintegro en histórico de Bonoloto
 * @apiName GetBonolotoLastDateByReimbursement
 * @apiGroup BonolotoHistorical
 *
 * @apiDescription Recurso para la consulta de fecha de última aparición por reintegro en histórico de Bonoloto.
 *
 * @apiVersion 1.2.0
 *
 * @apiParam {Number} page Número de página a consultar. Por defecto se establece a 1.
 * @apiParam {Number} per_page Número de registros por página deseados. Por defecto se establece a 10.
 * @apiParam {String} [sort_property] Propiedad por la que ordenar los registros. Los posibles valores son "number"
 * y "date". Por defecto se ordenan por "date".
 * @apiParam {String} [sort_type] Sentido de la ordenación de registros. Los posibles valores son "asc" y "desc".
 * Por defecto se ordenan descendentemente.
 *
 * @apiSampleRequest /api/bonoloto/historical/lastDateByReimbursement
 */
exports.findLastDateByReimbursement = async (req, res) => {
  const { query } = req;

  const page = Number(query.page) || 1;
  const perPage = Number(query.per_page) || 10;
  let sort_property = query.sort_property || 'date';
  let sort_type = query.sort_type || 'desc';

  const skip = (page - 1) * perPage;
  const limit = perPage;

  try {
    const pipeline = [];
    pipeline.push({
      $group: {
        _id: '$resultado.reintegro',
        ultimaAparicion: {
          $max: '$fecha',
        },
      },
    });

    pipeline.push({
      $project: {
        _id: 0,
        reintegro: '$_id',
        fecha: '$ultimaAparicion',
      },
    });

    const results = await BonolotoTicket.aggregate(pipeline).exec();

    const result = {
      page,
      perPage,
      total: results.length,
    };

    sort_property = sort_property === 'date' ? 'fecha' : 'reintegro';
    sort_type = sort_type === 'asc' ? 1 : -1;

    const sortConfig = {};
    sortConfig[sort_property] = sort_type;

    if (sort_property === 'reintegro') {
      sortConfig.fecha = sort_type;
    } else if (sort_property === 'fecha') {
      sortConfig.reintegro = 1;
    }

    pipeline.push({
      $sort: sortConfig,
    });

    pipeline.push({
      $skip: skip,
    });

    pipeline.push({
      $limit: limit,
    });

    const data = await BonolotoTicket.aggregate(pipeline).exec();
    result.data = data;

    return res.status(HTTP_CODES.OK).json(result);
  } catch (err) {
    return res.status(HTTP_CODES.INTERNAL_SERVER_ERROR).send(err.message);
  }
};
