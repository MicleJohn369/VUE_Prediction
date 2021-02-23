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
      <div class="text-h2 my-3 pb-4 blue--text">
        {{ titleText }}
      </div>
      <ScrollButton />
      <v-card
        elevation="2"
        max-width="350"
      >
        <v-list>
          <v-list-item>
            <v-list-item-title>{{ seasonText }}</v-list-item-title>
            <v-list-item-subtitle>{{ ticket.temporada }}</v-list-item-subtitle>
          </v-list-item>
          <v-list-item>
            <v-list-item-title>{{ dateText }}</v-list-item-title>
            <v-list-item-subtitle>{{ getFormattedDate(ticket.fecha) }}</v-list-item-subtitle>
          </v-list-item>
          <v-list-item>
            <v-list-item-title>{{ dayText }}</v-list-item-title>
            <v-list-item-subtitle>{{ ticket.jornada }}</v-list-item-subtitle>
          </v-list-item>
        </v-list>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>

import { mapState } from 'vuex';

import utils from '@/utils';

import getFormattedDateMixin from '@/mixins/getFormattedDate';

export default {
  name: 'QuinielaTicket',
  nuxtI18n: {
    paths: {
      es: '/quiniela/sorteos/:season/:day',
    },
  },
  mixins: [
    getFormattedDateMixin,
  ],
  async fetch() {
    return Promise.all([
      this.$store.dispatch('quiniela/getTicket', {
        season: this.$route.params.season,
        day: this.$route.params.day,
      }),
    ]);
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
          text: this.$t('BREADCRUMBS.QUINIELA.TICKETS.TEXT'),
          disabled: false,
          to: this.localePath({
            name: 'quiniela-tickets',
          }),
        }, {
          text: this.$t('BREADCRUMBS.QUINIELA.TICKETS.TICKET.TEXT', {
            season: this.$route.params.season,
            day: this.$route.params.day,
          }),
          disabled: true,
        },
      ],
      season: this.$route.params.season,
      day: this.$route.params.day,
      titleText: this.$t('VIEWS.QUINIELA.TICKETS.TICKET.TITLE'),
      seasonText: this.$t('VIEWS.QUINIELA.TICKETS.TICKET.INFO.SEASON'),
      dateText: this.$t('VIEWS.QUINIELA.TICKETS.TICKET.INFO.DATE'),
      dayText: this.$t('VIEWS.QUINIELA.TICKETS.TICKET.INFO.DAY'),
    };
  },
  computed: {
    ...mapState('quiniela', {
      ticket: (state) => state.currentTicket,
      loading: 'loading',
    }),
  },
  destroyed() {
    this.$store.dispatch('quiniela/destroyTicket');
  },
  head() {
    // TODO
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
