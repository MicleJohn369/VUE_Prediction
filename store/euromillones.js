import Vue from 'vue';

import utils from '@/utils';

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
    occurrencesByResultWithStars: {},
    occurrencesByStar: {},
    lastDateByNumber: {},
    lastDateByStar: {},
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

    return Vue.pronostigolClient.getEuromillonesTickets({
      ...ticketsFilters,
      ...state.ticketsPagination,
    })
      .then((tickets) => commit('setTickets', tickets))
      .finally(() => commit('setIsLoading', false));
  },
  getTicket({ commit }, { year, raffle }) {
    commit('setIsLoading', true);

    return Vue.pronostigolClient.getEuromillonesTickets({
      year,
      raffle,
    })
      .then((tickets) => commit('setCurrentTicket', tickets.data[0]))
      .finally(() => commit('setIsLoading', false));
  },
  destroyTickets({ commit }) {
    return commit('setTickets', {
      data: [],
      total: 0,
    });
  },
  destroyTicket({ commit }) {
    return commit('setCurrentTicket', {
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
    return Vue.pronostigolClient.getEuromillonesYears({
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

    return Vue.pronostigolClient.getEuromillonesOccurrencesByNumberStats({
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

    return Vue.pronostigolClient.getEuromillonesOccurrencesByResultStats({
      ...statsFilters,
      ...state.statsPagination,
    })
      .then((stats) => {
        commit('setOccurrencesByResultStats', stats);
      })
      .finally(() => commit('setIsLoading', false));
  },
  getOccurrencesByResultWithStarsStats({ state, commit }) {
    commit('setIsLoading', true);

    const statsFilters = { ...state.statsFilters };

    statsFilters.searchBy = null;

    return Vue.pronostigolClient.getEuromillonesOccurrencesByResultWithStarsStats({
      ...statsFilters,
      ...state.statsPagination,
    })
      .then((stats) => {
        commit('setOccurrencesByResultWithStarsStats', stats);
      })
      .finally(() => commit('setIsLoading', false));
  },
  getOccurrencesByStarStats({ state, commit }) {
    commit('setIsLoading', true);

    const statsFilters = { ...state.statsFilters };

    statsFilters.searchBy = null;

    return Vue.pronostigolClient.getEuromillonesOccurrencesByStarStats({
      ...statsFilters,
      ...state.statsPagination,
    })
      .then((stats) => {
        commit('setOccurrencesByStarStats', stats);
      })
      .finally(() => commit('setIsLoading', false));
  },
  getLastDateByNumberStats({ state, commit }) {
    commit('setIsLoading', true);

    const statsFilters = { ...state.statsFilters };

    statsFilters.searchBy = null;

    return Vue.pronostigolClient.getEuromillonesLastDateByNumberStats({
      ...statsFilters,
      ...state.statsPagination,
    })
      .then((stats) => {
        commit('setLastDateByNumberStats', stats);
      })
      .finally(() => commit('setIsLoading', false));
  },
  getLastDateByStarStats({ state, commit }) {
    commit('setIsLoading', true);

    const statsFilters = { ...state.statsFilters };

    statsFilters.searchBy = null;

    return Vue.pronostigolClient.getEuromillonesLastDateByStarStats({
      ...statsFilters,
      ...state.statsPagination,
    })
      .then((stats) => {
        commit('setLastDateByStarStats', stats);
      })
      .finally(() => commit('setIsLoading', false));
  },
  destroyStats({ commit }) {
    return commit('setStats', {
      occurrencesByNumber: {},
      occurrencesByResult: {},
      occurrencesByResultWithStars: {},
      occurrencesByStar: {},
      lastDateByNumber: {},
      lastDateByStar: {},
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
  setTicketsPagination(state, pagination) {
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
  setOccurrencesByResultWithStarsStats(state, stats) {
    Vue.set(state.stats, 'occurrencesByResultWithStars', stats);
  },
  setOccurrencesByStarStats(state, stats) {
    Vue.set(state.stats, 'occurrencesByStar', stats);
  },
  setLastDateByNumberStats(state, stats) {
    Vue.set(state.stats, 'lastDateByNumber', stats);
  },
  setLastDateByStarStats(state, stats) {
    Vue.set(state.stats, 'lastDateByStar', stats);
  },
  setStatsPagination(state, pagination) {
    Vue.set(state, 'statsPagination', pagination);
  },
};

export const getters = {
  getLastDateByStarStats: (state) => {
    const lastDateByStar = utils.cloneObject(state.stats.lastDateByStar);

    if (!lastDateByStar.data) {
      return lastDateByStar;
    }

    lastDateByStar.data = lastDateByStar.data
      .filter((item) => item.reintegro !== null);

    lastDateByStar.total = lastDateByStar.data.length;

    return lastDateByStar;
  },
};
