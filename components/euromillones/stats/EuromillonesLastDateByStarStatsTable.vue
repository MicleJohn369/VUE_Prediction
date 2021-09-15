<template>
  <div>
    <v-data-table
      :headers="headers"
      :items="lastDateByStarStats.data"
      :options.sync="options"
      :server-items-length="lastDateByStarStats.total"
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
  name: 'EuromillonesLastDateByStarStatsTable',
  mixins: [
    getFormattedDate,
  ],
  data() {
    return {
      options: {
        mustSort: true,
        sortBy: ['date'],
        sortDesc: [false],
        itemsPerPage: this.$store.state.euromillones.statsPagination.per_page,
      },
      headers: [
        {
          text: this.$t('VIEWS.EUROMILLONES.STATS.LAST_DATE_BY_STAR.TABLE.STAR.LABEL'),
          align: 'center',
          sortable: true,
          value: 'star',
        },
        {
          text: this.$t('VIEWS.EUROMILLONES.STATS.LAST_DATE_BY_STAR.TABLE.DATE.LABEL'),
          align: 'center',
          sortable: true,
          value: 'date',
        },
      ],
    };
  },
  computed: {
    ...mapState('euromillones', {
      loading: 'loading',
      pagination: 'statsPagination',
    }),
    ...mapGetters('euromillones', {
      lastDateByStarStats: 'getLastDateByStarStats',
    }),
  },
  watch: {
    options: {
      handler() {
        this.getLastDateByStarStats();
      },
      deep: true,
    },
  },
  destroyed() {
    this.$store.dispatch('euromillones/destroyStats');
  },
  methods: {
    getLastDateByStarStats() {
      const {
        sortBy, sortDesc, page, itemsPerPage,
      } = this.options;

      this.$store.commit('euromillones/setStatsPagination', {
        page,
        per_page: itemsPerPage,
        sort_type: sortDesc[0] ? 'desc' : 'asc',
        sort_property: sortBy[0],
      });

      this.$store.dispatch('euromillones/getLastDateByStarStats');
    },
  },
};
</script>

<style lang="scss" scoped>
</style>
