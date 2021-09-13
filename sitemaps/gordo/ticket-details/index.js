
const axios = require('axios');

const game = 'gordo';

export default {
  path: `/sitemap-${game}-tickets.xml`,
  gzip: true,
  lastmod: '2021-04-14',
  exclude: ['/**'],
  routes: async () => {
    const { data } = await axios.get(`https://www.pronostigol.es/api/${game}/tickets`, {
      params: {
        page: 1,
        per_page: 10000,
        sort_type: 'desc',
        sort_property: 'fecha',
      },
    });

    return data.data.map((ticket) => ({
      url: `/${game}/sorteos/${ticket.anyo}/${ticket.sorteo}`,
      changefreq: 'never',
      priority: 0.4,
    }));
  },
};
