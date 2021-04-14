export default {
  path: '/sitemap-main.xml',
  gzip: true,
  lastmod: '2021-04-14',
  exclude: ['/**'],
  routes() {
    return [
      {
        url: '/',
        changefreq: 'weekly',
        priority: 1,
      }, {
        url: '/privacidad',
        changefreq: 'yearly',
        priority: 0.8,
      }, {
        url: '/preguntas-frecuentes',
        changefreq: 'yearly',
        priority: 0.8,
      }, {
        url: '/docs',
        changefreq: 'monthly',
        priority: 0.8,
      },
    ];
  },
};
