import Vue from 'vue';

export const state = () => ({
  tickets: {
    data: [],
  },
  ticketsFilters: {},
  ticketsPagination: {},
  currentTicket: {},
  seasons: [],
  seasonsPagination: {},
  loading: true,
});

export const getters = {};

export const actions = {
  /**
   * Tickets
   */
  getTickets({ state, commit }) {
    commit('setIsLoading', true);

    const ticketsFilters = { ...state.ticketsFilters };
    if (ticketsFilters.season === 'Histórico') {
      ticketsFilters.season = null;
    }

    return Vue.pronostigolClient.getQuinielaTickets({
      ...ticketsFilters,
      ...state.ticketsPagination,
    })
      .then((tickets) => commit('setTickets', tickets))
      .finally(() => commit('setIsLoading', false));
  },
  getTicket({ commit }, { season, day }) {
    commit('setIsLoading', true);

    return Vue.pronostigolClient.getQuinielaTicket({
      season,
      day,
    })
      .then((ticket) => commit('setTicket', ticket))
      .finally(() => commit('setIsLoading', false));
  },
  destroyTickets({ commit }) {
    return commit('setTickets', {
      data: [],
      total: 0,
    });
  },
  destroyTicket({ commit }) {
    return commit('setTicket', {});
  },
  /**
   * Seasons
   */
  getSeasons({ state, commit }) {
    commit('setIsLoading', true);
    return Vue.pronostigolClient.getQuinielaSeasons({
      ...state.seasonsPagination,
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
  setTicketsFilters(state, filters) {
    Vue.set(state, 'ticketsFilters', filters);
  },
  setTicketPagination(state, pagination) {
    Vue.set(state, 'ticketsPagination', pagination);
  },
  setTicket(state, ticket) {
    Vue.set(state, 'currentTicket', ticket);
  },
  /**
   * Seasons
   */
  setSeasons(state, seasons) {
    Vue.set(state, 'seasons', seasons);
  },
  setSeasonPagination(state, pagination) {
    Vue.set(state, 'seasonsPagination', pagination);
  },
};
