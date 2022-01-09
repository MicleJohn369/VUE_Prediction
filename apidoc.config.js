const packageJson = require('./package.json');

require('dotenv').config();

module.exports = {
  name: packageJson.name,
  version: packageJson.version,
  title: 'Documentación de la API Rest de Pronostigol',
  url: process.env.API_URL,
  sampleUrl: process.env.API_URL,
};
