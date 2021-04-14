const game = 'gordo';

export default {
  path: `/sitemap-${game}.xml`,
  gzip: true,
  lastmod: '2021-04-14',
  exclude: ['/**'],
  routes() {
    return [
      {
        url: `/${game}`,
        changefreq: 'yearly',
        priority: 0.8,
      },
      {
        url: `/${game}/sorteos`,
        changefreq: 'weekly',
        priority: 0.8,
      },
      {
        url: `/${game}/estadisticas`,
        changefreq: 'weekly',
        priority: 0.8,
      },
    ];
  },
};
