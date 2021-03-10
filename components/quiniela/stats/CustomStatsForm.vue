<template>
  <v-form
    ref="form"
    v-model="valid"
  >
    <v-container>
      <v-row>
        <v-col
          cols="12"
          md="6"
        >
          <v-autocomplete
            v-model="season"
            :rules="rules.season"
            :items="seasons"
            :label="seasonText"
            item-text="name"
            item-value="value"
          />
        </v-col>
        <v-col
          cols="12"
          md="6"
        >
          <v-autocomplete
            v-model="competition"
            :rules="rules.competition"
            :items="competitions"
            :label="competitionText"
            item-text="name"
            item-value="value"
          />
        </v-col>
      </v-row>
      <v-row
        justify="center"
      >
        <v-col
          cols="12"
          sm="auto"
        >
          <p>{{ searchByLabel }}</p>
          <v-radio-group
            v-model="searchBy"
          >
            <v-radio
              :label="searchByGeneralLabel"
              value="general"
            />
            <v-radio
              :label="searchByTeamLabel"
              value="equipo"
              color="green"
            />
            <v-radio
              :label="searchByFootballMatchLabel"
              value="partido"
              color="red"
            />
          </v-radio-group>
        </v-col>
      </v-row>
      <v-row
        v-if="isTeamFieldVisible"
      >
        <v-col
          cols="12"
          md="6"
        >
          <v-autocomplete
            v-model="team"
            :rules="rules.team"
            :items="teams"
            :label="teamText"
            item-text="name"
            item-value="value"
          />
        </v-col>
      </v-row>
      <v-row
        v-if="areTeamFieldsVisible"
      >
        <v-col
          cols="12"
          md="6"
        >
          <v-autocomplete
            v-model="localTeam"
            :rules="rules.localTeam"
            :items="teams"
            :label="localTeamText"
            item-text="name"
            item-value="value"
          />
        </v-col>
        <v-col
          cols="12"
          md="6"
        >
          <v-autocomplete
            v-model="visitorTeam"
            :rules="rules.visitorTeam"
            :items="teams"
            :label="visitorTeamText"
            item-text="name"
            item-value="value"
          />
        </v-col>
      </v-row>
      <v-row
        justify="center"
      >
        <v-col
          cols="12"
          md="auto"
        >
          <v-btn
            color="primary"
            @click="submitForm"
          >
            {{ searchText }}
          </v-btn>
        </v-col>
      </v-row>
    </v-container>
  </v-form>
</template>

<script>

import { mapState } from 'vuex';

