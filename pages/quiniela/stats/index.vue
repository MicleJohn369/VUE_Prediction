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
      <div class="text-h2 my-3 pb-4 blue--text">
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
        <v-tabs
          v-model="currentTab"
          centered
        >
          <v-tab
            v-for="tab in tabs"
            :key="tab.name"
          >
            {{ tab.name }}
          </v-tab>
        </v-tabs>
        <v-tabs-items
          v-model="currentTab"
        >
          <v-tab-item>
            <CustomStatsForm :show="show" />
            <CustomStatsTable
              v-if="show.stats"
              :stats="stats"
            />
            <v-card
              v-if="show.statsByPlace"
            >
              <v-tabs
                v-model="currentPlaceTab"
                background-color="primary"
                centered
                dark
                icons-and-text
              >
                <v-tabs-slider />

                <v-tab>
                  xoxLocal
                  <v-icon>mdi-stadium</v-icon>
                </v-tab>

                <v-tab>
                  xoxVisitante
                  <v-icon>mdi-airplane-takeoff</v-icon>
                </v-tab>
              </v-tabs>
              <v-tabs-items
                v-model="currentPlaceTab"
              >
                <v-tab-item>
                  <CustomStatsTable
                    class="pa-3"
                    :stats="statsAsLocal"
                  />
                </v-tab-item>
                <v-tab-item>
                  <CustomStatsTable
                    class="pa-3"
                    :stats="statsAsVisitor"
                  />
                </v-tab-item>
              </v-tabs-items>
            </v-card>
          </v-tab-item>
          <v-tab-item />
        </v-tabs-items>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>

import utils from '@/utils';

import { mapState } from 'vuex';

import CustomStatsForm from '@/components/quiniela/stats/CustomStatsForm.vue';
import CustomStatsTable from '~/components/quiniela/stats/CustomStatsTable.vue';

export default {
  name: 'QuinielaStats',
  components: {
    CustomStatsForm,
    CustomStatsTable,
  },
  nuxtI18n: {
    paths: {
      es: '/quiniela/estadisticas',
    },
  },
  mixins: [],
  async fetch() {
    this.$store.commit('quiniela/setSeasonPagination', {
      sort_type: 'desc',
    });

    this.$store.commit('quiniela/setCompetitionPagination', {
      sort_type: 'desc',
    });

    return Promise.all([
      this.$store.dispatch('quiniela/getSeasons'),
      this.$store.dispatch('quiniela/getCompetitions'),
      this.$store.dispatch('quiniela/getTeams'),
    ])
      .then(() => {
        const filters = this.$store.state.quiniela.statsFilters;
        this.$store.commit('quiniela/setStatsFilters', {
          ...filters,
          season: 'Histórico',
          competition: 'Todas',
          searchBy: 'general',
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
          text: this.$t('BREADCRUMBS.QUINIELA.TEXT'),
          disabled: true,
        }, {
          text: this.$t('BREADCRUMBS.QUINIELA.STATS.TEXT'),
          disabled: true,
        },
      ],
      titleText: this.$t('VIEWS.QUINIELA.STATS.TITLE'),
      statsIntroText: this.$t('VIEWS.QUINIELA.STATS.INTRO_TEXT'),
      tabs: [
        { name: this.$t('VIEWS.QUINIELA.STATS.TABS.CUSTOM') },
        { name: this.$t('VIEWS.QUINIELA.STATS.TABS.STANDARD') },
      ],
      currentTab: null,
      placesTab: [
        { name: 'xoxLocal' },
        { name: 'xoxVisitante' },
      ],
      currentPlaceTab: null,
      show: {
        stats: false,
        statsByPlace: false,
      },
    };
  },
  computed: {
    ...mapState('quiniela', {
      stats: (state) => state.stats,
      statsAsLocal: (state) => state.statsAsLocal,
      statsAsVisitor: (state) => state.statsAsVisitor,
    }),
  },
  destroyed() {
    this.$store.dispatch('quiniela/destroyTickets');
  },
  head() {
    // TODO: Añadir info SEO para estadísticas de quiniela
    const seoInfo = {
      title: '⚽ Quiniela | Histórico de sorteos de la quiniela',
      metas: {
        description: 'Apartado en el que poder consultar el histórico de sorteos de la quiniela. ⚡ Se pueden filtrar por temporada.',
        keywords: 'quiniela, histórico, historico, sorteos',
        canonical_url: 'https://www.pronostigol.es/quiniela/sorteos',
        og_title: '⚽ Quiniela | Histórico de sorteos de la quiniela',
        og_type: 'website',
        og_image: 'https://www.pronostigol.es/img/logo-quiniela.png',
        og_url: 'https://www.pronostigol.es/quiniela',
        og_description: 'Apartado en el que poder consultar el histórico de sorteos de la quiniela. ⚡ Se pueden filtrar por temporada.',
        og_site_name: 'Pronostigol',
        twitter_site: '@pronostigolesp',
        twitter_card: 'summary_large_image',
        twitter_image: 'https://www.pronostigol.es/img/logo-quiniela.png',
        twitter_title: '⚽ Quiniela | Histórico de sorteos de la quiniela',
        twitter_description: 'Apartado en el que poder consultar el histórico de sorteos de la quiniela. ⚡ Se pueden filtrar por temporada.',
      },
    };

    return utils.getCommonMetas(seoInfo);
  },
};
</script>
