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
          v-text="ticketsIntroText"
        />
      </v-card>
      <v-form
        ref="form"
        v-model="valid"
      >
        <v-container>
          <v-row>
            <v-col
              cols="12"
              md="4"
            >
              <v-select
                v-model="season"
                :rules="[
                  (v) => !!v || this.$t('VIEWS.QUINIELA.TICKETS.FILTERS.SEASON.ERRORS.REQUIRED')
                ]"
                :items="seasons"
                :label="seasonText"
                item-text="name"
                item-value="value"
                required
              />
            </v-col>
          </v-row>
          <v-row>
            <v-col
              cols="12"
              md="4"
            >
              <v-btn
                color="primary"
                @click="submitForm"
              >
                {{ searchText }}
              </v-btn>
            </v-col>
          </v-row>
        </v-container>
      </v-form>
      <v-card
        elevation="2"
        class="mt-3"
      >
        <client-only>
          <v-data-table
            :headers="headers"
            :items="tickets"
            :options.sync="options"
            :server-items-length="total"
            :loading="loading"
            class="elevation-1"
          >
            <template v-slot:[`item.fecha`]="{ item }">
              {{ getFormattedDate(item.fecha) }}
            </template>
            <template v-slot:[`item.actions`]="{ item }">
              <v-btn
                dark
                fab
                x-small
                color="blue"
                :to="localePath({
                  name: 'quiniela-tickets-season-day',
                  params: {
                    season: item.temporada,
                    day: item.jornada,
                  }
                })"
                nuxt
              >
                <v-icon
                  small
                  :title="detailTicketTooltip"
                >
                  mdi-eye
                </v-icon>
              </v-btn>
            </template>
          </v-data-table>
        </client-only>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>

import { mapState } from 'vuex';

import utils from '@/utils';

import getFormattedDateMixin from '@/mixins/getFormattedDate';

export default {
  name: 'QuinielaTickets',
  nuxtI18n: {
    paths: {
      es: '/quiniela/sorteos',
    },
  },
  mixins: [
    getFormattedDateMixin,
  ],
  async fetch() {
    this.$store.commit('quiniela/setTicketPagination', {
      sort_property: this.options.sortBy[0],
      sort_type: this.options.sortDesc[0] ? 'desc' : 'asc',
    });

    this.$store.commit('quiniela/setSeasonPagination', {
      sort_type: 'desc',
    });

    return Promise.all([
      this.$store.dispatch('quiniela/getSeasons'),
    ])
      .then(() => {
        const filters = this.$store.state.quiniela.ticketsFilters;
        this.$store.commit('quiniela/setTicketsFilters', {
          ...filters,
          season: 'Histórico',
        });

        return this.$store.dispatch('quiniela/getTickets');
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
          text: this.$t('BREADCRUMBS.QUINIELA.TICKETS.TEXT'),
          disabled: true,
        },
      ],
      options: {
        mustSort: true,
        sortBy: ['fecha'],
        sortDesc: [true],
      },
      headers: [
        {
          text: this.$t('VIEWS.QUINIELA.TICKETS.TABLE.DAY.LABEL'),
          align: 'center',
          sortable: false,
          value: 'jornada',
        },
        {
          text: this.$t('VIEWS.QUINIELA.TICKETS.TABLE.MODALITY.LABEL'),
          align: 'center',
          sortable: false,
          value: 'modalidad',
        }, {
          text: this.$t('VIEWS.QUINIELA.TICKETS.TABLE.DATE.LABEL'),
          align: 'center',
          sortable: true,
          value: 'fecha',
        }, {
          text: this.$t('VIEWS.QUINIELA.TICKETS.TABLE.ACTIONS.LABEL'),
          align: 'center',
          sortable: false,
          value: 'actions',
        },
      ],
      valid: false,
      titleText: this.$t('VIEWS.QUINIELA.TICKETS.TITLE'),
      ticketsIntroText: this.$t('VIEWS.QUINIELA.TICKETS.INTRO_TEXT'),
      seasonText: this.$t('VIEWS.QUINIELA.TICKETS.FILTERS.SEASON.LABEL'),
      searchText: this.$t('VIEWS.QUINIELA.TICKETS.FILTERS.SEARCH.TEXT'),
      detailTicketTooltip: this.$t('VIEWS.QUINIELA.TICKETS.TABLE.ACTIONS.SEE.TOOLTIP'),
    };
  },
  computed: {
    ...mapState('quiniela', {
      tickets: (state) => state.tickets.data,
      total: (state) => state.tickets.total,
      pagination: 'ticketsPagination',
      seasons: (state) => state.seasons,
      loading: 'loading',
    }),
    season: {
      get() {
        return this.$store.state.quiniela.ticketsFilters.season;
      },
      set(value) {
        const filters = this.$store.state.quiniela.ticketsFilters;
        this.$store.commit('quiniela/setTicketsFilters', {
          ...filters,
          season: value,
        });
      },
    },
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
    submitForm() {
      this.$refs.form.validate();

      if (this.valid) {
        this.getTickets();
      }
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
