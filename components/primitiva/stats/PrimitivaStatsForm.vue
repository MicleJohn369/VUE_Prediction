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
              :label="searchByOccurrencesByResultWithReimbursementLabel"
              value="occurrencesByResultWithReimbursement"
            />
            <v-radio
              :label="searchByOccurrencesByReimbursementLabel"
              value="occurrencesByReimbursement"
            />
            <v-radio
              :label="searchByLastDateByNumberLabel"
              value="lastDateByNumber"
            />
            <v-radio
              :label="searchByLastDateByReimbursementLabel"
              value="lastDateByReimbursement"
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
  name: 'PrimitivaStatsForm',
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
      searchByLabel: this.$t('VIEWS.PRIMITIVA.STATS.STATS_FORM.FILTERS.SEARCH_BY.LABEL'),
      searchByOccurrencesByNumberLabel: this.$t('VIEWS.PRIMITIVA.STATS.STATS_FORM.FILTERS.SEARCH_BY.OPTIONS.OCCURRENCES_BY_NUMBER.LABEL'),
      searchByOccurrencesByResultLabel: this.$t('VIEWS.PRIMITIVA.STATS.STATS_FORM.FILTERS.SEARCH_BY.OPTIONS.OCCURRENCES_BY_RESULT.LABEL'),
      searchByOccurrencesByResultWithReimbursementLabel: this.$t('VIEWS.PRIMITIVA.STATS.STATS_FORM.FILTERS.SEARCH_BY.OPTIONS.OCCURRENCES_BY_RESULT_WITH_REIMBURSEMENT.LABEL'),
      searchByOccurrencesByReimbursementLabel: this.$t('VIEWS.PRIMITIVA.STATS.STATS_FORM.FILTERS.SEARCH_BY.OPTIONS.OCCURRENCES_BY_REIMBURSEMENT.LABEL'),
      searchByLastDateByNumberLabel: this.$t('VIEWS.PRIMITIVA.STATS.STATS_FORM.FILTERS.SEARCH_BY.OPTIONS.LAST_DATE_BY_NUMBER.LABEL'),
      searchByLastDateByReimbursementLabel: this.$t('VIEWS.PRIMITIVA.STATS.STATS_FORM.FILTERS.SEARCH_BY.OPTIONS.LAST_DATE_BY_REIMBURSEMENT.LABEL'),
      searchText: this.$t('COMMON.BUTTON.SEARCH.TEXT'),
    };
  },
  computed: {
    searchBy: {
      get() {
        return this.$store.state.primitiva.statsFilters.searchBy;
      },
      set(value) {
        const filters = this.$store.state.primitiva.statsFilters;
        this.$store.commit('primitiva/setStatsFilters', {
          ...filters,
          searchBy: value,
        });
      },
    },
    ...mapState('primitiva', {
      loading: (state) => state.loading,
    }),
  },
  methods: {
    async submitForm() {
      this.resetShow();
      await this.$nextTick();
      this.$store.dispatch('primitiva/destroyStats');

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
