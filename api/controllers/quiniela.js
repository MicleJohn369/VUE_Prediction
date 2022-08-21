/* eslint-disable camelcase */
/* eslint-disable max-len */
const mongoose = require('mongoose');

const { HTTP_CODES } = require('../constants');

const QuinielaTicket = mongoose.model('QuinielaTicket');
const QuinielaSeason = mongoose.model('QuinielaSeason');
const QuinielaCompetition = mongoose.model('QuinielaCompetition');
const QuinielaTeam = mongoose.model('QuinielaTeam');

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
 * @api {get} /quiniela/tickets Obtención de todos los tickets de Quiniela
 * @apiName GetQuinielaTickets
 * @apiGroup QuinielaTickets
 *
 * @apiDescription Recurso para la consulta de tickets de Quiniela registrados en el sistema.
 *
 * @apiVersion 1.0.0
 *
 * @apiParam {Number} [season] Temporada asociada a los sorteos consultados
 * @apiParam {Number} [page] Número de página a consultar. Por defecto se establece a 1.
 * @apiParam {Number} [per_page] Número de registros por página deseados. Por defecto se establece a 10.
 * @apiParam {String} [sort_type] Sentido de la ordenación de registros. Por defecto se ordenan por fecha descendentemente.
 * @apiParam {String} [sort_property] Propiedad por la que ordenar los registros. Los posibles valores son "date". Por defecto se ordenan por "date".
 * @apiSampleRequest /quiniela/tickets
 */
exports.findAllTickets = async (req, res) => {
  const { query } = req;

  const { season } = query;
  const page = Number(query.page) || 1;
  const perPage = Number(query.per_page) || 10;
  let sort_property = query.sort_property || 'date';
  const sort_type = query.sort_type || 'desc';

  const filters = {};

  if (season) filters.temporada = season;

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
    const total = await QuinielaTicket.countDocuments().exec();

    const tickets = await QuinielaTicket.find(filters, null, options).exec();

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

/**
 * @api {get} /quiniela/seasons Obtención de todas las temporadas de la Quiniela
 * @apiName GetQuinielaSeasons
 * @apiGroup QuinielaSeasons
 *
 * @apiDescription Recurso para la consulta de temporadas de la quiniela registradas en el sistema.
 *
 * @apiVersion 1.0.0
 *
 * @apiParam {String} [sort_type] Sentido de la ordenación de registros. Los posibles valores son "asc" y "desc".
 *
 * @apiSampleRequest /quiniela/seasons
 */
exports.findAllSeasons = async (req, res) => {
  const { query } = req;

  const sort_property = 'name';
  const sort_type = query.sort_type || 'desc';

  const sort = {
    [sort_property]: sort_type,
  };

  const options = {
    sort,
  };

  try {
    const tickets = await QuinielaSeason.find({}, null, options).exec();

    return res.status(HTTP_CODES.OK).json(tickets);
  } catch (err) {
    return res.status(HTTP_CODES.INTERNAL_SERVER_ERROR).send(err.message);
  }
};

/**
 * @api {get} /quiniela/seasons/:id Obtención de una temporada de Quiniela según su id
 * @apiName GetQuinielaSeason
 * @apiGroup QuinielaSeasons
 *
 * @apiDescription Recurso para la consulta de una temporada de Quiniela registrada en el sistema.
 *
 * @apiVersion 1.0.0
 *
 * @apiSampleRequest /quiniela/seasons/:id
 *
 * @apiParam {String} id Identificador de la temporada de Quiniela
 */
exports.findSeasonById = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.isValidObjectId(id)) {
    return res.status(HTTP_CODES.NOT_FOUND).send('not-found');
  }

  try {
    const year = await QuinielaSeason.findById(id).exec();

    if (!year) return res.status(HTTP_CODES.NOT_FOUND).send('not-found');

    return res.status(HTTP_CODES.OK).json(year);
  } catch (err) {
    return res.status(HTTP_CODES.INTERNAL_SERVER_ERROR).send(err.message);
  }
};

