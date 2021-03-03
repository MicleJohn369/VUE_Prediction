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
      <v-simple-table
        class="mt-5"
      >
        <template v-slot:default>
          <thead>
            <tr>
              <th class="text-center">
                {{ rowLabel }}
              </th>
              <th class="text-center">
                {{ competitionLabel }}
              </th>
              <th class="text-center">
                {{ dayLabel }}
              </th>
              <th class="text-center" colspan="3">
                {{ footballMatchLabel }}
              </th>
              <th class="text-center">
                {{ resultLabel }}
              </th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="partido in ticket.partidos"
              :key="partido.fila"
            >
              <td class="text-center">
                {{ partido.fila }}
              </td>
              <td class="text-center">
                {{ partido.competicion }}
              </td>
              <td class="text-center">
                {{ partido.jornada }}
              </td>
              <td class="text-right">
                {{ partido.local }}
              </td>
              <td class="text-center">
                {{ partido.golesLocal }} - {{ partido.golesVisitante }}
              </td>
              <td>{{ partido.visitante }}</td>
              <td class="text-center">
                <v-chip
                  color="primary"
                >
                  {{ getRowResult(partido) }}
                </v-chip>
              </td>
            </tr>
          </tbody>
        </template>
      </v-simple-table>
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
        season: this.season,
        day: this.day,
      }),
    ]);
  },
  data() {
    const { season } = this.$route.params;
    const { day } = this.$route.params;

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
            season,
            day,
          }),
          disabled: true,
        },
      ],
      season,
      day,
      titleText: this.$t('VIEWS.QUINIELA.TICKETS.TICKET.TITLE'),
      seasonText: this.$t('VIEWS.QUINIELA.TICKETS.TICKET.INFO.SEASON'),
      dateText: this.$t('VIEWS.QUINIELA.TICKETS.TICKET.INFO.DATE'),
      dayText: this.$t('VIEWS.QUINIELA.TICKETS.TICKET.INFO.DAY'),
      rowLabel: this.$t('VIEWS.QUINIELA.TICKETS.TICKET.TABLE.ROW.LABEL'),
      competitionLabel: this.$t('VIEWS.QUINIELA.TICKETS.TICKET.TABLE.COMPETITION.LABEL'),
      dayLabel: this.$t('VIEWS.QUINIELA.TICKETS.TICKET.TABLE.DAY.LABEL'),
      footballMatchLabel: this.$t('VIEWS.QUINIELA.TICKETS.TICKET.TABLE.FOOTBALL_MATCH.LABEL'),
      resultLabel: this.$t('VIEWS.QUINIELA.TICKETS.TICKET.TABLE.RESULT.LABEL'),
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
  methods: {
    getRowResult(partido) {
      if (partido.fila === 15 && partido.resultadoConGoles) return partido.resultadoConGoles;
      return partido.resultado;
    },
  },
  head() {
    const { season } = this;
    const { day } = this;

    const seoInfo = {
      title: `⚽ Quiniela | Detalle del sorteo ${day} de la temporada ${season}`,
      metas: {
        description: `Página con toda la información del sorteo de quiniela número ${day} de la temporada ${season}.`,
        keywords: `quiniela, jornada ${day}, temporada ${season}`,
        canonical_url: `https://www.pronostigol.es/quiniela/sorteos/${season}/${day}`,
        og_title: `⚽ Quiniela | Detalle del sorteo ${day} de la temporada ${season}`,
        og_type: 'website',
        og_image: 'https://www.pronostigol.es/img/logo-quiniela.png',
        og_url: `https://www.pronostigol.es/quiniela/sorteos/${season}/${day}`,
        og_description: `Página con toda la información del sorteo de quiniela número ${day} de la temporada ${season}.`,
        og_site_name: 'Pronostigol',
        twitter_site: '@pronostigolesp',
        twitter_card: 'summary_large_image',
        twitter_image: 'https://www.pronostigol.es/img/logo-quiniela.png',
        twitter_title: `⚽ Quiniela | Detalle del sorteo ${day} de la temporada ${season}`,
        twitter_description: `Página con toda la información del sorteo de quiniela número ${day} de la temporada ${season}.`,
      },
    };

    return utils.getCommonMetas(seoInfo);
  },
};
</script>
