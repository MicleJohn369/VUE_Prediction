import Vue from 'vue';

export const state = () => ({
  all: [],
  current: {},
});

export const getters = {};

export const actions = {
  getAll({ commit }) {
    const query = this.$content('posts');

    const whereConditions = { published: true };

    return query
      .where(whereConditions)
      .sortBy('creationDate', 'desc')
      .fetch()
      .then((posts) => commit('setAll', posts));
  },
  getBySlug({ commit }, { slug }) {
    const path = slug && (slug === 'home' || slug === 'blog') ? slug : `posts/${slug}`;

    return this.$content(path)
      .where({ published: true })
      .fetch()
      .then((post) => commit('setCurrent', post));
  },
  destroyCurrent({ commit }) {
    return commit('setCurrent', {});
  },
  destroyAll({ commit }) {
    return commit('setAll', []);
  },
};

export const mutations = {
  setAll(state, posts) {
    Vue.set(state, 'all', posts);
  },
  setCurrent(state, post) {
    Vue.set(state, 'current', post);
  },
};