/**
 * @api {get} /quiniela/tickets/season/:season/day/:day Obtención de un ticket de Quiniela por temporada y jornada
 * @apiName GetQuinielaTicketBySeasonAndDay
 * @apiGroup QuinielaTickets
 *
 * @apiDescription Recurso para la obtención de un ticket de Quiniela por temporada y jornada registrado en el sistema.
 *
 * @apiVersion 1.0.0
 *
 * @apiParam {String} season Temporada asociada al sorteo consultado
 * @apiParam {String} day Jornada asociada al sorteo consultado
 * @apiSampleRequest /quiniela/tickets/season/:season/day/:day
 */
exports.findTicketBySeasonAndDay = async (req, res) => {
  const errores = {};
  const { day, season } = req.params;
  let hayErrores = false;

  if (Number.isNaN(day)) {
    hayErrores = true;
    errores.jornadaNoValida = true;
  }

  if (hayErrores) {
    return res.status(HTTP_CODES.UNPROCESSABLE_ENTITY).send(errores);
  }

  try {
    const ticket = await QuinielaTicket.findOne({
      jornada: Number(day),
      temporada: season,
    }).exec();

    if (!ticket) return res.status(HTTP_CODES.NOT_FOUND).send('not-found');

    return res.status(HTTP_CODES.OK).json(ticket);
  } catch (err) {
    return res.status(HTTP_CODES.INTERNAL_SERVER_ERROR).send(err.message);
  }
};

/**
 * @api {get} /quiniela/competitions Obtención de todas las competiciones de la Quiniela
 * @apiName GetQuinielaCompetitions
 * @apiGroup QuinielaCompetitions
 *
 * @apiDescription Recurso para la consulta de competiciones de la quiniela registradas en el sistema.
 *
 * @apiVersion 1.0.0
 *
 * @apiParam {String} [sort_type] Sentido de la ordenación de registros. Los posibles valores son "asc" y "desc".
 *
 * @apiSampleRequest /quiniela/competitions
 */
exports.findAllCompetitions = async (req, res) => {
  const { query } = req;

  const sort_property = 'name';
  const sort_type = query.sort_type || 'asc';

  const sort = {
    [sort_property]: sort_type,
  };

  const options = {
    sort,
  };

  try {
    const tickets = await QuinielaCompetition.find({}, null, options).exec();

    return res.status(HTTP_CODES.OK).json(tickets);
  } catch (err) {
    return res.status(HTTP_CODES.INTERNAL_SERVER_ERROR).send(err.message);
  }
};

/**
 * @api {get} /quiniela/competitions/:id Obtención de una competición de Quiniela según su id
 * @apiName GetQuinielaCompetition
 * @apiGroup QuinielaCompetitions
 *
 * @apiDescription Recurso para la consulta de una competición de Quiniela registrada en el sistema.
 *
 * @apiVersion 1.0.0
 *
 * @apiSampleRequest /quiniela/competitions/:id
 *
 * @apiParam {String} id Identificador de la competición de Quiniela
 */
exports.findCompetitionById = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.isValidObjectId(id)) {
    return res.status(HTTP_CODES.NOT_FOUND).send('not-found');
  }

  try {
    const year = await QuinielaCompetition.findById(id).exec();

    if (!year) return res.status(HTTP_CODES.NOT_FOUND).send('not-found');

    return res.status(HTTP_CODES.OK).json(year);
  } catch (err) {
    return res.status(HTTP_CODES.INTERNAL_SERVER_ERROR).send(err.message);
  }
};

exports.createTeam = async (req, res) => {
  const team = req.body;
  try {
    await QuinielaTeam.create(team);

    return res.status(HTTP_CODES.CREATED).json(team);
  } catch (err) {
    return res.status(HTTP_CODES.INTERNAL_SERVER_ERROR).send(err.message);
  }
};

