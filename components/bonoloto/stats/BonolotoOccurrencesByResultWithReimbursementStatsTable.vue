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
      <template #progress>
        <v-progress-linear
          indeterminate
          absolute
          color="black"
        />
      </template>
      <template
        #[`item.result`]="{ item }"
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
        #[`item.occurrences`]="{ item }"
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
  name: 'BonolotoOccurrencesByResultWithReimbursementStatsTable',
  mixins: [
    getFormattedNumber,
  ],
  data() {
    return {
      options: {
        mustSort: true,
        sortBy: ['occurrences'],
        sortDesc: [true],
        itemsPerPage: this.$store.state.bonoloto.statsPagination.per_page,
      },
      headers: [
        {
          text: this.$t('VIEWS.BONOLOTO.STATS.OCCURRENCES_BY_RESULT_WITH_REIMBURSEMENT.TABLE.RESULT.LABEL'),
          align: 'center',
          sortable: true,
          value: 'result',
        },
        {
          text: this.$t('VIEWS.BONOLOTO.STATS.OCCURRENCES_BY_RESULT_WITH_REIMBURSEMENT.TABLE.OCCURRENCES.LABEL'),
          align: 'center',
          sortable: true,
          value: 'occurrences',
        },
      ],
    };
  },
  computed: {
    ...mapState('bonoloto', {
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
    this.$store.dispatch('bonoloto/destroyStats');
  },
  methods: {
    getOccurrencesByResultWithReimbursementStats() {
      const {
        sortBy, sortDesc, page, itemsPerPage,
      } = this.options;

      this.$store.commit('bonoloto/setStatsPagination', {
        page,
        per_page: itemsPerPage,
        sort_type: sortDesc[0] ? 'desc' : 'asc',
        sort_property: sortBy[0],
      });

      this.$store.dispatch('bonoloto/getOccurrencesByResultWithReimbursementStats');
    },
  },
};
</script>

<style lang="scss" scoped>
</style>
