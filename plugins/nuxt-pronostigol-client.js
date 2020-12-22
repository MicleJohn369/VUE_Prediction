import Vue from 'vue';
import pronostigolClient from './vuePronostigolClient';

export default ({ app }) => {
  Vue.use(pronostigolClient, {
    endpoint: app.$config.apiUrl,
  });
};
