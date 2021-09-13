/* eslint-disable camelcase */
/* eslint-disable max-len */
const mongoose = require('mongoose');

const { HTTP_CODES } = require('../constants');

const GordoTicket = mongoose.model('GordoTicket');
const GordoYear = mongoose.model('GordoYear');

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
 * @api {get} /gordo/tickets Obtención de todos los tickets de El Gordo de la Primitiva
 * @apiName GetGordoTickets
 * @apiGroup GordoTickets
 *
 * @apiDescription Recurso para la consulta de tickets de El Gordo de la Primitiva registrados en el sistema.
 *
 * @apiVersion 1.0.0
 *
 * @apiParam {Number} [year] Año asociado a los sorteos consultados
 * @apiParam {Number} [raffle] Identificador único del sorteo dentro de un año
 * @apiParam {Number} [page] Número de página a consultar. Por defecto se establece a 1.
 * @apiParam {Number} [per_page] Número de registros por página deseados. Por defecto se establece a 10.
 * @apiParam {String} [sort_type] Sentido de la ordenación de registros. Por defecto se ordenan por fecha descendentemente.
 * @apiParam {String} [sort_property] Propiedad por la que ordenar los registros. Los posibles valores son "date". Por defecto se ordenan por "date".
 * @apiSampleRequest /api/gordo/tickets
 */
exports.findAllTickets = async (req, res) => {
  const { query } = req;

  const { year } = query;
  const { raffle } = query;
  const page = Number(query.page) || 1;
  const perPage = Number(query.per_page) || 10;
  let sort_property = query.sort_property || 'date';
  const sort_type = query.sort_type || 'desc';

  const filters = {};

  if (year) filters.anyo = Number(year);
  if (raffle) filters.sorteo = Number(raffle);

  sort_property = 'fecha';

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
    const total = await GordoTicket.countDocuments().exec();

    const tickets = await GordoTicket.find(filters, null, options).exec();

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
    const ticket = await GordoTicket.findById(id).exec();

    if (!ticket) return res.status(HTTP_CODES.NOT_FOUND).send('not-found');
    // TODO: Filtrar respuesta en base a los permisos del usuario

    const filteredTicket = filtrarInformacion(ticket);
    return res.status(HTTP_CODES.OK).json(filteredTicket);
  } catch (err) {
    return res.status(HTTP_CODES.INTERNAL_SERVER_ERROR).send(err.message);
  }
};

/**
 * @api {get} /gordo/years Obtención de todos los años de El Gordo de la Primitiva
 * @apiName GetGordoYears
 * @apiGroup GordoYears
 *
 * @apiDescription Recurso para la consulta de años de la Gordo registrados en el sistema.
 *
 * @apiVersion 1.0.0
 *
 * @apiSampleRequest /api/gordo/years
 */
exports.findAllYears = async (req, res) => {
  try {
    const tickets = await GordoYear.find().exec();

    return res.status(HTTP_CODES.OK).json(tickets);
  } catch (err) {
    return res.status(HTTP_CODES.INTERNAL_SERVER_ERROR).send(err.message);
  }
};

/**
 * @api {get} /gordo/years/:id Obtención de un año de El Gordo de la Primitiva según su id
 * @apiName GetGordoYear
 * @apiGroup GordoYears
 *
 * @apiDescription Recurso para la consulta de un año de El Gordo de la Primitiva registrado en el sistema.
 *
 * @apiVersion 1.0.0
 *
 * @apiSampleRequest /api/gordo/years/:id
 *
 * @apiParam {String} id Identificador del año de El Gordo de la Primitiva
 */
exports.findYearById = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.isValidObjectId(id)) {
    return res.status(HTTP_CODES.NOT_FOUND).send('not-found');
  }

  try {
    const year = await GordoYear.findById(id).exec();

    if (!year) return res.status(HTTP_CODES.NOT_FOUND).send('not-found');

    return res.status(HTTP_CODES.OK).json(year);
  } catch (err) {
    return res.status(HTTP_CODES.INTERNAL_SERVER_ERROR).send(err.message);
  }
};