exports.editTeam = async (req, res) => {
  try {
    const { id } = req.params;
    const teamForm = req.body;

    const team = await QuinielaTeam.findByIdAndUpdate(id, {
      $set: teamForm,
    }).exec();

    return res.status(HTTP_CODES.OK).json(team);
  } catch (err) {
    return res.status(HTTP_CODES.INTERNAL_SERVER_ERROR).send(err.message);
  }
};

/**
 * @api {get} /quiniela/teams Obtención de todos los equipos que han aparecido en la Quiniela
 * @apiName GetQuinielaTeams
 * @apiGroup QuinielaTeams
 *
 * @apiDescription Recurso para la consulta de equipos que han aparecido en la Quiniela.
 *
 * @apiVersion 1.0.0
 *
 * @apiParam {String} [sort_type] Sentido de la ordenación de registros. Los posibles valores son "asc" y "desc".
 * @apiParam {String} [sort_property] Propiedad por la que ordenar los registros. El posible valor es "name". Por defecto se ordenan por "name".
 * @apiParam {Number} [page] Número de página a consultar. Por defecto se establece a 1.
 * @apiParam {Number} [per_page] Número de registros por página deseados. Por defecto se establece a 10.
 * @apiParam {String} [name] Filtro de los registros por el nombre dado.
 *
 * @apiSampleRequest /quiniela/teams
 */
exports.findAllTeams = async (req, res) => {
  const { query } = req;

  const { name } = query;
  const page = Number(query.page) || 1;
  const perPage = Number(query.per_page);
  const sort_property = query.sort_property || 'name';
  const sort_type = query.sort_type || 'desc';

  const filters = {};

  if (name) {
    filters.value = {
      $regex: name
        .replace(/á|à|ä/, 'a')
        .replace(/é|è|ë/, 'e')
        .replace(/í|ì|ï/, 'i')
        .replace(/ó|ò|ö/, 'o')
        .replace(/ú|ù|ü/, 'u'),
      $options: '(?-i)g',
    };
  }

  const sort = {
    [sort_property]: sort_type,
  };
  const skip = (page - 1) * (perPage || 0);
  const limit = perPage || undefined;

  const options = {
    sort,
    skip,
    limit,
  };

  try {
    const total = await QuinielaTeam.countDocuments(filters).exec();

    const teams = await QuinielaTeam.find(filters, null, options).exec();

    return res.status(HTTP_CODES.OK).json({
      page,
      perPage,
      total,
      data: teams,
    });
  } catch (err) {
    return res.status(HTTP_CODES.INTERNAL_SERVER_ERROR).send(err.message);
  }
};

/**
 * @api {get} /quiniela/teams/:id Obtención de un equipo que ha aparecido en la Quiniela según su id
 * @apiName GetQuinielaTeam
 * @apiGroup QuinielaTeams
 *
 * @apiDescription Recurso para la consulta de un equipo que ha aparecido en la Quiniela según su id.
 *
 * @apiVersion 1.0.0
 *
 * @apiSampleRequest /quiniela/teams/:id
 *
 * @apiParam {String} id Identificador del equipo
 */
exports.findTeamById = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.isValidObjectId(id)) {
    return res.status(HTTP_CODES.NOT_FOUND).send('not-found');
  }

  try {
    const year = await QuinielaTeam.findById(id).exec();

    if (!year) return res.status(HTTP_CODES.NOT_FOUND).send('not-found');

    return res.status(HTTP_CODES.OK).json(year);
  } catch (err) {
    return res.status(HTTP_CODES.INTERNAL_SERVER_ERROR).send(err.message);
  }
};

