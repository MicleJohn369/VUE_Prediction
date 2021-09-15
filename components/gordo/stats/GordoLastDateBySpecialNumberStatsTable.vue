<template>
  <div>
    <v-data-table
      :headers="headers"
      :items="lastDateBySpecialNumberStats.data"
      :options.sync="options"
      :server-items-length="lastDateBySpecialNumberStats.total"
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
        #[`item.specialNumber`]="{ item }"
      >
        <v-chip
          color="primary"
        >
          {{ item.numeroClave }}
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
  name: 'GordoLastDateBySpecialNumberStatsTable',
  mixins: [
    getFormattedDate,
  ],
  data() {
    return {
      options: {
        mustSort: true,
        sortBy: ['date'],
        sortDesc: [false],
        itemsPerPage: this.$store.state.gordo.statsPagination.per_page,
      },
      headers: [
        {
          text: this.$t('VIEWS.GORDO.STATS.LAST_DATE_BY_SPECIAL_NUMBER.TABLE.SPECIAL_NUMBER.LABEL'),
          align: 'center',
          sortable: true,
          value: 'specialNumber',
        },
        {
          text: this.$t('VIEWS.GORDO.STATS.LAST_DATE_BY_SPECIAL_NUMBER.TABLE.DATE.LABEL'),
          align: 'center',
          sortable: true,
          value: 'date',
        },
      ],
    };
  },
  computed: {
    ...mapState('gordo', {
      loading: 'loading',
      pagination: 'statsPagination',
    }),
    ...mapGetters('gordo', {
      lastDateBySpecialNumberStats: 'getLastDateBySpecialNumberStats',
    }),
  },
  watch: {
    options: {
      handler() {
        this.getLastDateBySpecialNumberStats();
      },
      deep: true,
    },
  },
  destroyed() {
    this.$store.dispatch('gordo/destroyStats');
  },
  methods: {
    getLastDateBySpecialNumberStats() {
      const {
        sortBy, sortDesc, page, itemsPerPage,
      } = this.options;

      this.$store.commit('gordo/setStatsPagination', {
        page,
        per_page: itemsPerPage,
        sort_type: sortDesc[0] ? 'desc' : 'asc',
        sort_property: sortBy[0],
      });

      this.$store.dispatch('gordo/getLastDateBySpecialNumberStats');
    },
  },
};
</script>

<style lang="scss" scoped>
</style>
