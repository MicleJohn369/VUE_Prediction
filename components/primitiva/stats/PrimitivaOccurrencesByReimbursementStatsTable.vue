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
      <template #progress>
        <v-progress-linear
          indeterminate
          absolute
          color="green darken-2"
        />
      </template>
      <template
        #[`item.reimbursement`]="{ item }"
      >
        <v-chip
          color="primary"
        >
          {{ item.reintegro !== null ? item.reintegro : '-' }}
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
  name: 'PrimitivaOccurrencesByReimbursementStatsTable',
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
          text: this.$t('VIEWS.PRIMITIVA.STATS.OCCURRENCES_BY_REIMBURSEMENT.TABLE.REIMBURSEMENT.LABEL'),
          align: 'center',
          sortable: true,
          value: 'reimbursement',
        },
        {
          text: this.$t('VIEWS.PRIMITIVA.STATS.OCCURRENCES_BY_REIMBURSEMENT.TABLE.OCCURRENCES.LABEL'),
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
    this.$store.dispatch('primitiva/destroyStats');
  },
  methods: {
    getOccurrencesByReimbursementStats() {
      const {
        sortBy, sortDesc, page, itemsPerPage,
      } = this.options;

      this.$store.commit('primitiva/setStatsPagination', {
        page,
        per_page: itemsPerPage,
        sort_type: sortDesc[0] ? 'desc' : 'asc',
        sort_property: sortBy[0],
      });

      this.$store.dispatch('primitiva/getOccurrencesByReimbursementStats');
    },
  },
};
</script>

<style lang="scss" scoped>
</style>
