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
              :label="searchByOccurrencesByResultWithSpecialNumberLabel"
              value="occurrencesByResultWithSpecialNumber"
            />
            <v-radio
              :label="searchByOccurrencesBySpecialNumberLabel"
              value="occurrencesBySpecialNumber"
            />
            <v-radio
              :label="searchByLastDateByNumberLabel"
              value="lastDateByNumber"
            />
            <v-radio
              :label="searchByLastDateBySpecialNumberLabel"
              value="lastDateBySpecialNumber"
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
  name: 'GordoStatsForm',
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
      searchByLabel: this.$t('VIEWS.GORDO.STATS.STATS_FORM.FILTERS.SEARCH_BY.LABEL'),
      searchByOccurrencesByNumberLabel: this.$t('VIEWS.GORDO.STATS.STATS_FORM.FILTERS.SEARCH_BY.OPTIONS.OCCURRENCES_BY_NUMBER.LABEL'),
      searchByOccurrencesByResultLabel: this.$t('VIEWS.GORDO.STATS.STATS_FORM.FILTERS.SEARCH_BY.OPTIONS.OCCURRENCES_BY_RESULT.LABEL'),
      searchByOccurrencesByResultWithSpecialNumberLabel: this.$t('VIEWS.GORDO.STATS.STATS_FORM.FILTERS.SEARCH_BY.OPTIONS.OCCURRENCES_BY_RESULT_WITH_SPECIAL_NUMBER.LABEL'),
      searchByOccurrencesBySpecialNumberLabel: this.$t('VIEWS.GORDO.STATS.STATS_FORM.FILTERS.SEARCH_BY.OPTIONS.OCCURRENCES_BY_SPECIAL_NUMBER.LABEL'),
      searchByLastDateByNumberLabel: this.$t('VIEWS.GORDO.STATS.STATS_FORM.FILTERS.SEARCH_BY.OPTIONS.LAST_DATE_BY_NUMBER.LABEL'),
      searchByLastDateBySpecialNumberLabel: this.$t('VIEWS.GORDO.STATS.STATS_FORM.FILTERS.SEARCH_BY.OPTIONS.LAST_DATE_BY_SPECIAL_NUMBER.LABEL'),
      searchText: this.$t('COMMON.BUTTON.SEARCH.TEXT'),
    };
  },
  computed: {
    searchBy: {
      get() {
        return this.$store.state.gordo.statsFilters.searchBy;
      },
      set(value) {
        const filters = this.$store.state.gordo.statsFilters;
        this.$store.commit('gordo/setStatsFilters', {
          ...filters,
          searchBy: value,
        });
      },
    },
    ...mapState('gordo', {
      loading: (state) => state.loading,
    }),
  },
  methods: {
    async submitForm() {
      this.resetShow();
      await this.$nextTick();
      this.$store.dispatch('gordo/destroyStats');

      this.$refs.form.validate();

      if (this.valid) {
        // eslint-disable-next-line vue/no-mutating-props
        this.show[this.searchBy] = true;
      }
    },
    resetShow() {
      Object.keys(this.show).forEach((item) => {
        // eslint-disable-next-line vue/no-mutating-props
        this.show[item] = false;
      });
    },
  },
};
</script>