const getTicketsGroupedByRes = async (givenFilters) => {
  const filters = {
    'partidos.fila': 15,
    'partidos.resultadoConGoles': {
      $ne: null,
    },
  };

  if (givenFilters.competition) {
    filters['partidos.competicion'] = givenFilters.competition;
  }

  if (givenFilters.season) {
    filters.temporada = givenFilters.season;
  }

  if (givenFilters.localTeam) {
    filters['partidos.local'] = givenFilters.localTeam;
  }

  if (givenFilters.visitorTeam) {
    filters['partidos.visitante'] = givenFilters.visitorTeam;
  }

  const pipeline = [];

  pipeline.push({
    $unwind: '$partidos',
  });

  pipeline.push({
    $match: filters,
  });

  pipeline.push({
    $group: {
      _id: '$partidos.resultadoConGoles',
      total: {
        $sum: 1,
      },
    },
  });

  const result = await QuinielaTicket.aggregate(pipeline).exec();

  const modernSpecialResultJson = {};

  for (let i = 0; i < result.length; i += 1) {
    // eslint-disable-next-line no-underscore-dangle
    const resultadoConGoles = result[i]._id;
    const { total } = result[i];

    modernSpecialResultJson[resultadoConGoles] = total;
  }

  return modernSpecialResultJson;
};

/**
 * @api {get} /quiniela/historical Obtención del histórico de victorias locales, empates y victorias visitantes agrupados por fila
 * @apiName GetQuinielaHistorical
 * @apiGroup QuinielaHistorical
 *
 * @apiDescription Recurso para la consulta de victorias locales, empates y victorias visitantes agrupados por fila.
 * @apiVersion 1.0.0
 *
 * @apiParam {String} [competition] Nombre de la competición sobre la que se quieren consultar los resultados.
 * @apiParam {String} [season] Temporada sobre la que se quieren consultar los resultados.
 * @apiParam {String} [local_team] Nombre del equipo que actúa de local en los partidos sobre los que se quieren consultar los resultados.
 * @apiParam {String} [visitor_team] Nombre del equipo que actúa de visitante en los partidos sobre los que se quieren consultar los resultados.
 * @apiSampleRequest /quiniela/historical
 */
exports.findHistorical = async (req, res) => {
  const { competition } = req.query;
  const { season } = req.query;
  const localTeam = req.query.local_team;
  const visitorTeam = req.query.visitor_team;

  const givenFilters = {
    competition,
    season,
    localTeam,
    visitorTeam,
  };

  const result = {
    filas: [],
    plenosRenovados: {},
  };

  try {
    const pipeline = [];

    const filters = {};

    if (givenFilters.competition) {
      filters['partidos.competicion'] = competition;
    }

    if (givenFilters.season) {
      filters.temporada = season;
    }

    if (givenFilters.localTeam) {
      filters['partidos.local'] = localTeam;
    }

    if (givenFilters.visitorTeam) {
      filters['partidos.visitante'] = visitorTeam;
    }

    pipeline.push({
      $unwind: '$partidos',
    });

    pipeline.push({
      $match: filters,
    });

    pipeline.push({
      $group: {
        _id: '$partidos.fila',
        victoriasLocales: {
          $sum: {
            $cond: [
              {
                $eq: ['$partidos.resultado', '1'],
              },
              1,
              0,
            ],
          },
        },
        empates: {
          $sum: {
            $cond: [
              {
                $eq: ['$partidos.resultado', 'X'],
              },
              1,
              0,
            ],
          },
        },
        victoriasVisitantes: {
          $sum: {
            $cond: [
              {
                $eq: ['$partidos.resultado', '2'],
              },
              1,
              0,
            ],
          },
        },
      },
    });

    pipeline.push({
      $project: {
        _id: 0,
        fila: '$_id',
        victoriasLocales: 1,
        empates: 1,
        victoriasVisitantes: 1,
      },
    });

    pipeline.push({
      $sort: {
        fila: 1,
      },
    });

    const rows = await QuinielaTicket.aggregate(pipeline).exec();
    result.filas = rows;

    const modernSpecialResults = await getTicketsGroupedByRes(givenFilters);
    result.plenosRenovados = modernSpecialResults;

    return res.status(HTTP_CODES.OK).json(result);
  } catch (err) {
    return res.status(HTTP_CODES.INTERNAL_SERVER_ERROR).send(err.message);
  }
};

