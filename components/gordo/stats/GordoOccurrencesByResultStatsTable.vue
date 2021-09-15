<template>
  <div>
    <v-data-table
      :headers="headers"
      :items="occurrencesByResultStats.data"
      :options.sync="options"
      :server-items-length="occurrencesByResultStats.total"
      :loading="loading"
      class="elevation-1"
    >
      <template #progress>
        <v-progress-linear
          indeterminate
          absolute
          color="red darken-2"
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
  name: 'GordoOccurrencesByResultStatsTable',
  mixins: [
    getFormattedNumber,
  ],
  data() {
    return {
      options: {
        mustSort: true,
        sortBy: ['occurrences'],
        sortDesc: [true],
        itemsPerPage: this.$store.state.gordo.statsPagination.per_page,
      },
      headers: [
        {
          text: this.$t('VIEWS.GORDO.STATS.OCCURRENCES_BY_RESULT.TABLE.RESULT.LABEL'),
          align: 'center',
          sortable: true,
          value: 'result',
        },
        {
          text: this.$t('VIEWS.GORDO.STATS.OCCURRENCES_BY_RESULT.TABLE.OCCURRENCES.LABEL'),
          align: 'center',
          sortable: true,
          value: 'occurrences',
        },
      ],
    };
  },
  computed: {
    ...mapState('gordo', {
      loading: 'loading',
      pagination: 'statsPagination',
      occurrencesByResultStats: (state) => state.stats.occurrencesByResult,
    }),
  },
  watch: {
    options: {
      handler() {
        this.getOccurrencesByResultStats();
      },
      deep: true,
    },
  },
  destroyed() {
    this.$store.dispatch('gordo/destroyStats');
  },
  methods: {
    getOccurrencesByResultStats() {
      const {
        sortBy, sortDesc, page, itemsPerPage,
      } = this.options;

      this.$store.commit('gordo/setStatsPagination', {
        page,
        per_page: itemsPerPage,
        sort_type: sortDesc[0] ? 'desc' : 'asc',
        sort_property: sortBy[0],
      });

      this.$store.dispatch('gordo/getOccurrencesByResultStats');
    },
  },
};
</script>

<style lang="scss" scoped>
</style>
