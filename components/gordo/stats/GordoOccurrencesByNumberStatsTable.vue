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
  name: 'GordoOccurrencesByNumberStatsTable',
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
          text: this.$t('VIEWS.GORDO.STATS.OCCURRENCES_BY_NUMBER.TABLE.NUMBER.LABEL'),
          align: 'center',
          sortable: true,
          value: 'number',
        },
        {
          text: this.$t('VIEWS.GORDO.STATS.OCCURRENCES_BY_NUMBER.TABLE.OCCURRENCES.LABEL'),
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
    this.$store.dispatch('gordo/destroyStats');
  },
  methods: {
    getOccurrencesByNumberStats() {
      const {
        sortBy, sortDesc, page, itemsPerPage,
      } = this.options;

      this.$store.commit('gordo/setStatsPagination', {
        page,
        per_page: itemsPerPage,
        sort_type: sortDesc[0] ? 'desc' : 'asc',
        sort_property: sortBy[0],
      });

      this.$store.dispatch('gordo/getOccurrencesByNumberStats');
    },
  },
};
</script>

<style lang="scss" scoped>
</style>
