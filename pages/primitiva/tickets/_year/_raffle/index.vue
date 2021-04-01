<template>
  <v-row justify="center" align="center">
    <v-col cols="12">
      <v-breadcrumbs :items="items">
        <template v-slot:item="{ item }">
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
      <div class="text-h2 my-3 pb-4 green--text text--darken-2">
        {{ titleText }}
      </div>
      <ScrollButton />
      <div>
        <v-card
          :loading="loading"
          color="green darken-2"
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
        <v-card
          class="mt-5"
          :loading="loading"
          color="green darken-2"
          elevation="2"
        >
          <v-simple-table>
            <template v-slot:default>
              <thead>
                <tr>
                  <th
                    class="text-center"
                  >
                    {{ numbersLabel }}
                  </th>
                  <th class="text-center">
                    {{ complementaryLabel }}
                  </th>
                  <th class="text-center">
                    {{ reimbursementLabel }}
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
                      {{ ticket.resultado.complementario }}
                    </v-chip>
                  </td>
                  <td class="text-center">
                    <v-chip
                      color="primary"
                    >
                      {{ ticket.resultado.reintegro }}
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

export default {
  name: 'PrimitivaTicket',
  components: {
    ScrollButton,
  },
  nuxtI18n: {
    paths: {
      es: '/primitiva/sorteos/:year/:raffle',
    },
  },
  mixins: [
    getFormattedDateMixin,
  ],
  async fetch() {
    return Promise.all([
      this.$store.dispatch('primitiva/getTicket', {
        year: this.year,
        raffle: this.raffle,
      }),
    ]);
  },
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
          text: this.$t('BREADCRUMBS.PRIMITIVA.TEXT'),
          disabled: true,
        }, {
          text: this.$t('BREADCRUMBS.PRIMITIVA.TICKETS.TEXT'),
          disabled: false,
          to: this.localePath({
            name: 'primitiva-tickets',
          }),
        }, {
          text: this.$t('BREADCRUMBS.PRIMITIVA.TICKETS.TICKET.TEXT', {
            year,
            raffle,
          }),
          disabled: true,
        },
      ],
      year,
      raffle,
      titleText: this.$t('VIEWS.PRIMITIVA.TICKETS.TICKET.TITLE'),
      yearText: this.$t('VIEWS.PRIMITIVA.TICKETS.TICKET.INFO.YEAR'),
      dateText: this.$t('VIEWS.PRIMITIVA.TICKETS.TICKET.INFO.DATE'),
      raffleText: this.$t('VIEWS.PRIMITIVA.TICKETS.TICKET.INFO.RAFFLE'),
      numbersLabel: this.$t('VIEWS.PRIMITIVA.TICKETS.TICKET.TABLE.NUMBERS.LABEL'),
      complementaryLabel: this.$t('VIEWS.PRIMITIVA.TICKETS.TICKET.TABLE.COMPLEMENTARY.LABEL'),
      reimbursementLabel: this.$t('VIEWS.PRIMITIVA.TICKETS.TICKET.TABLE.REIMBURSEMENT.LABEL'),
      loadingText: this.$t('COMMON.LOADING'),
    };
  },
  computed: {
    ...mapState('primitiva', {
      ticket: (state) => state.currentTicket,
      loading: 'loading',
    }),
  },
  destroyed() {
    this.$store.dispatch('primitiva/destroyTicket');
  },
  methods: {},
  head() {
    const { year } = this;
    const { raffle } = this;

    const seoInfo = {
      title: `🍀 Primitiva | Detalle del sorteo ${raffle} del año ${year}`,
      metas: {
        description: `Página con toda la información del sorteo de primitiva número ${raffle} del año ${year}.`,
        keywords: `primitiva, jornada ${raffle}, año ${year}`,
        canonical_url: `https://www.pronostigol.es/primitiva/sorteos/${year}/${raffle}`,
        og_title: `🍀 Primitiva | Detalle del sorteo ${raffle} del año ${year}`,
        og_type: 'website',
        og_image: 'https://www.pronostigol.es/img/logo-primitiva.png',
        og_url: `https://www.pronostigol.es/primitiva/sorteos/${year}/${raffle}`,
        og_description: `Página con toda la información del sorteo de primitiva número ${raffle} del año ${year}.`,
        og_site_name: 'Pronostigol',
        twitter_site: '@pronostigolesp',
        twitter_card: 'summary_large_image',
        twitter_image: 'https://www.pronostigol.es/img/logo-primitiva.png',
        twitter_title: `🍀 Primitiva | Detalle del sorteo ${raffle} del año ${year}`,
        twitter_description: `Página con toda la información del sorteo de primitiva número ${raffle} del año ${year}.`,
      },
    };

    return utils.getCommonMetas(seoInfo);
  },
};
</script>
