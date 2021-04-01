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
      <div class="text-h2 my-3 pb-4 green--text text--darken-2">
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
                v-model="year"
                :items="years"
                :label="yearText"
                item-text="name"
                item-value="value"
                clearable
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
                  name: 'primitiva-tickets-year-raffle',
                  params: {
                    year: item.anyo,
                    raffle: item.sorteo,
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

import ScrollButton from '@/components/ScrollButton.vue';

export default {
  name: 'PrimitivaTickets',
  components: {
    ScrollButton,
  },
  nuxtI18n: {
    paths: {
      es: '/primitiva/sorteos',
    },
  },
  mixins: [
    getFormattedDateMixin,
  ],
  async fetch() {
    this.$store.commit('primitiva/setTicketPagination', {
      sort_property: this.options.sortBy[0],
      sort_type: this.options.sortDesc[0] ? 'desc' : 'asc',
    });

    // TODO: Implementar ordenación de años de Primitiva en servidor

    this.$store.commit('primitiva/setYearsPagination', {
      sort_type: 'desc',
    });

    return Promise.all([
      this.$store.dispatch('primitiva/getYears'),
    ])
      .then(() => this.$store.dispatch('primitiva/getTickets'));
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
          text: this.$t('BREADCRUMBS.PRIMITIVA.TEXT'),
          disabled: true,
        }, {
          text: this.$t('BREADCRUMBS.PRIMITIVA.TICKETS.TEXT'),
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
          text: this.$t('VIEWS.PRIMITIVA.TICKETS.TABLE.RAFFLE.LABEL'),
          align: 'center',
          sortable: false,
          value: 'sorteo',
        }, {
          text: this.$t('VIEWS.PRIMITIVA.TICKETS.TABLE.DATE.LABEL'),
          align: 'center',
          sortable: true,
          value: 'fecha',
        }, {
          text: this.$t('VIEWS.PRIMITIVA.TICKETS.TABLE.ACTIONS.LABEL'),
          align: 'center',
          sortable: false,
          value: 'actions',
        },
      ],
      valid: false,
      titleText: this.$t('VIEWS.PRIMITIVA.TICKETS.TITLE'),
      ticketsIntroText: this.$t('VIEWS.PRIMITIVA.TICKETS.INTRO_TEXT'),
      yearText: this.$t('VIEWS.PRIMITIVA.TICKETS.FILTERS.YEAR.LABEL'),
      searchText: this.$t('VIEWS.PRIMITIVA.TICKETS.FILTERS.SEARCH.TEXT'),
      detailTicketTooltip: this.$t('VIEWS.PRIMITIVA.TICKETS.TABLE.ACTIONS.SEE.TOOLTIP'),
    };
  },
  computed: {
    ...mapState('primitiva', {
      tickets: (state) => state.tickets.data,
      total: (state) => state.tickets.total,
      pagination: 'ticketsPagination',
      years: (state) => state.years,
      loading: 'loading',
    }),
    year: {
      get() {
        return this.$store.state.primitiva.ticketsFilters.year;
      },
      set(value) {
        const filters = this.$store.state.primitiva.ticketsFilters;
        this.$store.commit('primitiva/setTicketsFilters', {
          ...filters,
          year: value,
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
    this.$store.dispatch('primitiva/destroyTickets');
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

      this.$store.commit('primitiva/setTicketPagination', {
        page,
        per_page: itemsPerPage,
        sort_type: sortDesc[0] ? 'desc' : 'asc',
        sort_property: sortBy[0],
      });

      this.$store.dispatch('primitiva/getTickets');
    },
  },
  head() {
    const seoInfo = {
      title: '🍀 Primitiva | Histórico de sorteos de la Primitiva',
      metas: {
        description: 'Apartado en el que poder consultar el histórico de sorteos de la Primitiva. ⚡ Se pueden filtrar por año.',
        keywords: 'primitiva, histórico, historico, sorteos',
        canonical_url: 'https://www.pronostigol.es/primitiva/sorteos',
        og_title: '🍀 Primitiva | Histórico de sorteos de la Primitiva',
        og_type: 'website',
        og_image: 'https://www.pronostigol.es/img/logo-primitiva.png',
        og_url: 'https://www.pronostigol.es/primitiva',
        og_description: 'Apartado en el que poder consultar el histórico de sorteos de la primitiva. ⚡ Se pueden filtrar por año.',
        og_site_name: 'Pronostigol',
        twitter_site: '@pronostigolesp',
        twitter_card: 'summary_large_image',
        twitter_image: 'https://www.pronostigol.es/img/logo-primitiva.png',
        twitter_title: '🍀 Primitiva | Histórico de sorteos de la Primitiva',
        twitter_description: 'Apartado en el que poder consultar el histórico de sorteos de la Primitiva. ⚡ Se pueden filtrar por año.',
      },
    };

    return utils.getCommonMetas(seoInfo);
  },
};
</script>
