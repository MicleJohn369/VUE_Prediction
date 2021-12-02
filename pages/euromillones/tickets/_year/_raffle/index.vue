<template>
  <v-row justify="center" align="center">
    <v-col cols="12">
      <v-breadcrumbs :items="items">
        <template #item="{ item }">
          <v-breadcrumbs-item
            :to="item.to"
            :disabled="item.disabled"
            exact
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
      <div>
        <v-card
          :loading="loading"
          color="purple darken-4"
          elevation="2"
          max-width="350"
        >
          <v-list>
            <v-list-item
              v-if="loading"
              class="text-center"
            >
              <v-list-item-title>{{ loadingText }}</v-list-item-title>
            </v-list-item>
            <v-list-item v-if="!loading">
              <v-list-item-title>{{ yearText }}</v-list-item-title>
              <v-list-item-subtitle>{{ ticket.anyo }}</v-list-item-subtitle>
            </v-list-item>
            <v-list-item v-if="!loading">
              <v-list-item-title>{{ dateText }}</v-list-item-title>
              <v-list-item-subtitle>{{ getFormattedDate(ticket.fecha) }}</v-list-item-subtitle>
            </v-list-item>
            <v-list-item v-if="!loading">
              <v-list-item-title>{{ raffleText }}</v-list-item-title>
              <v-list-item-subtitle>{{ ticket.sorteo }}</v-list-item-subtitle>
            </v-list-item>
          </v-list>
        </v-card>
        <Advertisement />
        <v-card
          class="mt-5"
          :loading="loading"
          color="purple darken-4"
          elevation="2"
        >
          <v-simple-table>
            <template #default>
              <thead>
                <tr>
                  <th
                    class="text-center"
                  >
                    {{ numbersLabel }}
                  </th>
                  <th class="text-center">
                    {{ starsLabel }}
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr v-if="loading">
                  <td
                    class="text-center"
                    colspan="3"
                  >
                    {{ loadingText }}
                  </td>
                </tr>
                <tr v-else>
                  <td class="text-center">
                    <v-chip
                      v-for="bola in ticket.resultado.bolas"
                      :key="bola.numero"
                      color="primary"
                    >
                      {{ bola.numero }}
                    </v-chip>
                  </td>
                  <td class="text-center">
                    <v-chip
                      v-for="estrella in ticket.resultado.estrellas"
                      :key="estrella.numero"
                      color="orange"
                      text-color="white"
                    >
                      {{ estrella.numero }}
                    </v-chip>
                  </td>
                </tr>
              </tbody>
            </template>
          </v-simple-table>
        </v-card>
      </div>
    </v-col>
  </v-row>
</template>

<script>

import { mapState } from 'vuex';

import utils from '@/utils';

import getFormattedDateMixin from '@/mixins/getFormattedDate';

import ScrollButton from '@/components/ScrollButton.vue';
import Advertisement from '@/components/Advertisement.vue';

export default {
  name: 'EuromillonesTicket',
  components: {
    ScrollButton,
    Advertisement,
  },
  nuxtI18n: {
    paths: {
      es: '/euromillones/sorteos/:year/:raffle',
    },
  },
  mixins: [
    getFormattedDateMixin,
  ],
  data() {
    const { year } = this.$route.params;
    const { raffle } = this.$route.params;

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
          text: this.$t('BREADCRUMBS.EUROMILLONES.TICKETS.TEXT'),
          disabled: false,
          to: this.localePath({
            name: 'euromillones-tickets',
          }),
        }, {
          text: this.$t('BREADCRUMBS.EUROMILLONES.TICKETS.TICKET.TEXT', {
            year,
            raffle,
          }),
          disabled: true,
        },
      ],
      year,
      raffle,
      titleText: this.$t('VIEWS.EUROMILLONES.TICKETS.TICKET.TITLE'),
      yearText: this.$t('VIEWS.EUROMILLONES.TICKETS.TICKET.INFO.YEAR'),
      dateText: this.$t('VIEWS.EUROMILLONES.TICKETS.TICKET.INFO.DATE'),
      raffleText: this.$t('VIEWS.EUROMILLONES.TICKETS.TICKET.INFO.RAFFLE'),
      numbersLabel: this.$t('VIEWS.EUROMILLONES.TICKETS.TICKET.TABLE.NUMBERS.LABEL'),
      starsLabel: this.$t('VIEWS.EUROMILLONES.TICKETS.TICKET.TABLE.STARS.LABEL'),
      loadingText: this.$t('COMMON.LOADING'),
    };
  },
  async fetch() {
    return Promise.all([
      this.$store.dispatch('euromillones/getTicket', {
        year: this.year,
        raffle: this.raffle,
      }),
    ]);
  },
  head() {
    const { year } = this;
    const { raffle } = this;

    const seoInfo = {
      title: `💰 Euromillones | Detalle del sorteo ${raffle} del año ${year}`,
      metas: {
        description: `Página con toda la información del sorteo de Euromillones número ${raffle} del año ${year}.`,
        keywords: `euromillones, sorteo ${raffle}, año ${year}`,
        canonical_url: `https://www.pronostigol.es/euromillones/sorteos/${year}/${raffle}`,
        og_title: `💰 Euromillones | Detalle del sorteo ${raffle} del año ${year}`,
        og_type: 'website',
        og_image: 'https://www.pronostigol.es/images/logo-euromillones.png',
        og_url: `https://www.pronostigol.es/euromillones/sorteos/${year}/${raffle}`,
        og_description: `Página con toda la información del sorteo de Euromillones número ${raffle} del año ${year}.`,
        og_site_name: 'Pronostigol',
        twitter_site: '@pronostigolesp',
        twitter_card: 'summary_large_image',
        twitter_image: 'https://www.pronostigol.es/images/logo-euromillones.png',
        twitter_title: `💰 Euromillones | Detalle del sorteo ${raffle} del año ${year}`,
        twitter_description: `Página con toda la información del sorteo de Euromillones número ${raffle} del año ${year}.`,
      },
    };

    return utils.getCommonMetas(seoInfo);
  },
  computed: {
    ...mapState('euromillones', {
      ticket: (state) => state.currentTicket,
      loading: 'loading',
    }),
  },
  destroyed() {
    this.$store.dispatch('euromillones/destroyTicket');
  },
  methods: {},
};
</script>
