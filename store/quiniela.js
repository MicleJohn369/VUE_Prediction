import Vue from 'vue';

export const state = () => ({
  tickets: {
    data: [],
  },
  ticketFilters: {},
  ticketPagination: {},
  loading: true,
});

export const getters = {};

export const actions = {
  getTickets({ state, commit }) {
    commit('setIsLoading', true);
    return Vue.pronostigolClient.getQuinielaTickets({
      ...state.ticketFilters,
      ...state.ticketPagination,
    })
      .then((tickets) => commit('setTickets', tickets))
      .finally(() => commit('setIsLoading', false));
  },
  destroyTickets({ commit }) {
    return commit('setTickets', {
      data: [],
      total: 0,
    });
  },
};

export const mutations = {
  setTickets(state, tickets) {
    Vue.set(state, 'tickets', tickets);
  },
  setIsLoading(state, loading) {
    Vue.set(state, 'loading', loading);
  },
  setTicketFilters(state, filters) {
    Vue.set(state, 'ticketFilters', filters);
  },
  setTicketPagination(state, pagination) {
    Vue.set(state, 'ticketPagination', pagination);
  },
};
