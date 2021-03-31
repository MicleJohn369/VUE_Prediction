<template>
  <div>
    <v-data-table
      :headers="headers"
      :items="occurrencesByNumberStats.data"
      :options.sync="options"
      :server-items-length="occurrencesByNumberStats.total"
      :loading="loading"
      class="elevation-1"
    >
      <template
        v-slot:[`item.number`]="{ item }"
      >
        <v-chip
          color="primary"
        >
          {{ getFormattedNumber(item.numero) }}
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
  name: 'BonolotoStatsTable',
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
          text: this.$t('VIEWS.BONOLOTO.STATS.OCCURRENCES_BY_NUMBER_STATS.TABLE.NUMBER.LABEL'),
          align: 'center',
          sortable: true,
          value: 'number',
        },
        {
          text: this.$t('VIEWS.BONOLOTO.STATS.OCCURRENCES_BY_NUMBER_STATS.TABLE.OCCURRENCES.LABEL'),
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
      occurrencesByNumberStats: (state) => state.stats.occurrencesByNumber,
    }),
  },
  watch: {
    options: {
      handler() {
        this.getOccurrencesByNumberStats();
      },
      deep: true,
    },
  },
  destroyed() {
    this.$store.dispatch('bonoloto/destroyStats');
  },
  methods: {
    getOccurrencesByNumberStats() {
      const {
        sortBy, sortDesc, page, itemsPerPage,
      } = this.options;

      this.$store.commit('bonoloto/setStatsPagination', {
        page,
        per_page: itemsPerPage,
        sort_type: sortDesc[0] ? 'desc' : 'asc',
        sort_property: sortBy[0],
      });

      this.$store.dispatch('bonoloto/getOccurrencesByNumberStats');
    },
  },
};
</script>

<style lang="scss" scoped>
</style>
