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
    plenosRenovados: {},
  },
  statsFilters: {},
  statsPagination: {},
  statsAsLocal: {
    filas: [],
    plenosRenovados: {},
  },
  statsAsVisitor: {
    filas: [],
    plenosRenovados: {},
  },
  standardStats: {
    data: [],
  },
  standardStatsFilters: {},
  standardStatsPagination: {
    page: 1,
    per_page: 10,
  },
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
  teamsFilters: {},
  currentTeam: null,
  competitionsFilters: {},
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
      .then((ticket) => commit('setCurrentTicket', ticket))
      .finally(() => commit('setIsLoading', false));
  },
  destroyTickets({ commit }) {
    return commit('setTickets', {
      data: [],
      total: 0,
    });
  },
  destroyTicket({ commit }) {
    return commit('setCurrentTicket', {});
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
    const competitionsFilters = { ...state.competitionsFilters };

    return Vue.pronostigolClient.getQuinielaCompetitions({
      ...competitionsFilters,
      ...state.competitionsPagination,
    })
      .then((competitions) => commit('setCompetitions', competitions))
      .finally(() => commit('setIsLoading', false));
  },
  createCompetition({ commit }, competition) {
    commit('setIsLoading', true);

    return Vue.pronostigolClient.createQuinielaCompetition(competition)
      .finally(() => commit('setIsLoading', false));
  },
  /**
   * Teams
   */
  getTeams({ state, commit }) {
    commit('setIsLoading', true);
    const teamsFilters = { ...state.teamsFilters };

    return Vue.pronostigolClient.getQuinielaTeams({
      ...teamsFilters,
      ...state.teamsPagination,
    })
      .then((teams) => commit('setTeams', teams))
      .finally(() => commit('setIsLoading', false));
  },
  getTeam({ commit }, id) {
    commit('setIsLoading', true);

    return Vue.pronostigolClient.getQuinielaTeam(id)
      .then((team) => commit('setCurrentTeam', team))
      .finally(() => commit('setIsLoading', false));
  },
  createTeam({ commit }, team) {
    commit('setIsLoading', true);

    return Vue.pronostigolClient.createQuinielaTeam(team)
      .finally(() => commit('setIsLoading', false));
  },
  editTeam({ commit }, { id, team }) {
    commit('setIsLoading', true);

    return Vue.pronostigolClient.editQuinielaTeam(id, team)
      .finally(() => commit('setIsLoading', false));
  },
  deleteTeam({ commit }, { id }) {
    commit('setIsLoading', true);

    return Vue.pronostigolClient.deleteQuinielaTeam(id)
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
        const filledStats = utils.getFilledStats(stats, state.specialResults);
        commit('setStats', filledStats);
      })
      .finally(() => commit('setIsLoading', false));
  },
  destroyStats({ commit }) {
    return commit('setStats', {
      filas: [],
      plenosRenovados: {},
    });
  },
  getStatsAsLocal({ state, commit }) {
    commit('setIsLoading', true);

    const statsFilters = { ...state.statsFilters };
    if (statsFilters.season === 'Histórico') {
      statsFilters.season = null;
    }

    if (statsFilters.competition === 'Todas') {
      statsFilters.competition = null;
    }

    statsFilters.searchBy = null;
    statsFilters.local_team = statsFilters.team;
    statsFilters.team = null;

    return Vue.pronostigolClient.getQuinielaStats({
      ...statsFilters,
      ...state.statsPagination,
    })
      .then((stats) => {
        const filledStats = utils.getFilledStats(stats, state.specialResults);
        commit('setStatsAsLocal', filledStats);
      })
      .finally(() => commit('setIsLoading', false));
  },
  getStatsAsVisitor({ state, commit }) {
    commit('setIsLoading', true);

    const statsFilters = { ...state.statsFilters };
    if (statsFilters.season === 'Histórico') {
      statsFilters.season = null;
    }

    if (statsFilters.competition === 'Todas') {
      statsFilters.competition = null;
    }

    statsFilters.searchBy = null;
    statsFilters.visitor_team = statsFilters.team;
    statsFilters.team = null;

    return Vue.pronostigolClient.getQuinielaStats({
      ...statsFilters,
      ...state.statsPagination,
    })
      .then((stats) => {
        const filledStats = utils.getFilledStats(stats, state.specialResults);
        commit('setStatsAsVisitor', filledStats);
      })
      .finally(() => commit('setIsLoading', false));
  },
  getStandardStats({ commit, state }) {
    commit('setIsLoading', true);

    const standardStatsFilters = { ...state.standardStatsFilters };

    standardStatsFilters.searchBy = null;

    return Vue.pronostigolClient.getQuinielaStandardStats({
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
  setTicketsPagination(state, pagination) {
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
  setSeasonsPagination(state, pagination) {
    Vue.set(state, 'seasonsPagination', pagination);
  },
  /**
   * Competitions
   */
  setCompetitions(state, competitions) {
    Vue.set(state, 'competitions', competitions);
  },
  setCompetitionsPagination(state, pagination) {
    Vue.set(state, 'competitionsPagination', pagination);
  },
  setCompetitionsFilters(state, filters) {
    Vue.set(state, 'competitionsFilters', filters);
  },
  /**
   * Teams
   */
  setTeams(state, teams) {
    Vue.set(state, 'teams', teams);
  },
  setTeamsPagination(state, pagination) {
    Vue.set(state, 'teamsPagination', pagination);
  },
  setTeamsFilters(state, filters) {
    Vue.set(state, 'teamsFilters', filters);
  },
  setCurrentTeam(state, team) {
    Vue.set(state, 'currentTeam', team);
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
