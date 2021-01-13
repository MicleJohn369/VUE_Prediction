<template>
  <v-row justify="center" align="center">
    <v-col cols="12">
      <div class="text-center text-h2 my-3 pb-4 blue--text">
        Histórico de sorteos de la Quiniela
      </div>
      <ScrollButton />
      <v-card
        elevation="2"
      >
        <v-card-text>
          Aquí encontrarás un amplio histórico en el que poder buscar
          los sorteos de la Quiniela de las temporadas que se indican a continuación.
        </v-card-text>
      </v-card>
      <v-card
        elevation="2"
        class="mt-3"
      >
        <v-data-table
          :headers="headers"
          :items="tickets"
          :options.sync="options"
          :server-items-length="total"
          :loading="loading"
          class="elevation-1"
        >
          <template v-slot:[`item.fecha`]="{ item }">
            {{ getTicketDate(item.fecha) }}
          </template>
        </v-data-table>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>

import { mapState } from 'vuex';

import utils from '@/utils';

export default {
  name: 'QuinielaTickets',
  nuxtI18n: {
    paths: {
      es: '/quiniela/sorteos',
    },
  },
  async fetch() {
    this.$store.commit('quiniela/setTicketFilters', {
      season: '2020-2021',
    });

    this.$store.commit('quiniela/setTicketPagination', {
      sort_property: this.options.sortBy,
      sort_type: this.options.sortDesc ? 'desc' : 'asc',
    });

    return Promise.all([
      this.$store.dispatch('quiniela/getTickets'),
    ]);
  },
  data() {
    return {
      options: {
        mustSort: true,
        sortBy: ['fecha'],
        sortDesc: [true],
      },
      headers: [
        {
          text: 'xoxJornada',
          align: 'center',
          sortable: false,
          value: 'jornada',
        },
        {
          text: 'xoxModalidad',
          align: 'center',
          sortable: false,
          value: 'modalidad',
        }, {
          text: 'xoxFecha',
          align: 'center',
          sortable: true,
          value: 'fecha',
        },
      ],
    };
  },
  computed: {
    ...mapState('quiniela', {
      tickets: (state) => state.tickets.data,
      total: (state) => state.tickets.total,
      pagination: 'ticketPagination',
      filters: 'ticketFilters',
      loading: 'loading',
    }),
  },
  watch: {
    options: {
      handler() {
        this.getTickets();
      },
      deep: true,
    },
  },
  destroyed() {
    this.$store.dispatch('quiniela/destroyTickets');
  },
  methods: {
    getTicketDate(date) {
      return this.$moment(date).format('DD/MM/yyyy');
    },
    getTickets() {
      const {
        sortBy, sortDesc, page, itemsPerPage,
      } = this.options;

      this.$store.commit('quiniela/setTicketPagination', {
        page,
        per_page: itemsPerPage,
        sort_type: sortDesc[0] ? 'desc' : 'asc',
        sort_property: sortBy[0],
      });

      this.$store.dispatch('quiniela/getTickets');
    },
  },
  head() {
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
