/* eslint-disable camelcase */
/* eslint-disable max-len */
const mongoose = require('mongoose');

const { HTTP_CODES } = require('../constants');

const EuromillonesTicket = mongoose.model('EuromillonesTicket');
const EuromillonesYear = mongoose.model('EuromillonesYear');

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
 * @api {get} /euromillones/tickets Obtención de todos los tickets de Euromillones
 * @apiName GetEuromillonesTickets
 * @apiGroup EuromillonesTickets
 *
 * @apiDescription Recurso para la consulta de tickets de Euromillones registrados en el sistema.
 *
 * @apiVersion 1.0.0
 *
 * @apiParam {Number} [year] Año asociado a los sorteos consultados
 * @apiParam {Number} [raffle] Identificador único del sorteo dentro de un año
 * @apiParam {Number} [page] Número de página a consultar. Por defecto se establece a 1.
 * @apiParam {Number} [per_page] Número de registros por página deseados. Por defecto se establece a 10.
 * @apiParam {String} [sort_type] Sentido de la ordenación de registros. Por defecto se ordenan por fecha descendentemente.
 * @apiParam {String} [sort_property] Propiedad por la que ordenar los registros. Los posibles valores son "date". Por defecto se ordenan por "date".
 * @apiSampleRequest /api/euromillones/tickets
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
    const total = await EuromillonesTicket.countDocuments().exec();

    const tickets = await EuromillonesTicket.find(filters, null, options).exec();

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
    const ticket = await EuromillonesTicket.findById(id).exec();

    if (!ticket) return res.status(HTTP_CODES.NOT_FOUND).send('not-found');
    // TODO: Filtrar respuesta en base a los permisos del usuario

    const filteredTicket = filtrarInformacion(ticket);
    return res.status(HTTP_CODES.OK).json(filteredTicket);
  } catch (err) {
    return res.status(HTTP_CODES.INTERNAL_SERVER_ERROR).send(err.message);
  }
};

/**
 * @api {get} /euromillones/years Obtención de todos los años de Euromillones
 * @apiName GetEuromillonesYears
 * @apiGroup EuromillonesYears
 *
 * @apiDescription Recurso para la consulta de años de la Euromillones registrados en el sistema.
 *
 * @apiVersion 1.0.0
 *
 * @apiSampleRequest /api/euromillones/years
 */
exports.findAllYears = async (req, res) => {
  try {
    const tickets = await EuromillonesYear.find().exec();

    return res.status(HTTP_CODES.OK).json(tickets);
  } catch (err) {
    return res.status(HTTP_CODES.INTERNAL_SERVER_ERROR).send(err.message);
  }
};

/**
 * @api {get} /euromillones/years/:id Obtención de un año de Euromillones según su id
 * @apiName GetEuromillonesYear
 * @apiGroup EuromillonesYears
 *
 * @apiDescription Recurso para la consulta de un año de Euromillones registrado en el sistema.
 *
 * @apiVersion 1.0.0
 *
 * @apiSampleRequest /api/euromillones/years/:id
 *
 * @apiParam {String} id Identificador del año de Euromillones
 */
exports.findYearById = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.isValidObjectId(id)) {
    return res.status(HTTP_CODES.NOT_FOUND).send('not-found');
  }

  try {
    const year = await EuromillonesYear.findById(id).exec();

    if (!year) return res.status(HTTP_CODES.NOT_FOUND).send('not-found');

    return res.status(HTTP_CODES.OK).json(year);
  } catch (err) {
    return res.status(HTTP_CODES.INTERNAL_SERVER_ERROR).send(err.message);
  }
};

