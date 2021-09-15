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
      <div class="text-h2 my-3 pb-4 purple--text text--darken-4">
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
            <template #progress>
              <v-progress-linear
                indeterminate
                absolute
                color="purple darken-4"
              />
            </template>
            <template #[`item.date`]="{ item }">
              {{ getFormattedDate(item.fecha) }}
            </template>
            <template #[`item.actions`]="{ item }">
              <v-btn
                dark
                fab
                x-small
                color="blue"
                :to="localePath({
                  name: 'euromillones-tickets-year-raffle',
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
  name: 'EuromillonesTickets',
  components: {
    ScrollButton,
  },
  nuxtI18n: {
    paths: {
      es: '/euromillones/sorteos',
    },
  },
  mixins: [
    getFormattedDateMixin,
  ],
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
          text: this.$t('BREADCRUMBS.EUROMILLONES.TEXT'),
          disabled: true,
        }, {
          text: this.$t('BREADCRUMBS.EUROMILLONES.TICKETS.TEXT'),
          disabled: true,
        },
      ],
      options: {
        mustSort: true,
        sortBy: ['date'],
        sortDesc: [true],
      },
      headers: [
        {
          text: this.$t('VIEWS.EUROMILLONES.TICKETS.TABLE.RAFFLE.LABEL'),
          align: 'center',
          sortable: false,
          value: 'sorteo',
        }, {
          text: this.$t('VIEWS.EUROMILLONES.TICKETS.TABLE.DATE.LABEL'),
          align: 'center',
          sortable: true,
          value: 'date',
        }, {
          text: this.$t('VIEWS.EUROMILLONES.TICKETS.TABLE.ACTIONS.LABEL'),
          align: 'center',
          sortable: false,
          value: 'actions',
        },
      ],
      valid: false,
      titleText: this.$t('VIEWS.EUROMILLONES.TICKETS.TITLE'),
      ticketsIntroText: this.$t('VIEWS.EUROMILLONES.TICKETS.INTRO_TEXT'),
      yearText: this.$t('VIEWS.EUROMILLONES.TICKETS.FILTERS.YEAR.LABEL'),
      searchText: this.$t('VIEWS.EUROMILLONES.TICKETS.FILTERS.SEARCH.TEXT'),
      detailTicketTooltip: this.$t('VIEWS.EUROMILLONES.TICKETS.TABLE.ACTIONS.SEE.TOOLTIP'),
    };
  },
  async fetch() {
    this.$store.commit('euromillones/setTicketPagination', {
      sort_property: this.options.sortBy[0],
      sort_type: this.options.sortDesc[0] ? 'desc' : 'asc',
    });

    // TODO: Implementar ordenación de años de El Euromillones en servidor

    this.$store.commit('euromillones/setYearsPagination', {
      sort_type: 'desc',
    });

    return Promise.all([
      this.$store.dispatch('euromillones/getYears'),
    ])
      .then(() => this.$store.dispatch('euromillones/getTickets'));
  },

  head() {
    const seoInfo = {
      title: '🌟 Euromillones | Histórico de sorteos de Euromillones',
      metas: {
        description: 'Apartado en el que poder consultar el histórico de sorteos de Euromillones. ⚡ Se pueden filtrar por año.',
        keywords: 'euromillones, histórico, historico, sorteos',
        canonical_url: 'https://www.pronostigol.es/euromillones/sorteos',
        og_title: '🌟 Euromillones | Histórico de sorteos de Euromillones',
        og_type: 'website',
        og_image: 'https://www.pronostigol.es/img/logo-euromillones.png',
        og_url: 'https://www.pronostigol.es/euromillones',
        og_description: 'Apartado en el que poder consultar el histórico de sorteos de Euromillones. ⚡ Se pueden filtrar por año.',
        og_site_name: 'Pronostigol',
        twitter_site: '@pronostigolesp',
        twitter_card: 'summary_large_image',
        twitter_image: 'https://www.pronostigol.es/img/logo-euromillones.png',
        twitter_title: '🌟 Euromillones | Histórico de sorteos de Euromillones',
        twitter_description: 'Apartado en el que poder consultar el histórico de sorteos de Euromillones. ⚡ Se pueden filtrar por año.',
      },
    };

    return utils.getCommonMetas(seoInfo);
  },
  computed: {
    ...mapState('euromillones', {
      tickets: (state) => state.tickets.data,
      total: (state) => state.tickets.total,
      pagination: 'ticketsPagination',
      years: (state) => state.years,
      loading: 'loading',
    }),
    year: {
      get() {
        return this.$store.state.euromillones.ticketsFilters.year;
      },
      set(value) {
        const filters = this.$store.state.euromillones.ticketsFilters;
        this.$store.commit('euromillones/setTicketsFilters', {
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
    this.$store.dispatch('euromillones/destroyTickets');
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

      this.$store.commit('euromillones/setTicketPagination', {
        page,
        per_page: itemsPerPage,
        sort_type: sortDesc[0] ? 'desc' : 'asc',
        sort_property: sortBy[0],
      });

      this.$store.dispatch('euromillones/getTickets');
    },
  },
};
</script>
