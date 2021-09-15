<template>
  <div>
    <v-data-table
      :headers="headers"
      :items="lastDateByReimbursementStats.data"
      :options.sync="options"
      :server-items-length="lastDateByReimbursementStats.total"
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
        #[`item.reimbursement`]="{ item }"
      >
        <v-chip
          color="primary"
        >
          {{ item.reintegro }}
        </v-chip>
      </template>
      <template
        #[`item.date`]="{ item }"
      >
        {{ getFormattedDate(item.fecha) }}
      </template>
    </v-data-table>
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex';

import getFormattedDate from '@/mixins/getFormattedDate';

export default {
  name: 'BonolotoLastDateByReimbursementStatsTable',
  mixins: [
    getFormattedDate,
  ],
  data() {
    return {
      options: {
        mustSort: true,
        sortBy: ['date'],
        sortDesc: [false],
        itemsPerPage: this.$store.state.bonoloto.statsPagination.per_page,
      },
      headers: [
        {
          text: this.$t('VIEWS.BONOLOTO.STATS.LAST_DATE_BY_REIMBURSEMENT.TABLE.REIMBURSEMENT.LABEL'),
          align: 'center',
          sortable: true,
          value: 'reimbursement',
        },
        {
          text: this.$t('VIEWS.BONOLOTO.STATS.LAST_DATE_BY_REIMBURSEMENT.TABLE.DATE.LABEL'),
          align: 'center',
          sortable: true,
          value: 'date',
        },
      ],
    };
  },
  computed: {
    ...mapState('bonoloto', {
      loading: 'loading',
      pagination: 'statsPagination',
    }),
    ...mapGetters('bonoloto', {
      lastDateByReimbursementStats: 'getLastDateByReimbursementStats',
    }),
  },
  watch: {
    options: {
      handler() {
        this.getLastDateByReimbursementStats();
      },
      deep: true,
    },
  },
  destroyed() {
    this.$store.dispatch('bonoloto/destroyStats');
  },
  methods: {
    getLastDateByReimbursementStats() {
      const {
        sortBy, sortDesc, page, itemsPerPage,
      } = this.options;

      this.$store.commit('bonoloto/setStatsPagination', {
        page,
        per_page: itemsPerPage,
        sort_type: sortDesc[0] ? 'desc' : 'asc',
        sort_property: sortBy[0],
      });

      this.$store.dispatch('bonoloto/getLastDateByReimbursementStats');
    },
  },
};
</script>

<style lang="scss" scoped>
</style>
