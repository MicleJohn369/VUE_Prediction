import Vue from 'vue';

export const state = () => ({
  tickets: {
    data: [],
  },
  ticketsFilters: {},
  ticketsPagination: {},
  currentTicket: {
    resultado: {
      bolas: [],
    },
  },
  years: [],
  yearsPagination: {},
  stats: {
    occurrencesByNumber: {},
    occurrencesByResult: {},
    occurrencesByResultWithReimbursement: {},
  },
  statsFilters: {},
  statsPagination: {
    page: 1,
    per_page: 15,
  },
  loading: true,
});

export const actions = {
  /**
   * Tickets
   */
  getTickets({ state, commit }) {
    commit('setIsLoading', true);

    const ticketsFilters = { ...state.ticketsFilters };
    if (ticketsFilters.year === 'Histórico') {
      ticketsFilters.year = null;
    }

    return Vue.pronostigolClient.getBonolotoTickets({
      ...ticketsFilters,
      ...state.ticketsPagination,
    })
      .then((tickets) => commit('setTickets', tickets))
      .finally(() => commit('setIsLoading', false));
  },
  getTicket({ commit }, { year, raffle }) {
    commit('setIsLoading', true);

    return Vue.pronostigolClient.getBonolotoTickets({
      year,
      raffle,
    })
      .then((tickets) => commit('setTicket', tickets.data[0]))
      .finally(() => commit('setIsLoading', false));
  },
  destroyTickets({ commit }) {
    return commit('setTickets', {
      data: [],
      total: 0,
    });
  },
  destroyTicket({ commit }) {
    return commit('setTicket', {
      resultado: {
        bolas: [],
      },
    });
  },
  /**
   * Years
   */
  getYears({ state, commit }) {
    commit('setIsLoading', true);
    return Vue.pronostigolClient.getBonolotoYears({
      ...state.yearsPagination,
    })
      .then((years) => commit('setYears', years))
      .finally(() => commit('setIsLoading', false));
  },
  /**
   * Stats
   */
  getOccurrencesByNumberStats({ state, commit }) {
    commit('setIsLoading', true);

    const statsFilters = { ...state.statsFilters };

    statsFilters.searchBy = null;

    return Vue.pronostigolClient.getBonolotoOccurrencesByNumberStats({
      ...statsFilters,
      ...state.statsPagination,
    })
      .then((stats) => {
        commit('setOccurrencesByNumberStats', stats);
      })
      .finally(() => commit('setIsLoading', false));
  },
  getOccurrencesByResultStats({ state, commit }) {
    commit('setIsLoading', true);

    const statsFilters = { ...state.statsFilters };

    statsFilters.searchBy = null;

    return Vue.pronostigolClient.getBonolotoOccurrencesByResultStats({
      ...statsFilters,
      ...state.statsPagination,
    })
      .then((stats) => {
        commit('setOccurrencesByResultStats', stats);
      })
      .finally(() => commit('setIsLoading', false));
  },
  getOccurrencesByResultWithReimbursementStats({ state, commit }) {
    commit('setIsLoading', true);

    const statsFilters = { ...state.statsFilters };

    statsFilters.searchBy = null;

    return Vue.pronostigolClient.getBonolotoOccurrencesByResultWithReimbursementStats({
      ...statsFilters,
      ...state.statsPagination,
    })
      .then((stats) => {
        commit('setOccurrencesByResultWithReimbursementStats', stats);
      })
      .finally(() => commit('setIsLoading', false));
  },
  destroyStats({ commit }) {
    return commit('setStats', {
      occurrencesByNumber: {},
      occurrencesByResult: {},
      occurrencesByResultWithReimbursement: {},
    });
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
   * Years
   */
  setYears(state, years) {
    Vue.set(state, 'years', years);
  },
  setYearsPagination(state, pagination) {
    Vue.set(state, 'yearsPagination', pagination);
  },
  /**
   * Stats
   */
  setStatsFilters(state, filters) {
    Vue.set(state, 'statsFilters', filters);
  },
  setStats(state, stats) {
    Vue.set(state, 'stats', stats);
  },
  setOccurrencesByNumberStats(state, stats) {
    Vue.set(state.stats, 'occurrencesByNumber', stats);
  },
  setOccurrencesByResultStats(state, stats) {
    Vue.set(state.stats, 'occurrencesByResult', stats);
  },
  setOccurrencesByResultWithReimbursementStats(state, stats) {
    Vue.set(state.stats, 'occurrencesByResultWithReimbursement', stats);
  },
  setStatsPagination(state, pagination) {
    Vue.set(state, 'statsPagination', pagination);
  },
};
