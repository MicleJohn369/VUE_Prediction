import Vue from 'vue';

import utils from '@/utils';

export const state = () => ({
  tickets: {
    data: [],
  },
  ticketsFilters: {},
  ticketsPagination: {},
  currentTicket: {},
  seasons: [],
  seasonsPagination: {},
  competitions: [],
  competitionsPagination: {},
  teams: [],
  teamsPagination: {},
  stats: {
    filas: [],
    plenosRenovados: [],
  },
  statsFilters: {},
  statsPagination: {},
  specialResults: [
    '0-0',
    '0-1',
    '0-2',
    '0-M',
    '1-0',
    '1-1',
    '1-2',
    '1-M',
    '2-0',
    '2-1',
    '2-2',
    '2-M',
    'M-0',
    'M-1',
    'M-2',
    'M-M',
  ],
  loading: true,
});

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
  /**
   * Competitions
   */
  getCompetitions({ state, commit }) {
    commit('setIsLoading', true);
    return Vue.pronostigolClient.getQuinielaCompetitions({
      ...state.competitionPagination,
    })
      .then((competitions) => commit('setCompetitions', competitions))
      .finally(() => commit('setIsLoading', false));
  },
  /**
   * Teams
   */
  getTeams({ state, commit }) {
    commit('setIsLoading', true);
    return Vue.pronostigolClient.getQuinielaTeams({
      ...state.teamsPagination,
    })
      .then((teams) => commit('setTeams', teams))
      .finally(() => commit('setIsLoading', false));
  },
  /**
   * Stats
   */
  getStats({ state, commit }) {
    commit('setIsLoading', true);

    const statsFilters = { ...state.statsFilters };
    if (statsFilters.season === 'Histórico') {
      statsFilters.season = null;
    }

    if (statsFilters.competition === 'Todas') {
      statsFilters.competition = null;
    }

    statsFilters.searchBy = null;

    return Vue.pronostigolClient.getQuinielaStats({
      ...statsFilters,
      ...state.statsPagination,
    })
      .then((stats) => {
        const filledStats = utils.getFilledStats(stats);
        commit('setStats', filledStats);
      })
      .finally(() => commit('setIsLoading', false));
  },
  destroyStats({ commit }) {
    return commit('setStats', {
      filas: [],
      plenosRenovados: [],
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
   * Seasons
   */
  setSeasons(state, seasons) {
    Vue.set(state, 'seasons', seasons);
  },
  setSeasonPagination(state, pagination) {
    Vue.set(state, 'seasonsPagination', pagination);
  },
  /**
   * Competitions
   */
  setCompetitions(state, competitions) {
    Vue.set(state, 'competitions', competitions);
  },
  setCompetitionPagination(state, pagination) {
    Vue.set(state, 'competitionPagination', pagination);
  },
  /**
   * Teams
   */
  setTeams(state, teams) {
    Vue.set(state, 'teams', teams);
  },
  setTeamPagination(state, pagination) {
    Vue.set(state, 'teamsPagination', pagination);
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
  setStatPagination(state, pagination) {
    Vue.set(state, 'statsPagination', pagination);
  },
};
