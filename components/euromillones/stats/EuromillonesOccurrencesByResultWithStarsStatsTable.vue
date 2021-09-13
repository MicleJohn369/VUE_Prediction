<template>
  <div>
    <v-data-table
      :headers="headers"
      :items="stats.data"
      :options.sync="options"
      :server-items-length="stats.total"
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
        <v-chip
          v-for="estrella in item.estrellas"
          :key="estrella.numero"
          color="orange"
          text-color="white"
        >
          {{ estrella.numero }}
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
  name: 'EuromillonesOccurrencesByResultWithStarsStatsTable',
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
          text: this.$t('VIEWS.EUROMILLONES.STATS.OCCURRENCES_BY_RESULT_WITH_STARS.TABLE.RESULT.LABEL'),
          align: 'center',
          sortable: true,
          value: 'result',
        },
        {
          text: this.$t('VIEWS.EUROMILLONES.STATS.OCCURRENCES_BY_RESULT_WITH_STARS.TABLE.OCCURRENCES.LABEL'),
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
      stats: (state) => state.stats.occurrencesByResultWithStars,
    }),
  },
  watch: {
    options: {
      handler() {
        this.getOccurrencesByResultWithStarsStats();
      },
      deep: true,
    },
  },
  destroyed() {
    this.$store.dispatch('euromillones/destroyStats');
  },
  methods: {
    getOccurrencesByResultWithStarsStats() {
      const {
        sortBy, sortDesc, page, itemsPerPage,
      } = this.options;

      this.$store.commit('euromillones/setStatsPagination', {
        page,
        per_page: itemsPerPage,
        sort_type: sortDesc[0] ? 'desc' : 'asc',
        sort_property: sortBy[0],
      });

      this.$store.dispatch('euromillones/getOccurrencesByResultWithStarsStats');
    },
  },
};
</script>

<style lang="scss" scoped>
</style>
