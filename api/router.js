/* eslint-disable global-require */
const { HTTP_CODES } = require('./constants');

module.exports = function router(app) {
  // Importacion de rutas de la API general
  // require('./routes/general/api')(app);

  // Importacion de rutas de Queries generales
  // TODO: Uncomment this
  // require('./routes/general/queries')(app);

  // Importacion de rutas de la API de la Quiniela
  // require('./routes/quiniela/api')(app);

  // Importacion de rutas de la API de la Bonoloto
  require('./routes/bonoloto/api')(app);

  // Importacion de rutas de la API de la Primitiva
  require('./routes/primitiva/api')(app);

  // Importacion de rutas de la API de El Gordo de la Primitiva
  // require('./routes/gordo/api')(app);

  // Importacion de rutas de la API del Euromillones
  // require('./routes/euromillones/api')(app);

  // Importacion de rutas de Queries del Euromillones
  // require('./routes/euromillones/queries')(app);

  app.get('/*', (req, res) => res.status(HTTP_CODES.NOT_FOUND).send('API Method Not Found'));
};
