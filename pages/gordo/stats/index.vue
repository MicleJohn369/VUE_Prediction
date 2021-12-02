<template>
  <v-row justify="center" align="center">
    <v-col cols="12">
      <v-breadcrumbs :items="items">
        <template #item="{ item }">
          <v-breadcrumbs-item
            :to="item.to"
            :disabled="item.disabled"
            nuxt
          >
            {{ item.text.toUpperCase() }}
          </v-breadcrumbs-item>
        </template>
      </v-breadcrumbs>
      <div class="text-h2 my-3 pb-4 red--text text--darken-2">
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
        <GordoStatsForm :show="show" />
        <advertisement v-if="showAdvertisement" />
        <GordoOccurrencesByNumberStatsTable
          v-if="show.occurrencesByNumber"
        />
        <GordoOccurrencesByResultStatsTable
          v-if="show.occurrencesByResult"
        />
        <GordoOccurrencesByResultWithSpecialNumberStatsTable
          v-if="show.occurrencesByResultWithSpecialNumber"
        />
        <GordoOccurrencesBySpecialNumberStatsTable
          v-if="show.occurrencesBySpecialNumber"
        />
        <GordoLastDateByNumberStatsTable
          v-if="show.lastDateByNumber"
        />
        <GordoLastDateBySpecialNumberStatsTable
          v-if="show.lastDateBySpecialNumber"
        />
      </v-card>
    </v-col>
  </v-row>
</template>

<script>

import utils from '@/utils';

import ScrollButton from '@/components/ScrollButton.vue';
import Advertisement from '@/components/Advertisement.vue';

import GordoStatsForm from '@/components/gordo/stats/GordoStatsForm.vue';
import GordoOccurrencesByNumberStatsTable from '@/components/gordo/stats/GordoOccurrencesByNumberStatsTable.vue';
import GordoOccurrencesByResultStatsTable from '@/components/gordo/stats/GordoOccurrencesByResultStatsTable.vue';
import GordoLastDateByNumberStatsTable from '@/components/gordo/stats/GordoLastDateByNumberStatsTable.vue';
import GordoLastDateBySpecialNumberStatsTable from '@/components/gordo/stats/GordoLastDateBySpecialNumberStatsTable.vue';
import GordoOccurrencesByResultWithSpecialNumberStatsTable from '~/components/gordo/stats/GordoOccurrencesByResultWithSpecialNumberStatsTable.vue';
import GordoOccurrencesBySpecialNumberStatsTable from '~/components/gordo/stats/GordoOccurrencesBySpecialNumberStatsTable.vue';

export default {
  name: 'GordoStats',
  components: {
    ScrollButton,
    GordoStatsForm,
    GordoOccurrencesByNumberStatsTable,
    GordoOccurrencesByResultStatsTable,
    GordoOccurrencesByResultWithSpecialNumberStatsTable,
    GordoOccurrencesBySpecialNumberStatsTable,
    GordoLastDateByNumberStatsTable,
    GordoLastDateBySpecialNumberStatsTable,
    Advertisement,
  },
  nuxtI18n: {
    paths: {
      es: '/gordo/estadisticas',
    },
  },
  mixins: [],
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
          text: this.$t('BREADCRUMBS.GORDO.TEXT'),
          disabled: true,
        }, {
          text: this.$t('BREADCRUMBS.GORDO.STATS.TEXT'),
          disabled: true,
        },
      ],
      titleText: this.$t('VIEWS.GORDO.STATS.TITLE'),
      statsIntroText: this.$t('VIEWS.GORDO.STATS.INTRO_TEXT'),
      show: {
        occurrencesByNumber: false,
        occurrencesByResult: false,
        occurrencesByResultWithSpecialNumber: false,
        occurrencesBySpecialNumber: false,
        lastDateByNumber: false,
        lastDateBySpecialNumber: false,
      },
    };
  },
  async fetch() {
    this.$store.commit('gordo/setYearsPagination', {
      sort_type: 'desc',
    });

    return Promise.all([
      this.$store.dispatch('gordo/getYears'),
    ])
      .then(() => {
        const filters = this.$store.state.gordo.statsFilters;
        this.$store.commit('gordo/setStatsFilters', {
          ...filters,
          searchBy: 'occurrencesByNumber',
        });
      });
  },
  head() {
    const seoInfo = {
      title: '💰 El Gordo de la Primitiva | Estadísticas de El Gordo de la Primitiva',
      metas: {
        description: '📊 Estadísticas avanzadas sobre El Gordo de la Primitiva. ⚡ Se incluyen multitud de filtros para personalizar las consultas.',
        keywords: 'gordo, primitiva, estadísticas, estadisticas, consultas',
        canonical_url: 'https://www.pronostigol.es/gordo/estadisticas',
        og_title: '💰 El Gordo de la Primitiva | Estadísticas de El Gordo de la Primitiva',
        og_type: 'website',
        og_image: 'https://www.pronostigol.es/images/logo-gordo.png',
        og_url: 'https://www.pronostigol.es/gordo',
        og_description: '📊 Estadísticas avanzadas sobre El Gordo de la Primitiva. ⚡ Se incluyen multitud de filtros para personalizar las consultas.',
        og_site_name: 'Pronostigol',
        twitter_site: '@pronostigolesp',
        twitter_card: 'summary_large_image',
        twitter_image: 'https://www.pronostigol.es/images/logo-gordo.png',
        twitter_title: '💰 El Gordo de la Primitiva | Estadísticas de El Gordo de la Primitiva',
        twitter_description: '📊 Estadísticas avanzadas sobre El Gordo de la Primitiva. ⚡ Se incluyen multitud de filtros para personalizar las consultas.',
      },
    };

    return utils.getCommonMetas(seoInfo);
  },
  computed: {
    showAdvertisement() {
      return this.show.occurrencesByNumber
        || this.show.occurrencesByResult
        || this.show.occurrencesByResultWithSpecialNumber
        || this.show.occurrencesBySpecialNumber
        || this.show.lastDateByNumber
        || this.show.lastDateBySpecialNumber;
    },
  },
  destroyed() {
    this.$store.dispatch('gordo/destroyTickets');
  },
};
</script>
