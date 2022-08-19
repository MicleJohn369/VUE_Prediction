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
          >
            <v-radio
              :label="searchByOccurrencesLabel"
              value="occurrences"
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
export default {
  name: 'StandardStatsForm',
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
      searchByLabel: this.$t('VIEWS.QUINIELA.STATS.STANDARD_STATS_FORM.FILTERS.SEARCH_BY.LABEL'),
      searchByOccurrencesLabel: this.$t('VIEWS.QUINIELA.STATS.STANDARD_STATS_FORM.FILTERS.SEARCH_BY.OPTIONS.OCCURRENCES.LABEL'),
      searchText: this.$t('COMMON.BUTTON.SEARCH.TEXT'),
    };
  },
  computed: {
    searchBy: {
      get() {
        return this.$store.state.quiniela.standardStatsFilters.searchBy;
      },
      set(value) {
        const filters = this.$store.state.quiniela.standardStatsFilters;
        this.$store.commit('quiniela/setStandardStatsFilters', {
          ...filters,
          searchBy: value,
        });
      },
    },
  },
  methods: {
    async submitForm() {
      this.resetShow();
      this.$store.dispatch('quiniela/destroyStandardStats');

      this.$refs.form.validate();

      if (this.valid) {
        this.show.standardStats = true;
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