/**
 * @api {get} /gordo/historical/occurrencesByResult Consulta de apariciones por resultado sin número clave en histórico de El Gordo
 * @apiName GetGordoOccurrencesByResult
 * @apiGroup GordoHistorical
 *
 * @apiDescription Recurso para la consulta de apariciones por resultado sin número clave en histórico de El Gordo.
 *
 * @apiVersion 1.0.0
 *
 * @apiParam {Number} page Número de página a consultar. Por defecto se establece a 1.
 * @apiParam {Number} per_page Número de registros por página deseados. Por defecto se establece a 10.
 * @apiParam {String} [sort_property] Propiedad por la que ordenar los registros. Los posibles valores son "result"
 * y "occurrences". Por defecto se ordenan por "occurrences".
 * @apiParam {String} [sort_type] Sentido de la ordenación de registros. Los posibles valores son "asc" y "desc".
 * Por defecto se ordenan descendentemente.
 * @apiSampleRequest /api/gordo/historical/occurrencesByResult
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

    const results = await GordoTicket.aggregate(pipeline).exec();

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

    const data = await GordoTicket.aggregate(pipeline).exec();
    result.data = data;

    return res.status(HTTP_CODES.OK).json(result);
  } catch (err) {
    return res.status(HTTP_CODES.INTERNAL_SERVER_ERROR).send(err.message);
  }
};

/**
 * @api {get} /gordo/historical/occurrencesByResultWithSpecialNumber Consulta de apariciones por resultado con número clave en histórico de El Gordo
 * @apiName GetGordoOccurrencesByResultWithSpecialNumber
 * @apiGroup GordoHistorical
 *
 * @apiDescription Recurso para la consulta de apariciones por resultado con número clave en histórico de El Gordo.
 *
 * @apiVersion 1.0.0
 *
 * @apiParam {Number} page Número de página a consultar. Por defecto se establece a 1.
 * @apiParam {Number} per_page Número de registros por página deseados. Por defecto se establece a 10.
 * @apiParam {String} [sort_property] Propiedad por la que ordenar los registros. Los posibles valores son "result"
 * y "occurrences". Por defecto se ordenan por "occurrences".
 * @apiParam {String} [sort_type] Sentido de la ordenación de registros. Los posibles valores son "asc" y "desc".
 * Por defecto se ordenan descendentemente.
 * @apiSampleRequest /api/gordo/historical/occurrencesByResultWithSpecialNumber
 */
