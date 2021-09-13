<template>
  <div>
    <v-data-table
      :headers="headers"
      :items="occurrencesBySpecialNumberStats.data"
      :options.sync="options"
      :server-items-length="occurrencesBySpecialNumberStats.total"
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
        v-slot:[`item.specialNumber`]="{ item }"
      >
        <v-chip
          color="primary"
        >
          {{ item.numeroClave !== null ? item.numeroClave : '-' }}
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
  name: 'GordoOccurrencesBySpecialNumberStatsTable',
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
          text: this.$t('VIEWS.GORDO.STATS.OCCURRENCES_BY_SPECIAL_NUMBER.TABLE.SPECIAL_NUMBER.LABEL'),
          align: 'center',
          sortable: true,
          value: 'specialNumber',
        },
        {
          text: this.$t('VIEWS.GORDO.STATS.OCCURRENCES_BY_SPECIAL_NUMBER.TABLE.OCCURRENCES.LABEL'),
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
      occurrencesBySpecialNumberStats: (state) => state.stats.occurrencesBySpecialNumber,
    }),
  },
  watch: {
    options: {
      handler() {
        this.getOccurrencesBySpecialNumberStats();
      },
      deep: true,
    },
  },
  destroyed() {
    this.$store.dispatch('gordo/destroyStats');
  },
  methods: {
    getOccurrencesBySpecialNumberStats() {
      const {
        sortBy, sortDesc, page, itemsPerPage,
      } = this.options;

      this.$store.commit('gordo/setStatsPagination', {
        page,
        per_page: itemsPerPage,
        sort_type: sortDesc[0] ? 'desc' : 'asc',
        sort_property: sortBy[0],
      });

      this.$store.dispatch('gordo/getOccurrencesBySpecialNumberStats');
    },
  },
};
</script>

<style lang="scss" scoped>
</style>
