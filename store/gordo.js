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
    occurrencesByResultWithSpecialNumber: {},
    occurrencesBySpecialNumber: {},
    lastDateByNumber: {},
    lastDateBySpecialNumber: {},
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

    return Vue.pronostigolClient.getGordoTickets({
      ...ticketsFilters,
      ...state.ticketsPagination,
    })
      .then((tickets) => commit('setTickets', tickets))
      .finally(() => commit('setIsLoading', false));
  },
  getTicket({ commit }, { year, raffle }) {
    commit('setIsLoading', true);

    return Vue.pronostigolClient.getGordoTickets({
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
    return Vue.pronostigolClient.getGordoYears({
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

    return Vue.pronostigolClient.getGordoOccurrencesByNumberStats({
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

    return Vue.pronostigolClient.getGordoOccurrencesByResultStats({
      ...statsFilters,
      ...state.statsPagination,
    })
      .then((stats) => {
        commit('setOccurrencesByResultStats', stats);
      })
      .finally(() => commit('setIsLoading', false));
  },
  getOccurrencesByResultWithSpecialNumberStats({ state, commit }) {
    commit('setIsLoading', true);

    const statsFilters = { ...state.statsFilters };

    statsFilters.searchBy = null;

    return Vue.pronostigolClient.getGordoOccurrencesByResultWithSpecialNumberStats({
      ...statsFilters,
      ...state.statsPagination,
    })
      .then((stats) => {
        commit('setOccurrencesByResultWithSpecialNumberStats', stats);
      })
      .finally(() => commit('setIsLoading', false));
  },
  getOccurrencesBySpecialNumberStats({ state, commit }) {
    commit('setIsLoading', true);

    const statsFilters = { ...state.statsFilters };

    statsFilters.searchBy = null;

    return Vue.pronostigolClient.getGordoOccurrencesBySpecialNumberStats({
      ...statsFilters,
      ...state.statsPagination,
    })
      .then((stats) => {
        commit('setOccurrencesBySpecialNumberStats', stats);
      })
      .finally(() => commit('setIsLoading', false));
  },
  getLastDateByNumberStats({ state, commit }) {
    commit('setIsLoading', true);

    const statsFilters = { ...state.statsFilters };

    statsFilters.searchBy = null;

    return Vue.pronostigolClient.getGordoLastDateByNumberStats({
      ...statsFilters,
      ...state.statsPagination,
    })
      .then((stats) => {
        commit('setLastDateByNumberStats', stats);
      })
      .finally(() => commit('setIsLoading', false));
  },
  getLastDateBySpecialNumberStats({ state, commit }) {
    commit('setIsLoading', true);

    const statsFilters = { ...state.statsFilters };

    statsFilters.searchBy = null;

    return Vue.pronostigolClient.getGordoLastDateBySpecialNumberStats({
      ...statsFilters,
      ...state.statsPagination,
    })
      .then((stats) => {
        commit('setLastDateBySpecialNumberStats', stats);
      })
      .finally(() => commit('setIsLoading', false));
  },
  destroyStats({ commit }) {
    return commit('setStats', {
      occurrencesByNumber: {},
      occurrencesByResult: {},
      occurrencesByResultWithSpecialNumber: {},
      occurrencesBySpecialNumber: {},
      lastDateByNumber: {},
      lastDateBySpecialNumber: {},
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
  setOccurrencesByResultWithSpecialNumberStats(state, stats) {
    Vue.set(state.stats, 'occurrencesByResultWithSpecialNumber', stats);
  },
  setOccurrencesBySpecialNumberStats(state, stats) {
    Vue.set(state.stats, 'occurrencesBySpecialNumber', stats);
  },
  setLastDateByNumberStats(state, stats) {
    Vue.set(state.stats, 'lastDateByNumber', stats);
  },
  setLastDateBySpecialNumberStats(state, stats) {
    Vue.set(state.stats, 'lastDateBySpecialNumber', stats);
  },
  setStatsPagination(state, pagination) {
    Vue.set(state, 'statsPagination', pagination);
  },
};

export const getters = {
  getLastDateBySpecialNumberStats: (state) => {
    const lastDateBySpecialNumber = utils.cloneObject(state.stats.lastDateBySpecialNumber);

    if (!lastDateBySpecialNumber.data) {
      return lastDateBySpecialNumber;
    }

    lastDateBySpecialNumber.data = lastDateBySpecialNumber.data
      .filter((item) => item.reintegro !== null);

    lastDateBySpecialNumber.total = lastDateBySpecialNumber.data.length;

    return lastDateBySpecialNumber;
  },
};