export default {
  name: 'CustomStatsForm',
  props: {
    show: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      rules: {
        season: [],
        competition: [],
        team: [
          (v) => !!v || 'xoxEl equipo es obligatorio',
        ],
        localTeam: [
          (v) => !!v || 'xoxEl equipo local es obligatorio',
        ],
        visitorTeam: [
          (v) => !!v || 'xoxEl equipo visitante es obligatorio',
        ],
      },
      valid: false,
      seasonText: this.$t('VIEWS.QUINIELA.STATS.CUSTOM_STATS_FORM.FILTERS.SEASON.LABEL'),
      competitionText: this.$t('VIEWS.QUINIELA.STATS.CUSTOM_STATS_FORM.FILTERS.COMPETITION.LABEL'),
      searchByLabel: this.$t('VIEWS.QUINIELA.STATS.CUSTOM_STATS_FORM.FILTERS.SEARCH_BY.LABEL'),
      searchByGeneralLabel: this.$t('VIEWS.QUINIELA.STATS.CUSTOM_STATS_FORM.FILTERS.SEARCH_BY.OPTIONS.GENERAL.LABEL'),
      searchByTeamLabel: this.$t('VIEWS.QUINIELA.STATS.CUSTOM_STATS_FORM.FILTERS.SEARCH_BY.OPTIONS.TEAM.LABEL'),
      searchByFootballMatchLabel: this.$t('VIEWS.QUINIELA.STATS.CUSTOM_STATS_FORM.FILTERS.SEARCH_BY.OPTIONS.FOOTBALL_MATCH.LABEL'),
      teamText: this.$t('VIEWS.QUINIELA.STATS.CUSTOM_STATS_FORM.FILTERS.TEAM.LABEL'),
      localTeamText: this.$t('VIEWS.QUINIELA.STATS.CUSTOM_STATS_FORM.FILTERS.LOCAL_TEAM.LABEL'),
      visitorTeamText: this.$t('VIEWS.QUINIELA.STATS.CUSTOM_STATS_FORM.FILTERS.VISITOR_TEAM.LABEL'),
      searchText: this.$t('VIEWS.QUINIELA.STATS.CUSTOM_STATS_FORM.FILTERS.SEARCH.TEXT'),
    };
  },
  computed: {
    ...mapState('quiniela', {
      seasons: (state) => state.seasons,
      competitions: (state) => state.competitions,
      teams: (state) => state.teams,
    }),
    season: {
      get() {
        return this.$store.state.quiniela.statsFilters.season;
      },
      set(value) {
        const filters = this.$store.state.quiniela.statsFilters;
        this.$store.commit('quiniela/setStatsFilters', {
          ...filters,
          season: value,
        });
      },
    },
    competition: {
      get() {
        return this.$store.state.quiniela.statsFilters.competition;
      },
      set(value) {
        const filters = this.$store.state.quiniela.statsFilters;
        this.$store.commit('quiniela/setStatsFilters', {
          ...filters,
          competition: value,
        });
      },
    },
    searchBy: {
      get() {
        return this.$store.state.quiniela.statsFilters.searchBy;
      },
      set(value) {
        const filters = this.$store.state.quiniela.statsFilters;
        this.$store.commit('quiniela/setStatsFilters', {
          ...filters,
          searchBy: value,
        });
      },
    },
    team: {
      get() {
        return this.$store.state.quiniela.statsFilters.team;
      },
      set(value) {
        const filters = this.$store.state.quiniela.statsFilters;
        this.$store.commit('quiniela/setStatsFilters', {
          ...filters,
          team: value,
        });
      },
    },
    localTeam: {
      get() {
        return this.$store.state.quiniela.statsFilters.localTeam;
      },
      set(value) {
        const filters = this.$store.state.quiniela.statsFilters;
        this.$store.commit('quiniela/setStatsFilters', {
          ...filters,
          local_team: value,
        });
      },
    },
    visitorTeam: {
      get() {
        return this.$store.state.quiniela.statsFilters.visitorTeam;
      },
      set(value) {
        const filters = this.$store.state.quiniela.statsFilters;
        this.$store.commit('quiniela/setStatsFilters', {
          ...filters,
          visitor_team: value,
        });
      },
    },
    isTeamFieldVisible() {
      return this.searchBy === 'equipo';
    },
    areTeamFieldsVisible() {
      return this.searchBy === 'partido';
    },
  },
  methods: {
    async submitForm() {
      this.resetShow();
      this.$store.dispatch('quiniela/destroyStats');

      this.$refs.form.validate();

      if (this.valid) {
        if (this.searchBy === 'general' || this.searchBy === 'partido') {
          this.show.stats = true;
          await this.getStats();
        } else if (this.searchBy === 'equipo') {
          this.show.statsByPlace = true;
          await Promise.all([
            this.getStatsAsLocal(),
            this.getStatsAsVisitor(),
          ]);
        }
      }
    },
    getStats() {
      return this.$store.dispatch('quiniela/getStats');
    },
    getStatsAsLocal() {
      return this.$store.dispatch('quiniela/getStatsAsLocal');
    },
    getStatsAsVisitor() {
      return this.$store.dispatch('quiniela/getStatsAsVisitor');
    },
    resetShow() {
      Object.keys(this.show).forEach((item) => {
        this.show[item] = false;
      });
    },
  },
};
</script>