/**
 * @api {get} /euromillones/historical/occurrencesByResult Consulta de apariciones por resultado sin reintegro en histórico de Euromillones
 * @apiName GetEuromillonesOccurrencesByResult
 * @apiGroup EuromillonesHistorical
 *
 * @apiDescription Recurso para la consulta de apariciones por resultado sin reintegro en histórico de Euromillones.
 *
 * @apiVersion 1.0.0
 *
 * @apiParam {Number} page Número de página a consultar. Por defecto se establece a 1.
 * @apiParam {Number} per_page Número de registros por página deseados. Por defecto se establece a 10.
 * @apiParam {String} [sort_property] Propiedad por la que ordenar los registros. Los posibles valores son "result"
 * y "occurrences". Por defecto se ordenan por "occurrences".
 * @apiParam {String} [sort_type] Sentido de la ordenación de registros. Los posibles valores son "asc" y "desc".
 * Por defecto se ordenan descendentemente.
 * @apiSampleRequest /api/euromillones/historical/occurrencesByResult
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

    const results = await EuromillonesTicket.aggregate(pipeline).exec();

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

    const data = await EuromillonesTicket.aggregate(pipeline).exec();
    result.data = data;

    return res.status(HTTP_CODES.OK).json(result);
  } catch (err) {
    return res.status(HTTP_CODES.INTERNAL_SERVER_ERROR).send(err.message);
  }
};

/**
 * @api {get} /euromillones/historical/occurrencesByResultWithStars Consulta de apariciones por resultado con estrellas en histórico de Euromillones
 * @apiName GetEuromillonesOccurrencesByResultWithStars
 * @apiGroup EuromillonesHistorical
 *
 * @apiDescription Recurso para la consulta de apariciones por resultado con estrellas en histórico de Euromillones.
 *
 * @apiVersion 1.0.0
 *
 * @apiParam {Number} page Número de página a consultar. Por defecto se establece a 1.
 * @apiParam {Number} per_page Número de registros por página deseados. Por defecto se establece a 10.
 * @apiParam {String} sort_property Propiedad por la que ordenar los registros. Los posibles valores son "resultado"
 * y "apariciones". Por defecto se ordenan por "apariciones".
 * @apiParam {String} sort_type Sentido de la ordenación de registros. Los posibles valores son "asc" y "desc".
 * Por defecto se ordenan descendentemente.
 * @apiSampleRequest /api/euromillones/historical/occurrencesByResultWithStars
 */
exports.findOccurrencesByResultWithStars = async (req, res) => {
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
          estrellas: '$resultado.estrellas',
        },
        resultado: {
          $first: '$resultado.bolas',
        },
        estrellas: {
          $first: '$resultado.estrellas',
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
        estrellas: 1,
        apariciones: 1,
      },
    });

    const results = await EuromillonesTicket.aggregate(pipeline).exec();

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
      sortConfig.estrellas = sort_type;
    } else {
      sortConfig.apariciones = sort_type;
      sortConfig.estrellas = sort_type;
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
            'E',
            {
              $reduce: {
                input: '$estrellas',
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

    const data = await EuromillonesTicket.aggregate(pipeline).exec();
    result.data = data;

    return res.status(HTTP_CODES.OK).json(result);
  } catch (err) {
    return res.status(HTTP_CODES.INTERNAL_SERVER_ERROR).send(err.message);
  }
};

/**
 * @api {get} /euromillones/historical/occurrencesByNumber Consulta de apariciones por número en histórico de Euromillones
 * @apiName GetEuromillonesOccurrencesByNumber
 * @apiGroup EuromillonesHistorical
 *
 * @apiDescription Recurso para la consulta de apariciones por número en histórico de Euromillones.
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
 * @apiSampleRequest /api/euromillones/historical/occurrencesByNumber
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

    const results = await EuromillonesTicket.aggregate(pipeline).exec();

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

    const data = await EuromillonesTicket.aggregate(pipeline).exec();
    result.data = data;

    return res.status(HTTP_CODES.OK).json(result);
  } catch (err) {
    return res.status(HTTP_CODES.INTERNAL_SERVER_ERROR).send(err.message);
  }
};

/**
 * @api {get} /euromillones/historical/occurrencesByStar Consulta de apariciones por estrella en histórico de Euromillones
 * @apiName GetEuromillonesOccurrencesByStar
 * @apiGroup EuromillonesHistorical
 *
 * @apiDescription Recurso para la consulta de apariciones por estrella en histórico de Euromillones.
 *
 * @apiVersion 1.0.0
 *
 * @apiParam {Number} page Número de página a consultar. Por defecto se establece a 1.
 * @apiParam {Number} per_page Número de registros por página deseados. Por defecto se establece a 10.
 * @apiParam {String} sort_property Propiedad por la que ordenar los registros. Los posibles valores son "estrella"
 * y "occurrences". Por defecto se ordenan por "occurrences".
 * @apiParam {String} sort_type Sentido de la ordenación de registros. Los posibles valores son "asc" y "desc".
 * Por defecto se ordenan descendentemente.
 * @apiSampleRequest /api/euromillones/historical/occurrencesByStar
 */
exports.findOccurrencesByStar = async (req, res) => {
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
      $unwind: '$resultado.estrellas',
    });

    pipeline.push({
      $group: {
        _id: '$resultado.estrellas.numero',
        apariciones: {
          $sum: 1,
        },
      },
    });

    pipeline.push({
      $project: {
        _id: 0,
        estrella: '$_id',
        apariciones: 1,
      },
    });

    const results = await EuromillonesTicket.aggregate(pipeline).exec();

    const result = {
      page,
      perPage,
      total: results.length,
    };

    sort_property = sort_property === 'star' ? 'estrella' : 'apariciones';
    sort_type = sort_type === 'asc' ? 1 : -1;

    const sortConfig = {};
    sortConfig[sort_property] = sort_type;

    if (sort_property === 'apariciones') {
      sortConfig.estrella = sort_type;
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

    const data = await EuromillonesTicket.aggregate(pipeline).exec();
    result.data = data;

    return res.status(HTTP_CODES.OK).json(result);
  } catch (err) {
    return res.status(HTTP_CODES.INTERNAL_SERVER_ERROR).send(err.message);
  }
};

