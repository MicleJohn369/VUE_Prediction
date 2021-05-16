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
      <template v-slot:progress>
        <v-progress-linear
          indeterminate
          absolute
          color="purple darken-2"
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
  name: 'EuromillonesOccurrencesByResultStatsTable',
  mixins: [
    getFormattedNumber,
  ],
  data() {
    return {
      options: {
        mustSort: true,
        sortBy: ['occurrences'],
        sortDesc: [true],
        itemsPerPage: this.$store.state.euromillones.statsPagination.per_page,
      },
      headers: [
        {
          text: this.$t('VIEWS.EUROMILLONES.STATS.OCCURRENCES_BY_RESULT.TABLE.RESULT.LABEL'),
          align: 'center',
          sortable: true,
          value: 'result',
        },
        {
          text: this.$t('VIEWS.EUROMILLONES.STATS.OCCURRENCES_BY_RESULT.TABLE.OCCURRENCES.LABEL'),
          align: 'center',
          sortable: true,
          value: 'occurrences',
        },
      ],
    };
  },
  computed: {
    ...mapState('euromillones', {
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
    this.$store.dispatch('euromillones/destroyStats');
  },
  methods: {
    getOccurrencesByResultStats() {
      const {
        sortBy, sortDesc, page, itemsPerPage,
      } = this.options;

      this.$store.commit('euromillones/setStatsPagination', {
        page,
        per_page: itemsPerPage,
        sort_type: sortDesc[0] ? 'desc' : 'asc',
        sort_property: sortBy[0],
      });

      this.$store.dispatch('euromillones/getOccurrencesByResultStats');
    },
  },
};
</script>

<style lang="scss" scoped>
</style>
