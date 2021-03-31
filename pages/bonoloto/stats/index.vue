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
      <div class="text-h2 my-3 pb-4 black--text">
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
        <BonolotoStatsForm :show="show" />
        <BonolotoOccurrencesByNumberStatsTable
          v-if="show.occurrencesByNumber"
        />
        <BonolotoOccurrencesByResultStatsTable
          v-if="show.occurrencesByResult"
        />
        <BonolotoOccurrencesByResultWithReimbursementStatsTable
          v-if="show.occurrencesByResultWithReimbursement"
        />
        <BonolotoOccurrencesByReimbursementStatsTable
          v-if="show.occurrencesByReimbursement"
        />
      </v-card>
    </v-col>
  </v-row>
</template>

<script>

import utils from '@/utils';

import ScrollButton from '@/components/ScrollButton.vue';

import BonolotoStatsForm from '@/components/bonoloto/stats/BonolotoStatsForm.vue';
import BonolotoOccurrencesByNumberStatsTable from '@/components/bonoloto/stats/BonolotoOccurrencesByNumberStatsTable.vue';
import BonolotoOccurrencesByResultStatsTable from '@/components/bonoloto/stats/BonolotoOccurrencesByResultStatsTable.vue';
import BonolotoOccurrencesByResultWithReimbursementStatsTable from '@/components/bonoloto/stats/BonolotoOccurrencesByResultWithReimbursementStatsTable.vue';
import BonolotoOccurrencesByReimbursementStatsTable from '@/components/bonoloto/stats/BonolotoOccurrencesByReimbursementStatsTable.vue';

export default {
  name: 'BonolotoStats',
  components: {
    ScrollButton,
    BonolotoStatsForm,
    BonolotoOccurrencesByNumberStatsTable,
    BonolotoOccurrencesByResultStatsTable,
    BonolotoOccurrencesByResultWithReimbursementStatsTable,
    BonolotoOccurrencesByReimbursementStatsTable,
  },
  nuxtI18n: {
    paths: {
      es: '/bonoloto/estadisticas',
    },
  },
  mixins: [],
  async fetch() {
    this.$store.commit('bonoloto/setYearsPagination', {
      sort_type: 'desc',
    });

    return Promise.all([
      this.$store.dispatch('bonoloto/getYears'),
    ])
      .then(() => {
        const filters = this.$store.state.bonoloto.statsFilters;
        this.$store.commit('bonoloto/setStatsFilters', {
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
          text: this.$t('BREADCRUMBS.BONOLOTO.TEXT'),
          disabled: true,
        }, {
          text: this.$t('BREADCRUMBS.BONOLOTO.STATS.TEXT'),
          disabled: true,
        },
      ],
      titleText: this.$t('VIEWS.BONOLOTO.STATS.TITLE'),
      statsIntroText: this.$t('VIEWS.BONOLOTO.STATS.INTRO_TEXT'),
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
    this.$store.dispatch('bonoloto/destroyTickets');
  },
  head() {
    // TODO: Añadir info SEO para estadísticas de bonoloto
    const seoInfo = {
      title: '🍀 Bonoloto | Histórico de sorteos de la bonoloto',
      metas: {
        description: 'Apartado en el que poder consultar el histórico de sorteos de la bonoloto. ⚡ Se pueden filtrar por temporada.',
        keywords: 'bonoloto, histórico, historico, sorteos',
        canonical_url: 'https://www.pronostigol.es/bonoloto/sorteos',
        og_title: '🍀 Bonoloto | Histórico de sorteos de la bonoloto',
        og_type: 'website',
        og_image: 'https://www.pronostigol.es/img/logo-bonoloto.png',
        og_url: 'https://www.pronostigol.es/bonoloto',
        og_description: 'Apartado en el que poder consultar el histórico de sorteos de la bonoloto. ⚡ Se pueden filtrar por temporada.',
        og_site_name: 'Pronostigol',
        twitter_site: '@pronostigolesp',
        twitter_card: 'summary_large_image',
        twitter_image: 'https://www.pronostigol.es/img/logo-bonoloto.png',
        twitter_title: '🍀 Bonoloto | Histórico de sorteos de la bonoloto',
        twitter_description: 'Apartado en el que poder consultar el histórico de sorteos de la bonoloto. ⚡ Se pueden filtrar por temporada.',
      },
    };

    return utils.getCommonMetas(seoInfo);
  },
};
</script>