/**
 * @api {get} /euromillones/historical/occurrencesByStarsPair Consulta de apariciones por pareja de estrellas en histórico de Euromillones
 * @apiName GetEuromillonesOccurrencesByStarsPair
 * @apiGroup EuromillonesHistorical
 *
 * @apiDescription Recurso para la consulta de apariciones por pareja de estrellas en histórico de Euromillones.
 *
 * @apiVersion 1.0.0
 *
 * @apiParam {Number} page Número de página a consultar. Por defecto se establece a 1.
 * @apiParam {Number} per_page Número de registros por página deseados. Por defecto se establece a 10.
 * @apiParam {String} sort_property Propiedad por la que ordenar los registros. Los posibles valores son "estrellas"
 * y "apariciones". Por defecto se ordenan por "apariciones".
 * @apiParam {String} sort_type Sentido de la ordenación de registros. Los posibles valores son "asc" y "desc".
 * Por defecto se ordenan descendentemente.
 * @apiSampleRequest /api/euromillones/historical/occurrencesByStarsPair
 */
exports.findOccurrencesByStarsPair = async (req, res) => {
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
        _id: '$resultado.estrellas',
        apariciones: {
          $sum: 1,
        },
      },
    });

    pipeline.push({
      $project: {
        _id: 0,
        estrellas: '$_id',
        apariciones: 1,
      },
    });

    const results = await EuromillonesTicket.aggregate(pipeline).exec();

    const result = {
      page,
      perPage,
      total: results.length,
    };

    sort_property = sort_property === 'starsPair' ? 'estrellas' : 'apariciones';
    sort_type = sort_type === 'asc' ? 1 : -1;

    const sortConfig = {};
    sortConfig[sort_property] = sort_type;

    if (sort_property === 'apariciones') {
      sortConfig.estrellas = sort_type;
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

    const data = await EuromillonesTicket.aggregate(pipeline).exec();
    result.data = data;

    return res.status(HTTP_CODES.OK).json(result);
  } catch (err) {
    return res.status(HTTP_CODES.INTERNAL_SERVER_ERROR).send(err.message);
  }
};

/**
 * @api {get} /euromillones/historical/lastDateByNumber Consulta de fecha de última aparición por número en histórico de Euromillones
 * @apiName GetEuromillonesLastDateByNumber
 * @apiGroup EuromillonesHistorical
 *
 * @apiDescription Recurso para la consulta de fecha de última aparición por número en histórico de Euromillones.
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
 * @apiSampleRequest /api/euromillones/historical/lastDateByNumber
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

    const results = await EuromillonesTicket.aggregate(pipeline).exec();

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

    const data = await EuromillonesTicket.aggregate(pipeline).exec();
    result.data = data;

    return res.status(HTTP_CODES.OK).json(result);
  } catch (err) {
    return res.status(HTTP_CODES.INTERNAL_SERVER_ERROR).send(err.message);
  }
};

/**
 * @api {get} /euromillones/historical/lastDateByStar Consulta de fecha de última aparición por estrella en histórico de Euromillones
 * @apiName GetEuromillonesLastDateByStar
 * @apiGroup EuromillonesHistorical
 *
 * @apiDescription Recurso para la consulta de fecha de última aparición por estrella en histórico de Euromillones.
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
 * @apiSampleRequest /api/euromillones/historical/lastDateByStar
 */
exports.findLastDateByStar = async (req, res) => {
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
      $unwind: '$resultado.estrellas',
    });

    pipeline.push({
      $group: {
        _id: '$resultado.estrellas.numero',
        ultimaAparicion: {
          $max: '$fecha',
        },
      },
    });

    pipeline.push({
      $project: {
        _id: 0,
        estrella: '$_id',
        fecha: '$ultimaAparicion',
      },
    });

    const results = await EuromillonesTicket.aggregate(pipeline).exec();

    const result = {
      page,
      perPage,
      total: results.length,
    };

    sort_property = sort_property === 'date' ? 'fecha' : 'estrella';
    sort_type = sort_type === 'asc' ? 1 : -1;

    const sortConfig = {};
    sortConfig[sort_property] = sort_type;

    if (sort_property === 'estrella') {
      sortConfig.fecha = sort_type;
    } else if (sort_property === 'fecha') {
      sortConfig.estrella = 1;
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

    const data = await EuromillonesTicket.aggregate(pipeline).exec();
    result.data = data;

    return res.status(HTTP_CODES.OK).json(result);
  } catch (err) {
    return res.status(HTTP_CODES.INTERNAL_SERVER_ERROR).send(err.message);
  }
};
