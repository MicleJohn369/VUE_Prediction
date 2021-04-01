<template>
  <div>
    <v-data-table
      :headers="headers"
      :items="occurrencesByReimbursementStats.data"
      :options.sync="options"
      :server-items-length="occurrencesByReimbursementStats.total"
      :loading="loading"
      class="elevation-1"
    >
      <template v-slot:progress>
        <v-progress-linear
          indeterminate
          absolute
          color="black"
        />
      </template>
      <template
        v-slot:[`item.reimbursement`]="{ item }"
      >
        <v-chip
          color="primary"
        >
          {{ item.reintegro !== null ? item.reintegro : '-' }}
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
  name: 'BonolotooccurrencesByReimbursementStatsTable',
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
          text: this.$t('VIEWS.BONOLOTO.STATS.OCCURRENCES_BY_REIMBURSEMENT.TABLE.REIMBURSEMENT.LABEL'),
          align: 'center',
          sortable: true,
          value: 'reimbursement',
        },
        {
          text: this.$t('VIEWS.BONOLOTO.STATS.OCCURRENCES_BY_REIMBURSEMENT.TABLE.OCCURRENCES.LABEL'),
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
      occurrencesByReimbursementStats: (state) => state.stats.occurrencesByReimbursement,
    }),
  },
  watch: {
    options: {
      handler() {
        this.getOccurrencesByReimbursementStats();
      },
      deep: true,
    },
  },
  destroyed() {
    this.$store.dispatch('bonoloto/destroyStats');
  },
  methods: {
    getOccurrencesByReimbursementStats() {
      const {
        sortBy, sortDesc, page, itemsPerPage,
      } = this.options;

      this.$store.commit('bonoloto/setStatsPagination', {
        page,
        per_page: itemsPerPage,
        sort_type: sortDesc[0] ? 'desc' : 'asc',
        sort_property: sortBy[0],
      });

      this.$store.dispatch('bonoloto/getOccurrencesByReimbursementStats');
    },
  },
};
</script>

<style lang="scss" scoped>
</style>