/**
 * @api {get} /quiniela/historical/combinations Obtención de todas las combinaciones de Quiniela
 * @apiName GetQuinielaHistoricalCombinations
 * @apiGroup QuinielaHistoricalCombinations
 *
 * @apiDescription Recurso para la consulta de combinaciones que han aparecido en sorteos de Quiniela registrados en el sistema.
 *
 * @apiVersion 1.0.0
 *
 * @apiParam {Number} page Número de página a consultar. Por defecto se establece a 1.
 * @apiParam {Number} per_page Número de registros por página deseados. Por defecto se establece a 10.
 * @apiParam {String} [sort_property] Propiedad por la que ordenar los registros. Los posibles valores son "result"
 * y "occurrences". Por defecto se ordenan por "occurrences".
 * @apiParam {String} [sort_type] Sentido de la ordenación de registros. Los posibles valores son "asc" y "desc".
 * Por defecto se ordenan descendentemente.
 * @apiSampleRequest /quiniela/historical/combinations
 */
exports.findHistoricalAppearedResults = async (req, res) => {
  const { query } = req;

  const page = query.page || 1;
  const perPage = query.per_page || 10;
  const type = query.sort_type || 'desc';
  const sort = query.sort_property || 'occurrences';

  const givenFilters = {
    page: Number(page),
    perPage: Number(perPage),
    sort,
    type,
  };

  const limit = givenFilters.perPage;
  const skip = (page - 1) * limit;

  const sort_property = sort === 'result' ? 'resultAsString' : 'occurrences';
  const sort_type = type === 'asc' ? 1 : -1;

  try {
    const pipeline = [];

    pipeline.push({
      $addFields: {
        resultAsString: {
          $concat: [
            {
              $reduce: {
                input: '$partidos',
                initialValue: '',
                in: {
                  $concat: [
                    '$$value',
                    {
                      $cond: {
                        if: {
                          $and: [
                            {
                              $eq: ['$$this.fila', 15],
                            },
                            {
                              $gte: [
                                '$$this.temporada',
                                '2014-2015',
                              ],
                            },
                          ],
                        },
                        then: '$$this.resultadoConGoles',
                        else: '$$this.resultado',
                      },
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
      $unwind: '$partidos',
    });

    pipeline.push({
      $group: {
        _id: {
          jornada: '$jornada',
          temporada: '$temporada',
        },
        results: {
          $push: {
            $cond: {
              if: {
                $and: [
                  {
                    $eq: ['$partidos.fila', 15],
                  },
                  {
                    $gte: ['$partidos.temporada', '2014-2015'],
                  },
                ],
              },
              then: '$partidos.resultadoConGoles',
              else: '$partidos.resultado',
            },
          },
        },
        resultAsString: {
          $first: '$resultAsString',
        },
      },
    });

    pipeline.push({
      $project: {
        _id: 0,
        resultAsString: '$resultAsString',
        results: 1,
      },
    });

    pipeline.push({
      $group: {
        _id: '$resultAsString',
        occurrences: {
          $sum: 1,
        },
        results: {
          $first: '$results',
        },
      },
    });

    pipeline.push({
      $project: {
        _id: 0,
        resultAsString: '$_id',
        occurrences: 1,
        results: 1,
      },
    });

    const data = await QuinielaTicket.aggregate(pipeline).exec();

    const result = {
      page,
      perPage: limit,
      total: data.length,
    };

    const sortConfig = {};
    sortConfig[sort_property] = sort_type;

    // Añadimos ordenación alternativa
    if (sort_property === 'occurrences') {
      sortConfig.resultAsString = sort_type;
    } else {
      sortConfig.occurrences = sort_type;
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

    const combinations = await QuinielaTicket.aggregate(pipeline).exec();
    result.data = combinations;

    return res.status(HTTP_CODES.OK).json(result);
  } catch (err) {
    return res.status(HTTP_CODES.INTERNAL_SERVER_ERROR).send(err.message);
  }
};
