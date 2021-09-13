/**
 * Método que sirve para parsear la configuración SEO de una página
 * y convertirla en el formato requerido por vue-meta.
 *
 * @author jualoppaz
 */
function getCommonMetas(doc) {
  const obj = {
    meta: [],
    link: [],
  };

  const metas = doc.metas || {};

  if (doc.title) obj.title = doc.title;

  // Standard metas

  if (metas.description) {
    obj.meta.push({
      hid: 'description',
      name: 'description',
      content: metas.description,
    });
  }
  if (metas.author) {
    obj.meta.push({
      hid: 'author',
      name: 'author',
      content: metas.author,
    });
  }

  if (metas.keywords) {
    obj.meta.push({
      hid: 'keywords',
      name: 'keywords',
      content: metas.keywords,
    });
  }
  if (metas.canonical_url) {
    obj.link.push({
      rel: 'canonical',
      href: metas.canonical_url,
    });
  }

  // Open Graph metas
  if (metas.og_title) {
    obj.meta.push({
      hid: 'og:title',
      property: 'og:title',
      content: metas.og_title,
    });
  }
  if (metas.og_type) {
    obj.meta.push({
      hid: 'og:type',
      property: 'og:type',
      content: metas.og_type,
    });
  }
  if (metas.article_published_time) {
    obj.meta.push({
      hid: 'article:published_time',
      property: 'article:published_time',
      content: metas.article_published_time,
    });
  }
  if (metas.article_author) {
    obj.meta.push({
      hid: 'article:author',
      property: 'article:author',
      content: metas.article_author,
    });
  }
  if (metas.og_image) {
    obj.meta.push({
      hid: 'og:image',
      property: 'og:image',
      content: metas.og_image,
    });
  }
  if (metas.og_url) {
    obj.meta.push({
      hid: 'og:url',
      property: 'og:url',
      content: metas.og_url,
    });
  }
  if (metas.og_description) {
    obj.meta.push({
      hid: 'og:description',
      property: 'og:description',
      content: metas.og_description,
    });
  }
  if (metas.og_site_name) {
    obj.meta.push({
      hid: 'og:site_name',
      property: 'og:site_name',
      content: metas.og_site_name,
    });
  }

  // Twitter metas
  if (metas.twitter_site) {
    obj.meta.push({
      hid: 'twitter:site',
      name: 'twitter:site',
      content: metas.twitter_site,
    });
  }
  if (metas.twitter_card) {
    obj.meta.push({
      hid: 'twitter:card',
      name: 'twitter:card',
      content: metas.twitter_card,
    });
  }
  if (metas.twitter_image) {
    obj.meta.push({
      hid: 'twitter:image',
      name: 'twitter:image',
      content: metas.twitter_image,
    });
  }
  if (metas.twitter_title) {
    obj.meta.push({
      hid: 'twitter:title',
      name: 'twitter:title',
      content: metas.twitter_title,
    });
  }
  if (metas.twitter_description) {
    obj.meta.push({
      hid: 'twitter:description',
      name: 'twitter:description',
      content: metas.twitter_description,
    });
  }

  return obj;
}

function getFilledStats(stats, specialResults) {
  const from = 1;
  const to = 15;

  const emptyRow = {
    victoriasLocales: 0,
    empates: 0,
    victoriasVisitantes: 0,
  };

  const res = {
    filas: [],
    plenosRenovados: {},
  };

  for (let i = from; i <= to; i += 1) {
    const row = stats.filas.find((item) => item.fila === i);

    if (!row) {
      res.filas.push({
        ...emptyRow,
        fila: i,
      });
    } else {
      res.filas.push(row);
    }
  }

  for (let i = 0; i <= specialResults.length; i += 1) {
    const specialResult = specialResults[i];

    res.plenosRenovados[specialResult] = stats
      .plenosRenovados[specialResult] || 0;
  }

  return res;
}

function cloneObject(obj) {
  return JSON.parse(JSON.stringify(obj));
}

export default {
  getCommonMetas,
  getFilledStats,
  cloneObject,
};
