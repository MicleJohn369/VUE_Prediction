/* eslint-disable global-require */
/* eslint-disable no-console */
const express = require('express');
const session = require('express-session');
const bodyParser = require('body-parser');
const compression = require('compression');

const mongoose = require('mongoose');

const { ValidationError } = require('express-validation');

const app = express();

app.set('json spaces', 2);

if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}

const port = process.env.PORT || 8888;
const forceDomain = require('forcedomain');

const { HTTP_CODES } = require('./constants');

app.use(
  compression({
    threshold: 0,
  }),
);

app.set('port', port);

app.use(
  session({
    secret: 'super-duper-secret-secret',
    resave: true,
    saveUninitialized: true,
  }),
);

app.use(bodyParser.json());

const forceDomainOpts = {
  hostname: 'www.pronostigol.es',
  excludeRule: /[a-zA-Z0-9][a-zA-Z0-9-]+\.herokuapp\.com/i,
};

if (process.env.ACTIVATE_SSL) {
  forceDomainOpts.protocol = 'https';
}

app.use(forceDomain(forceDomainOpts));

require('./models');

function logErrors(err, req, res, next) {
  console.error(err.stack);
  next(err);
}

// eslint-disable-next-line no-unused-vars
function clientErrorHandler(err, req, res, next) {
  console.log('Entramos en clientErrorHandler');

  if (err instanceof ValidationError) {
    return res.status(HTTP_CODES.UNPROCESSABLE_ENTITY).json(err);
  }

  return res
    .status(HTTP_CODES.INTERNAL_SERVER_ERROR)
    .send(JSON.stringify(err, null, 4));
}

require('./router')(app);

app.use(logErrors);
app.use(clientErrorHandler);

mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.connection.on('connected', () => {
  // eslint-disable-next-line no-console
  console.log('Connected to Database');
});

mongoose.connection.on('error', (err) => {
  console.log('Error al conectar la bbdd.');
  return console.dir(err);
});

module.exports = app;
