/* eslint-disable import/no-dynamic-require */
const fs = require('fs');
const path = require('path');

const modelsPath = path.resolve(__dirname, './');
fs.readdirSync(modelsPath).forEach((file) => {
  // eslint-disable-next-line global-require
  require(`${modelsPath}/${file}`);
});
