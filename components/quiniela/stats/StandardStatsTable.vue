<template>
  <div>
    <v-data-table
      :headers="headers"
      :items="standardStats.data"
      :options.sync="options"
      :server-items-length="standardStats.total"
      :loading="loading"
      class="elevation-1"
    >
      <template
        #[`item.result`]="{ item }"
      >
        <v-chip
          v-for="(result, index) in item.results"
          :key="index"
          :color="'primary'"
        >
          {{ index === 14 ? `R ${result}` : result }}
        </v-chip>
        <v-chip
          v-if="item.results.length === 14"
        >
          R -
        </v-chip>
      </template>
    </v-data-table>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'StandardStatsTable',
  mixins: [],
  data() {
    return {
      options: {
        mustSort: true,
        sortBy: ['occurrences'],
        sortDesc: [true],
      },
      headers: [
        {
          text: this.$t('VIEWS.QUINIELA.STATS.STANDARD_STATS.TABLE.RESULT.LABEL'),
          align: 'center',
          sortable: true,
          value: 'result',
        },
        {
          text: this.$t('VIEWS.QUINIELA.STATS.STANDARD_STATS.TABLE.OCCURRENCES.LABEL'),
          align: 'center',
          sortable: true,
          value: 'occurrences',
        },
      ],
    };
  },
  computed: {
    ...mapState('quiniela', {
      loading: 'loading',
      pagination: 'standardStatsPagination',
      standardStats: (state) => state.standardStats,
    }),
  },
  watch: {
    options: {
      handler() {
        this.getStandardStats();
      },
      deep: true,
    },
  },
  destroyed() {
    this.$store.dispatch('quiniela/destroyStandardStats');
  },
  methods: {
    getStandardStats() {
      const {
        sortBy, sortDesc, page, itemsPerPage,
      } = this.options;

      this.$store.commit('quiniela/setStandardStatsPagination', {
        page,
        per_page: itemsPerPage,
        sort_type: sortDesc[0] ? 'desc' : 'asc',
        sort_property: sortBy[0],
      });

      this.$store.dispatch('quiniela/getStandardStats');
    },
  },
};
</script>

<style lang="scss" scoped>
</style>
