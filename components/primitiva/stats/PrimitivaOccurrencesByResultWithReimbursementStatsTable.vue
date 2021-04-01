<template>
  <div>
    <v-data-table
      :headers="headers"
      :items="stats.data"
      :options.sync="options"
      :server-items-length="stats.total"
      :loading="loading"
      class="elevation-1"
    >
      <template v-slot:progress>
        <v-progress-linear
          indeterminate
          absolute
          color="green darken-2"
        />
      </template>
      <template
        v-slot:[`item.result`]="{ item }"
      >
        <v-chip
          v-for="number in item.resultado"
          :key="number.numero"
          color="primary"
        >
          {{ getFormattedNumber(number.numero) }}
        </v-chip>
        <v-chip
          color="primary"
        >
          R {{ item.reintegro ? item.reintegro : '-' }}
        </v-chip>
      </template>
      <template
        v-slot:[`item.occurrences`]="{ item }"
      >
        {{ item.apariciones }}
      </template>
    </v-data-table>
  </div>
</template>

<script>
import { mapState } from 'vuex';

import getFormattedNumber from '@/mixins/getFormattedNumber';

export default {
  name: 'PrimitivaOccurrencesByResultWithReimbursementStatsTable',
  mixins: [
    getFormattedNumber,
  ],
  data() {
    return {
      options: {
        mustSort: true,
        sortBy: ['occurrences'],
        sortDesc: [true],
        itemsPerPage: this.$store.state.primitiva.statsPagination.per_page,
      },
      headers: [
        {
          text: this.$t('VIEWS.PRIMITIVA.STATS.OCCURRENCES_BY_RESULT_WITH_REIMBURSEMENT.TABLE.RESULT.LABEL'),
          align: 'center',
          sortable: true,
          value: 'result',
        },
        {
          text: this.$t('VIEWS.PRIMITIVA.STATS.OCCURRENCES_BY_RESULT_WITH_REIMBURSEMENT.TABLE.OCCURRENCES.LABEL'),
          align: 'center',
          sortable: true,
          value: 'occurrences',
        },
      ],
    };
  },
  computed: {
    ...mapState('primitiva', {
      loading: 'loading',
      pagination: 'statsPagination',
      stats: (state) => state.stats.occurrencesByResultWithReimbursement,
    }),
  },
  watch: {
    options: {
      handler() {
        this.getOccurrencesByResultWithReimbursementStats();
      },
      deep: true,
    },
  },
  destroyed() {
    this.$store.dispatch('primitiva/destroyStats');
  },
  methods: {
    getOccurrencesByResultWithReimbursementStats() {
      const {
        sortBy, sortDesc, page, itemsPerPage,
      } = this.options;

      this.$store.commit('primitiva/setStatsPagination', {
        page,
        per_page: itemsPerPage,
        sort_type: sortDesc[0] ? 'desc' : 'asc',
        sort_property: sortBy[0],
      });

      this.$store.dispatch('primitiva/getOccurrencesByResultWithReimbursementStats');
    },
  },
};
</script>

<style lang="scss" scoped>
</style>
