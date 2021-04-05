<template>
  <div>
    <v-data-table
      :headers="headers"
      :items="lastDateByNumberStats.data"
      :options.sync="options"
      :server-items-length="lastDateByNumberStats.total"
      :loading="loading"
      class="elevation-1"
    >
      <template v-slot:progress>
        <v-progress-linear
          indeterminate
          absolute
          color="red darken-2"
        />
      </template>
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
        v-slot:[`item.date`]="{ item }"
      >
        {{ getFormattedDate(item.fecha) }}
      </template>
    </v-data-table>
  </div>
</template>

<script>
import { mapState } from 'vuex';

import getFormattedNumber from '@/mixins/getFormattedNumber';
import getFormattedDate from '@/mixins/getFormattedDate';

export default {
  name: 'EuromillonesLastDateByNumberStatsTable',
  mixins: [
    getFormattedNumber,
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
          text: this.$t('VIEWS.EUROMILLONES.STATS.LAST_DATE_BY_NUMBER.TABLE.NUMBER.LABEL'),
          align: 'center',
          sortable: true,
          value: 'number',
        },
        {
          text: this.$t('VIEWS.EUROMILLONES.STATS.LAST_DATE_BY_NUMBER.TABLE.DATE.LABEL'),
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
      lastDateByNumberStats: (state) => state.stats.lastDateByNumber,
    }),
  },
  watch: {
    options: {
      handler() {
        this.getLastDateByNumberStats();
      },
      deep: true,
    },
  },
  destroyed() {
    this.$store.dispatch('euromillones/destroyStats');
  },
  methods: {
    getLastDateByNumberStats() {
      const {
        sortBy, sortDesc, page, itemsPerPage,
      } = this.options;

      this.$store.commit('euromillones/setStatsPagination', {
        page,
        per_page: itemsPerPage,
        sort_type: sortDesc[0] ? 'desc' : 'asc',
        sort_property: sortBy[0],
      });

      this.$store.dispatch('euromillones/getLastDateByNumberStats');
    },
  },
};
</script>

<style lang="scss" scoped>
</style>
