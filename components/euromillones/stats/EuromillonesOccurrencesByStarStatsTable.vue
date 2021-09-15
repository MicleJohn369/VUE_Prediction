<template>
  <div>
    <v-data-table
      :headers="headers"
      :items="occurrencesByStarStats.data"
      :options.sync="options"
      :server-items-length="occurrencesByStarStats.total"
      :loading="loading"
      class="elevation-1"
    >
      <template #progress>
        <v-progress-linear
          indeterminate
          absolute
          color="purple darken-2"
        />
      </template>
      <template
        #[`item.star`]="{ item }"
      >
        <v-chip
          color="orange"
          text-color="white"
        >
          {{ item.estrella !== null ? item.estrella : '-' }}
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
  name: 'EuromillonesOccurrencesByStarStatsTable',
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
          text: this.$t('VIEWS.EUROMILLONES.STATS.OCCURRENCES_BY_STAR.TABLE.STAR.LABEL'),
          align: 'center',
          sortable: true,
          value: 'star',
        },
        {
          text: this.$t('VIEWS.EUROMILLONES.STATS.OCCURRENCES_BY_STAR.TABLE.OCCURRENCES.LABEL'),
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
      occurrencesByStarStats: (state) => state.stats.occurrencesByStar,
    }),
  },
  watch: {
    options: {
      handler() {
        this.getOccurrencesByStarStats();
      },
      deep: true,
    },
  },
  destroyed() {
    this.$store.dispatch('euromillones/destroyStats');
  },
  methods: {
    getOccurrencesByStarStats() {
      const {
        sortBy, sortDesc, page, itemsPerPage,
      } = this.options;

      this.$store.commit('euromillones/setStatsPagination', {
        page,
        per_page: itemsPerPage,
        sort_type: sortDesc[0] ? 'desc' : 'asc',
        sort_property: sortBy[0],
      });

      this.$store.dispatch('euromillones/getOccurrencesByStarStats');
    },
  },
};
</script>

<style lang="scss" scoped>
</style>
