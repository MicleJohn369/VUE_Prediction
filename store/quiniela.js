import Vue from 'vue';

export const state = () => ({
  tickets: {
    data: [],
  },
  ticketFilters: {},
  ticketPagination: {},
  seasons: [],
  seasonPagination: {},
  loading: true,
});

export const getters = {};

export const actions = {
  /**
   * Tickets
   */
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
  /**
   * Seasons
   */
  getSeasons({ state, commit }) {
    commit('setIsLoading', true);
    return Vue.pronostigolClient.getQuinielaSeasons({
      ...state.seasonPagination,
    })
      .then((seasons) => commit('setSeasons', seasons))
      .finally(() => commit('setIsLoading', false));
  },
};

export const mutations = {
  setIsLoading(state, loading) {
    Vue.set(state, 'loading', loading);
  },
  /**
   * Tickets
   */
  setTickets(state, tickets) {
    Vue.set(state, 'tickets', tickets);
  },
  setTicketFilters(state, filters) {
    Vue.set(state, 'ticketFilters', filters);
  },
  setTicketPagination(state, pagination) {
    Vue.set(state, 'ticketPagination', pagination);
  },
  /**
   * Seasons
   */
  setSeasons(state, seasons) {
    Vue.set(state, 'seasons', seasons);
  },
  setSeasonPagination(state, pagination) {
    Vue.set(state, 'seasonPagination', pagination);
  },
};
