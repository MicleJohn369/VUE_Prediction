import Vue from 'vue';

export const state = () => ({
  tickets: {
    data: [],
  },
  ticketsFilters: {},
  ticketsPagination: {},
  currentTicket: {},
  years: [],
  yearsPagination: {},
  stats: {
    filas: [],
  },
  statsFilters: {},
  statsPagination: {},
  standardStats: {
    data: [],
  },
  standardStatsFilters: {},
  standardStatsPagination: {
    page: 1,
    per_page: 10,
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
  getTicket({ commit }, { year, day }) {
    commit('setIsLoading', true);

    return Vue.pronostigolClient.getBonolotoTicket({
      year,
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
  getStats({ state, commit }) {
    commit('setIsLoading', true);

    const statsFilters = { ...state.statsFilters };
    if (statsFilters.year === 'Histórico') {
      statsFilters.year = null;
    }

    statsFilters.searchBy = null;

    return Vue.pronostigolClient.getBonolotoStats({
      ...statsFilters,
      ...state.statsPagination,
    })
      .then((stats) => {
        commit('setStats', stats);
      })
      .finally(() => commit('setIsLoading', false));
  },
  destroyStats({ commit }) {
    return commit('setStats', {
      filas: [],
    });
  },
  getStandardStats({ commit, state }) {
    commit('setIsLoading', true);

    const standardStatsFilters = { ...state.standardStatsFilters };

    standardStatsFilters.searchBy = null;

    return Vue.pronostigolClient.getBonolotoStandardStats({
      ...standardStatsFilters,
      ...state.standardStatsPagination,
    })
      .then((standardStats) => {
        commit('setStandardStats', standardStats);
      })
      .finally(() => commit('setIsLoading', false));
  },
  destroyStandardStats({ commit }) {
    return commit('setStandardStats', {
      data: [],
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
  setStatsPagination(state, pagination) {
    Vue.set(state, 'statsPagination', pagination);
  },
  setStatsAsLocal(state, stats) {
    Vue.set(state, 'statsAsLocal', stats);
  },
  setStatsAsVisitor(state, stats) {
    Vue.set(state, 'statsAsVisitor', stats);
  },
  /**
   * Standard stats
   */
  setStandardStatsFilters(state, filters) {
    Vue.set(state, 'standardStatsFilters', filters);
  },
  setStandardStats(state, stats) {
    Vue.set(state, 'standardStats', stats);
  },
  setStandardStatsPagination(state, pagination) {
    Vue.set(state, 'standardStatsPagination', pagination);
  },
};
