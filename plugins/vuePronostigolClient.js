import pronostigolClient from './pronostigolClient';

export default {
  install: (Vue, options) => {
    const client = pronostigolClient(options);

    Vue.pronostigolClient = client;
    Vue.prototype.$pronostigolClient = client;
  },
};
