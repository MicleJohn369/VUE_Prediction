<template>
  <v-form
    ref="form"
    v-model="valid"
  >
    <v-container>
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
            mandatory
            :disabled="loading"
          >
            <v-radio
              :label="searchByOccurrencesByNumberLabel"
              value="occurrencesByNumber"
            />
            <v-radio
              :label="searchByOccurrencesByResultLabel"
              value="occurrencesByResult"
            />
            <v-radio
              :label="searchByOccurrencesByResultWithStarsLabel"
              value="occurrencesByResultWithStars"
            />
            <v-radio
              :label="searchByOccurrencesByStarLabel"
              value="occurrencesByStar"
            />
            <v-radio
              :label="searchByLastDateByNumberLabel"
              value="lastDateByNumber"
            />
            <v-radio
              :label="searchByLastDateByStarLabel"
              value="lastDateByStar"
            />
          </v-radio-group>
        </v-col>
      </v-row>
      <v-row
        justify="center"
      >
        <v-col
          cols="auto"
        >
          <v-btn
            color="primary"
            :disabled="loading"
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
  name: 'EuromillonesStatsForm',
  props: {
    show: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      rules: {

      },
      valid: false,
      searchByLabel: this.$t('VIEWS.EUROMILLONES.STATS.STATS_FORM.FILTERS.SEARCH_BY.LABEL'),
      searchByOccurrencesByNumberLabel: this.$t('VIEWS.EUROMILLONES.STATS.STATS_FORM.FILTERS.SEARCH_BY.OPTIONS.OCCURRENCES_BY_NUMBER.LABEL'),
      searchByOccurrencesByResultLabel: this.$t('VIEWS.EUROMILLONES.STATS.STATS_FORM.FILTERS.SEARCH_BY.OPTIONS.OCCURRENCES_BY_RESULT.LABEL'),
      searchByOccurrencesByResultWithStarsLabel: this.$t('VIEWS.EUROMILLONES.STATS.STATS_FORM.FILTERS.SEARCH_BY.OPTIONS.OCCURRENCES_BY_RESULT_WITH_STARS.LABEL'),
      searchByOccurrencesByStarLabel: this.$t('VIEWS.EUROMILLONES.STATS.STATS_FORM.FILTERS.SEARCH_BY.OPTIONS.OCCURRENCES_BY_STAR.LABEL'),
      searchByLastDateByNumberLabel: this.$t('VIEWS.EUROMILLONES.STATS.STATS_FORM.FILTERS.SEARCH_BY.OPTIONS.LAST_DATE_BY_NUMBER.LABEL'),
      searchByLastDateByStarLabel: this.$t('VIEWS.EUROMILLONES.STATS.STATS_FORM.FILTERS.SEARCH_BY.OPTIONS.LAST_DATE_BY_STAR.LABEL'),
      searchText: this.$t('VIEWS.EUROMILLONES.STATS.STATS_FORM.FILTERS.SEARCH.TEXT'),
    };
  },
  computed: {
    searchBy: {
      get() {
        return this.$store.state.euromillones.statsFilters.searchBy;
      },
      set(value) {
        const filters = this.$store.state.euromillones.statsFilters;
        this.$store.commit('euromillones/setStatsFilters', {
          ...filters,
          searchBy: value,
        });
      },
    },
    ...mapState('euromillones', {
      loading: (state) => state.loading,
    }),
  },
  methods: {
    async submitForm() {
      this.resetShow();
      await this.$nextTick();
      this.$store.dispatch('euromillones/destroyStats');

      this.$refs.form.validate();

      if (this.valid) {
        this.show[this.searchBy] = true;
      }
    },
    resetShow() {
      Object.keys(this.show).forEach((item) => {
        this.show[item] = false;
      });
    },
  },
};
</script>
