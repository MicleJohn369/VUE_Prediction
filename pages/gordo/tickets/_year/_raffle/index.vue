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
      <div class="text-h2 my-3 pb-4 red--text text--darken-2">
        {{ titleText }}
      </div>
      <ScrollButton />
      <div>
        <v-card
          :loading="loading"
          color="red darken-2"
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
          color="red darken-2"
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
                    {{ specialNumberLabel }}
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
                      color="primary"
                    >
                      {{ ticket.resultado.numeroClave }}
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
  name: 'GordoTicket',
  components: {
    ScrollButton,
    Advertisement,
  },
  nuxtI18n: {
    paths: {
      es: '/gordo/sorteos/:year/:raffle',
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
          text: this.$t('BREADCRUMBS.GORDO.TEXT'),
          disabled: true,
        }, {
          text: this.$t('BREADCRUMBS.GORDO.TICKETS.TEXT'),
          disabled: false,
          to: this.localePath({
            name: 'gordo-tickets',
          }),
        }, {
          text: this.$t('BREADCRUMBS.GORDO.TICKETS.TICKET.TEXT', {
            year,
            raffle,
          }),
          disabled: true,
        },
      ],
      year,
      raffle,
      titleText: this.$t('VIEWS.GORDO.TICKETS.TICKET.TITLE'),
      yearText: this.$t('VIEWS.GORDO.TICKETS.TICKET.INFO.YEAR'),
      dateText: this.$t('VIEWS.GORDO.TICKETS.TICKET.INFO.DATE'),
      raffleText: this.$t('VIEWS.GORDO.TICKETS.TICKET.INFO.RAFFLE'),
      numbersLabel: this.$t('VIEWS.GORDO.TICKETS.TICKET.TABLE.NUMBERS.LABEL'),
      specialNumberLabel: this.$t('VIEWS.GORDO.TICKETS.TICKET.TABLE.SPECIAL_NUMBER.LABEL'),
      loadingText: this.$t('COMMON.LOADING'),
    };
  },
  async fetch() {
    return Promise.all([
      this.$store.dispatch('gordo/getTicket', {
        year: this.year,
        raffle: this.raffle,
      }),
    ]);
  },
  head() {
    const { year } = this;
    const { raffle } = this;

    const seoInfo = {
      title: `💰 El Gordo de la Primitiva | Detalle del sorteo ${raffle} del año ${year}`,
      metas: {
        description: `Página con toda la información del sorteo de El Gordo de la Primitiva número ${raffle} del año ${year}.`,
        keywords: `gordo, primitiva, sorteo ${raffle}, año ${year}`,
        canonical_url: `https://www.pronostigol.es/primitiva/sorteos/${year}/${raffle}`,
        og_title: `💰 El Gordo de la Primitiva | Detalle del sorteo ${raffle} del año ${year}`,
        og_type: 'website',
        og_image: 'https://www.pronostigol.es/images/logo-gordo.png',
        og_url: `https://www.pronostigol.es/primitiva/sorteos/${year}/${raffle}`,
        og_description: `Página con toda la información del sorteo de El Gordo de la Primitiva número ${raffle} del año ${year}.`,
        og_site_name: 'Pronostigol',
        twitter_site: '@pronostigolesp',
        twitter_card: 'summary_large_image',
        twitter_image: 'https://www.pronostigol.es/images/logo-gordo.png',
        twitter_title: `💰 El Gordo de la Primitiva | Detalle del sorteo ${raffle} del año ${year}`,
        twitter_description: `Página con toda la información del sorteo de El Gordo de la Primitiva número ${raffle} del año ${year}.`,
      },
    };

    return utils.getCommonMetas(seoInfo);
  },
  computed: {
    ...mapState('gordo', {
      ticket: (state) => state.currentTicket,
      loading: 'loading',
    }),
  },
  destroyed() {
    this.$store.dispatch('gordo/destroyTicket');
  },
  methods: {},
};
</script>
