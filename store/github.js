import Vue from 'vue';

export const state = () => ({
  lastCommitDate: null,
});

export const getters = {};

export const actions = {
  getLastCommitDate({ commit }) {
    return Vue.pronostigolClient.getLastCommitDate()
      .then((data) => {
        commit('setLastCommitDate', data[0].commit.author.date);
      });
  },
};

export const mutations = {
  setLastCommitDate(state, date) {
    Vue.set(state, 'lastCommitDate', date);
  },
};
