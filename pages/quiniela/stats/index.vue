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
          :touchless="true"
        >
          <v-tab-item>
            <CustomStatsForm :show="show" />
            <Advertisement v-if="show.stats || show.statsByPlace" />
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
                <v-tab
                  v-for="(placeTab, index) in placesTab"
                  :key="index"
                >
                  {{ placeTab.name }}
                  <v-icon>{{ placeTab.icon }}</v-icon>
                </v-tab>
              </v-tabs>
              <v-tabs-items
                v-model="currentPlaceTab"
                :touchless="true"
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
          <v-tab-item>
            <StandardStatsForm :show="show" />
            <Advertisement v-if="show.standardStats" />
            <StandardStatsTable
              v-if="show.standardStats"
            />
          </v-tab-item>
        </v-tabs-items>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>

import { mapState } from 'vuex';
import utils from '@/utils';

import ScrollButton from '@/components/ScrollButton.vue';
import Advertisement from '@/components/Advertisement.vue';

import CustomStatsForm from '@/components/quiniela/stats/CustomStatsForm.vue';
import CustomStatsTable from '@/components/quiniela/stats/CustomStatsTable.vue';

import StandardStatsForm from '@/components/quiniela/stats/StandardStatsForm.vue';
import StandardStatsTable from '@/components/quiniela/stats/StandardStatsTable.vue';

export default {
  name: 'QuinielaStats',
  components: {
    ScrollButton,
    CustomStatsForm,
    CustomStatsTable,
    StandardStatsForm,
    StandardStatsTable,
    Advertisement,
  },
  nuxtI18n: {
    paths: {
      es: '/quiniela/estadisticas',
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
        {
          name: this.$t('VIEWS.QUINIELA.STATS.TEAM_STATS.TABS.LOCAL'),
          icon: 'mdi-stadium',
        }, {
          name: this.$t('VIEWS.QUINIELA.STATS.TEAM_STATS.TABS.VISITOR'),
          icon: 'mdi-airplane-takeoff',
        },
      ],
      currentPlaceTab: null,
      show: {
        stats: false,
        statsByPlace: false,
        standardStats: false,
      },
    };
  },
  async fetch() {
    this.$store.commit('quiniela/setSeasonPagination', {
      sort_type: 'desc',
    });

    this.$store.commit('quiniela/setCompetitionPagination', {
      sort_type: 'asc',
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
};
</script>
