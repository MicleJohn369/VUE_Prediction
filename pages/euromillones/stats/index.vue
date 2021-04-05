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
      <div class="text-h2 my-3 pb-4 purple--text text--darken-4">
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
        <EuromillonesStatsForm :show="show" />
        <EuromillonesOccurrencesByNumberStatsTable
          v-if="show.occurrencesByNumber"
        />
        <EuromillonesOccurrencesByResultStatsTable
          v-if="show.occurrencesByResult"
        />
        <EuromillonesOccurrencesByResultWithStarsStatsTable
          v-if="show.occurrencesByResultWithStars"
        />
        <EuromillonesOccurrencesByStarStatsTable
          v-if="show.occurrencesByStar"
        />
        <EuromillonesLastDateByNumberStatsTable
          v-if="show.lastDateByNumber"
        />
        <EuromillonesLastDateByStarStatsTable
          v-if="show.lastDateByStar"
        />
      </v-card>
    </v-col>
  </v-row>
</template>

<script>

import utils from '@/utils';

import ScrollButton from '@/components/ScrollButton.vue';

import EuromillonesStatsForm from '@/components/euromillones/stats/EuromillonesStatsForm.vue';
import EuromillonesOccurrencesByNumberStatsTable from '@/components/euromillones/stats/EuromillonesOccurrencesByNumberStatsTable.vue';
import EuromillonesOccurrencesByResultStatsTable from '@/components/euromillones/stats/EuromillonesOccurrencesByResultStatsTable.vue';
import EuromillonesLastDateByNumberStatsTable from '@/components/euromillones/stats/EuromillonesLastDateByNumberStatsTable.vue';
import EuromillonesLastDateByStarStatsTable from '@/components/euromillones/stats/EuromillonesLastDateByStarStatsTable.vue';
import EuromillonesOccurrencesByResultWithStarsStatsTable from '@/components/euromillones/stats/EuromillonesOccurrencesByResultWithStarsStatsTable.vue';
import EuromillonesOccurrencesByStarStatsTable from '@/components/euromillones/stats/EuromillonesOccurrencesByStarStatsTable.vue';

export default {
  name: 'EuromillonesStats',
  components: {
    ScrollButton,
    EuromillonesStatsForm,
    EuromillonesOccurrencesByNumberStatsTable,
    EuromillonesOccurrencesByResultStatsTable,
    EuromillonesOccurrencesByResultWithStarsStatsTable,
    EuromillonesOccurrencesByStarStatsTable,
    EuromillonesLastDateByNumberStatsTable,
    EuromillonesLastDateByStarStatsTable,
  },
  nuxtI18n: {
    paths: {
      es: '/euromillones/estadisticas',
    },
  },
  mixins: [],
  async fetch() {
    this.$store.commit('euromillones/setYearsPagination', {
      sort_type: 'desc',
    });

    return Promise.all([
      this.$store.dispatch('euromillones/getYears'),
    ])
      .then(() => {
        const filters = this.$store.state.euromillones.statsFilters;
        this.$store.commit('euromillones/setStatsFilters', {
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
          text: this.$t('BREADCRUMBS.EUROMILLONES.TEXT'),
          disabled: true,
        }, {
          text: this.$t('BREADCRUMBS.EUROMILLONES.STATS.TEXT'),
          disabled: true,
        },
      ],
      titleText: this.$t('VIEWS.EUROMILLONES.STATS.TITLE'),
      statsIntroText: this.$t('VIEWS.EUROMILLONES.STATS.INTRO_TEXT'),
      show: {
        occurrencesByNumber: false,
        occurrencesByResult: false,
        occurrencesByResultWithStars: false,
        occurrencesByStar: false,
        lastDateByNumber: false,
        lastDateByStar: false,
      },
    };
  },
  computed: {},
  destroyed() {
    this.$store.dispatch('euromillones/destroyTickets');
  },
  head() {
    const seoInfo = {
      title: '🌟 Euromillones | Estadísticas de Euromillones',
      metas: {
        description: '📊 Estadísticas avanzadas sobre Euromillones. ⚡ Se incluyen multitud de filtros para personalizar las consultas.',
        keywords: 'euromillones, estadísticas, estadisticas, consultas',
        canonical_url: 'https://www.pronostigol.es/euromillones/estadisticas',
        og_title: '🌟 Euromillones | Estadísticas de Euromillones',
        og_type: 'website',
        og_image: 'https://www.pronostigol.es/img/logo-euromillones.png',
        og_url: 'https://www.pronostigol.es/euromillones',
        og_description: '📊 Estadísticas avanzadas sobre Euromillones. ⚡ Se incluyen multitud de filtros para personalizar las consultas.',
        og_site_name: 'Pronostigol',
        twitter_site: '@pronostigolesp',
        twitter_card: 'summary_large_image',
        twitter_image: 'https://www.pronostigol.es/img/logo-euromillones.png',
        twitter_title: '🌟 Euromillones | Estadísticas de Euromillones',
        twitter_description: '📊 Estadísticas avanzadas sobre Euromillones. ⚡ Se incluyen multitud de filtros para personalizar las consultas.',
      },
    };

    return utils.getCommonMetas(seoInfo);
  },
};
</script>
