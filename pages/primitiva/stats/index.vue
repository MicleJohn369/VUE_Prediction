<template>
  <v-row justify="center" align="center">
    <v-col cols="12">
      <v-breadcrumbs :items="items">
        <template v-slot:item="{ item }">
          <v-breadcrumbs-item
            :to="item.to"
            :disabled="item.disabled"
            nuxt
          >
            {{ item.text.toUpperCase() }}
          </v-breadcrumbs-item>
        </template>
      </v-breadcrumbs>
      <div class="text-h2 my-3 pb-4 green--text text--darken-2">
        {{ titleText }}
      </div>
      <ScrollButton />
      <v-card
        elevation="2"
      >
        <v-card-text
          v-text="statsIntroText"
        />
      </v-card>
      <v-card
        class="mt-3"
        flat
      >
        <PrimitivaStatsForm :show="show" />
        <PrimitivaOccurrencesByNumberStatsTable
          v-if="show.occurrencesByNumber"
        />
        <PrimitivaOccurrencesByResultStatsTable
          v-if="show.occurrencesByResult"
        />
        <PrimitivaOccurrencesByResultWithReimbursementStatsTable
          v-if="show.occurrencesByResultWithReimbursement"
        />
        <PrimitivaOccurrencesByReimbursementStatsTable
          v-if="show.occurrencesByReimbursement"
        />
        <PrimitivaLastDateByNumberStatsTable
          v-if="show.lastDateByNumber"
        />
        <PrimitivaLastDateByReimbursementStatsTable
          v-if="show.lastDateByReimbursement"
        />
      </v-card>
    </v-col>
  </v-row>
</template>

<script>

import utils from '@/utils';

import ScrollButton from '@/components/ScrollButton.vue';

import PrimitivaStatsForm from '@/components/primitiva/stats/PrimitivaStatsForm.vue';
import PrimitivaOccurrencesByNumberStatsTable from '@/components/primitiva/stats/PrimitivaOccurrencesByNumberStatsTable.vue';
import PrimitivaOccurrencesByResultStatsTable from '@/components/primitiva/stats/PrimitivaOccurrencesByResultStatsTable.vue';
import PrimitivaOccurrencesByResultWithReimbursementStatsTable from '@/components/primitiva/stats/PrimitivaOccurrencesByResultWithReimbursementStatsTable.vue';
import PrimitivaOccurrencesByReimbursementStatsTable from '@/components/primitiva/stats/PrimitivaOccurrencesByReimbursementStatsTable.vue';
import PrimitivaLastDateByNumberStatsTable from '@/components/primitiva/stats/PrimitivaLastDateByNumberStatsTable.vue';
import PrimitivaLastDateByReimbursementStatsTable from '@/components/primitiva/stats/PrimitivaLastDateByReimbursementStatsTable.vue';

export default {
  name: 'PrimitivaStats',
  components: {
    ScrollButton,
    PrimitivaStatsForm,
    PrimitivaOccurrencesByNumberStatsTable,
    PrimitivaOccurrencesByResultStatsTable,
    PrimitivaOccurrencesByResultWithReimbursementStatsTable,
    PrimitivaOccurrencesByReimbursementStatsTable,
    PrimitivaLastDateByNumberStatsTable,
    PrimitivaLastDateByReimbursementStatsTable,
  },
  nuxtI18n: {
    paths: {
      es: '/primitiva/estadisticas',
    },
  },
  mixins: [],
  async fetch() {
    this.$store.commit('primitiva/setYearsPagination', {
      sort_type: 'desc',
    });

    return Promise.all([
      this.$store.dispatch('primitiva/getYears'),
    ])
      .then(() => {
        const filters = this.$store.state.primitiva.statsFilters;
        this.$store.commit('primitiva/setStatsFilters', {
          ...filters,
          searchBy: 'occurrencesByNumber',
        });
      });
  },
  data() {
    return {
      items: [
        {
          text: this.$t('BREADCRUMBS.HOME.TEXT'),
          disabled: false,
          to: this.localePath({
            name: 'index',
          }),
        },
        {
          text: this.$t('BREADCRUMBS.PRIMITIVA.TEXT'),
          disabled: true,
        }, {
          text: this.$t('BREADCRUMBS.PRIMITIVA.STATS.TEXT'),
          disabled: true,
        },
      ],
      titleText: this.$t('VIEWS.PRIMITIVA.STATS.TITLE'),
      statsIntroText: this.$t('VIEWS.PRIMITIVA.STATS.INTRO_TEXT'),
      show: {
        occurrencesByNumber: false,
        occurrencesByResult: false,
        occurrencesByResultWithReimbursement: false,
        occurrencesByReimbursement: false,
        lastDateByNumber: false,
        lastDateByReimbursement: false,
      },
    };
  },
  computed: {},
  destroyed() {
    this.$store.dispatch('primitiva/destroyTickets');
  },
  head() {
    // TODO: Añadir info SEO para estadísticas de primitiva
    const seoInfo = {
      title: '🍀 Primitiva | Histórico de sorteos de la primitiva',
      metas: {
        description: 'Apartado en el que poder consultar el histórico de sorteos de la primitiva. ⚡ Se pueden filtrar por temporada.',
        keywords: 'primitiva, histórico, historico, sorteos',
        canonical_url: 'https://www.pronostigol.es/primitiva/sorteos',
        og_title: '🍀 Primitiva | Histórico de sorteos de la primitiva',
        og_type: 'website',
        og_image: 'https://www.pronostigol.es/img/logo-primitiva.png',
        og_url: 'https://www.pronostigol.es/primitiva',
        og_description: 'Apartado en el que poder consultar el histórico de sorteos de la primitiva. ⚡ Se pueden filtrar por temporada.',
        og_site_name: 'Pronostigol',
        twitter_site: '@pronostigolesp',
        twitter_card: 'summary_large_image',
        twitter_image: 'https://www.pronostigol.es/img/logo-primitiva.png',
        twitter_title: '🍀 Primitiva | Histórico de sorteos de la primitiva',
        twitter_description: 'Apartado en el que poder consultar el histórico de sorteos de la primitiva. ⚡ Se pueden filtrar por temporada.',
      },
    };

    return utils.getCommonMetas(seoInfo);
  },
};
</script>