exports.findOccurrencesByResultWithSpecialNumber = async (req, res) => {
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
          numeroClave: '$resultado.numeroClave',
        },
        resultado: {
          $first: '$resultado.bolas',
        },
        numeroClave: {
          $first: '$resultado.numeroClave',
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
        numeroClave: 1,
        apariciones: 1,
      },
    });

    const results = await GordoTicket.aggregate(pipeline).exec();

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
      sortConfig.numeroClave = sort_type;
    } else {
      sortConfig.apariciones = sort_type;
      sortConfig.numeroClave = sort_type;
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
                      $gte: ['$numeroClave', 10],
                    },
                    '$numeroClave',
                    {
                      $concat: [
                        {
                          $cond: [
                            {
                              $eq: [
                                '$numeroClave',
                                null,
                              ],
                            },
                            '--',
                            {
                              $concat: [
                                '0',
                                {
                                  $substr: [
                                    '$numeroClave',
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

    const data = await GordoTicket.aggregate(pipeline).exec();
    result.data = data;

    return res.status(HTTP_CODES.OK).json(result);
  } catch (err) {
    return res.status(HTTP_CODES.INTERNAL_SERVER_ERROR).send(err.message);
  }
};

/**
 * @api {get} /gordo/historical/occurrencesByNumber Consulta de apariciones por número en histórico de El Gordo de la Primitiva
 * @apiName GetGordoOccurrencesByNumber
 * @apiGroup GordoHistorical
 *
 * @apiDescription Recurso para la consulta de apariciones por número en histórico de El Gordo de la Primitiva.
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
 * @apiSampleRequest /api/gordo/historical/occurrencesByNumber
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

    const results = await GordoTicket.aggregate(pipeline).exec();

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

    const data = await GordoTicket.aggregate(pipeline).exec();
    result.data = data;

    return res.status(HTTP_CODES.OK).json(result);
  } catch (err) {
    return res.status(HTTP_CODES.INTERNAL_SERVER_ERROR).send(err.message);
  }
};

/**
 * @api {get} /gordo/historical/occurrencesBySpecialNumber Consulta de apariciones por número clave en histórico de El Gordo
 * @apiName GetGordoOccurrencesBySpecialNumber
 * @apiGroup GordoHistorical
 *
 * @apiDescription Recurso para la consulta de apariciones por número clave en histórico de El Gordo.
 *
 * @apiVersion 1.0.0
 *
 * @apiParam {Number} page Número de página a consultar. Por defecto se establece a 1.
 * @apiParam {Number} per_page Número de registros por página deseados. Por defecto se establece a 10.
 * @apiParam {String} [sort_property] Propiedad por la que ordenar los registros. Los posibles valores son "specialNumber"
 * y "occurrences". Por defecto se ordenan por "occurrences".
 * @apiParam {String} [sort_type] Sentido de la ordenación de registros. Los posibles valores son "asc" y "desc".
 * Por defecto se ordenan descendentemente.
 * @apiSampleRequest /api/gordo/historical/occurrencesBySpecialNumber
 */
exports.findOccurrencesBySpecialNumber = async (req, res) => {
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
        _id: '$resultado.numeroClave',
        apariciones: {
          $sum: 1,
        },
      },
    });

    pipeline.push({
      $project: {
        _id: 0,
        numeroClave: '$_id',
        apariciones: 1,
      },
    });

    const results = await GordoTicket.aggregate(pipeline).exec();

    const result = {
      page,
      perPage,
      total: results.length,
    };

    sort_property = sort_property === 'specialNumber' ? 'numeroClave' : 'apariciones';
    sort_type = sort_type === 'asc' ? 1 : -1;

    const sortConfig = {};
    sortConfig[sort_property] = sort_type;

    if (sort_property === 'apariciones') {
      sortConfig.numeroClave = sort_type;
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

    const data = await GordoTicket.aggregate(pipeline).exec();
    result.data = data;

    return res.status(HTTP_CODES.OK).json(result);
  } catch (err) {
    return res.status(HTTP_CODES.INTERNAL_SERVER_ERROR).send(err.message);
  }
};

/**
 * @api {get} /gordo/historical/lastDateByNumber Consulta de fecha de última aparición por número en histórico de El Gordo de la Primitiva
 * @apiName GetGordoLastDateByNumber
 * @apiGroup GordoHistorical
 *
 * @apiDescription Recurso para la consulta de fecha de última aparición por número en histórico de El Gordo de la Primitiva.
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
 * @apiSampleRequest /api/gordo/historical/lastDateByNumber
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

    const results = await GordoTicket.aggregate(pipeline).exec();

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

    const data = await GordoTicket.aggregate(pipeline).exec();
    result.data = data;

    return res.status(HTTP_CODES.OK).json(result);
  } catch (err) {
    return res.status(HTTP_CODES.INTERNAL_SERVER_ERROR).send(err.message);
  }
};

/**
 * @api {get} /gordo/historical/lastDateBySpecialNumber Consulta de fecha de última aparición por número clave en histórico de El Gordo de la Primitiva
 * @apiName GetGordoLastDateBySpecialNumber
 * @apiGroup GordoHistorical
 *
 * @apiDescription Recurso para la consulta de fecha de última aparición por número clave en histórico de El Gordo de la Primitiva.
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
 * @apiSampleRequest /api/gordo/historical/lastDateBySpecialNumber
 */
exports.findLastDateBySpecialNumber = async (req, res) => {
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
        _id: '$resultado.numeroClave',
        ultimaAparicion: {
          $max: '$fecha',
        },
      },
    });

    pipeline.push({
      $project: {
        _id: 0,
        numeroClave: '$_id',
        fecha: '$ultimaAparicion',
      },
    });

    const results = await GordoTicket.aggregate(pipeline).exec();

    const result = {
      page,
      perPage,
      total: results.length,
    };

    sort_property = sort_property === 'date' ? 'fecha' : 'numeroClave';
    sort_type = sort_type === 'asc' ? 1 : -1;

    const sortConfig = {};
    sortConfig[sort_property] = sort_type;

    if (sort_property === 'numeroClave') {
      sortConfig.fecha = sort_type;
    } else if (sort_property === 'fecha') {
      sortConfig.numeroClave = 1;
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

    const data = await GordoTicket.aggregate(pipeline).exec();
    result.data = data;

    return res.status(HTTP_CODES.OK).json(result);
  } catch (err) {
    return res.status(HTTP_CODES.INTERNAL_SERVER_ERROR).send(err.message);
  }
};
