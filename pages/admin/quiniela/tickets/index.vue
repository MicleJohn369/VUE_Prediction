<template>
  <v-row justify="start" align="center">
    <v-col cols="12" sm="12">
      <div class="text-h3 pb-4">
        {{ titleText }}
      </div>
      <v-card class="mb-5">
        <v-breadcrumbs
          :items="items"
        />
      </v-card>
      <v-card
        class="mb-5"
      >
        <v-card-title>
          <v-row>
            <v-col cols="12">
              <v-btn
                id="filters-btn"
                outlined
                color="primary"
                dark
                @click="toggleFilters()"
              >
                <v-icon left>
                  mdi-filter-variant
                </v-icon>
                {{ filtersButtonText }}
              </v-btn>
              <v-btn
                id="create-ticket-btn"
                class="float-right"
                color="success"
                dark
                nuxt
                :to="localePath({
                  name: 'admin-quiniela-tickets-create'
                })"
              >
                <v-icon left>
                  mdi-plus
                </v-icon>
                {{ createTicketButtonText }}
              </v-btn>
            </v-col>
            <v-expand-transition>
              <v-col
                v-show="showFilters"
                cols="12"
                md="8"
                offset-md="2"
              >
                <QuinielaTicketsFiltersForm @onSearch="search" />
              </v-col>
            </v-expand-transition>
          </v-row>
        </v-card-title>
        <v-data-table
          class="mt-5"
          :headers="headers"
          :items="tickets"
          :options.sync="options"
          :server-items-length="total"
          :loading="loading"
        >
          <template #progress>
            <v-progress-linear
              indeterminate
              absolute
              color="black"
            />
          </template>
          <template
            #[`item.season`]="{ item }"
          >
            {{ item.temporada }}
          </template>
          <template
            #[`item.date`]="{ item }"
          >
            {{ getFormattedDate(item.fecha) }}
          </template>
          <template
            #[`item.day`]="{ item }"
          >
            {{ item.jornada }}
          </template>
          <template #[`item.actions`]="{ item }">
            <v-btn
              dark
              fab
              x-small
              color="warning"
              :to="getEditTicketRoute(item)"
              nuxt
            >
              <v-icon
                small
                :title="editTicketTooltip"
              >
                mdi-pencil
              </v-icon>
            </v-btn>
            <v-btn
              dark
              fab
              x-small
              color="error"
              @click="deleteTicket(item)"
            >
              <v-icon
                small
                :title="deleteTicketTooltip"
              >
                mdi-trash-can
              </v-icon>
            </v-btn>
          </template>
        </v-data-table>
      </v-card>
      <v-dialog
        v-model="dialog"
        width="500"
      >
        <v-card>
          <v-card-title class="text-h5 grey lighten-2">
            {{ confirmDeleteDialogTitle }}
          </v-card-title>

          <v-card-text class="pt-5">
            {{ confirmDeleteDialogText }}
          </v-card-text>

          <v-divider />

          <v-card-actions>
            <v-spacer />
            <v-btn
              color="primary"
              text
              @click="cancelDeleteTicket()"
            >
              {{ cancelButtonText }}
            </v-btn>
            <v-btn
              color="primary"
              text
              @click="confirmDeleteTicket()"
            >
              {{ confirmButtonText }}
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-col>
  </v-row>
</template>

<script>
import { mapState } from 'vuex';

import utils from '@/utils';
import getFormattedDate from '@/mixins/getFormattedDate';

import QuinielaTicketsFiltersForm from '~/components/admin/quiniela/tickets/QuinielaTicketsFiltersForm.vue';

export default {
  components: {
    QuinielaTicketsFiltersForm,
  },
  nuxtI18n: {
    paths: {
      es: '/admin/quiniela/sorteos',
    },
  },
  mixins: [getFormattedDate],
  layout: 'admin',
  middleware: 'auth',
  data() {
    return {
      titleText: this.$t('DASHBOARD.VIEWS.QUINIELA.TICKETS.TITLE'),
      items: [
        {
          text: this.$t('DASHBOARD.BREADCRUMBS.DASHBOARD.TEXT'),
          disabled: false,
          to: this.localePath({
            name: 'admin',
          }),
          nuxt: true,
          exactPath: true,
        },
        {
          text: this.$t('DASHBOARD.BREADCRUMBS.QUINIELA.TEXT'),
          disabled: true,
          nuxt: true,
          exactPath: true,
        },
        {
          text: this.$t('DASHBOARD.BREADCRUMBS.QUINIELA.TICKETS.TEXT'),
          disabled: true,
          to: this.localePath({
            name: 'admin-quiniela-tickets',
          }),
          nuxt: true,
          exactPath: true,
        },
      ],
      showFilters: false,
      filtersButtonText: this.$t('DASHBOARD.VIEWS.QUINIELA.TICKETS.SHOW_FILTERS.TEXT'),
      createTicketButtonText: this.$t('DASHBOARD.VIEWS.QUINIELA.TICKETS.CREATE_TICKET_BUTTON.TEXT'),
      options: {
        mustSort: true,
        sortBy: ['date'],
        sortDesc: [true],
        page: 1,
        itemsPerPage: 10,
      },
      headers: [
        {
          text: this.$t('DASHBOARD.VIEWS.QUINIELA.TICKETS.TABLE.SEASON.LABEL'),
          align: 'center',
          sortable: true,
          value: 'season',
        }, {
          text: this.$t('DASHBOARD.VIEWS.QUINIELA.TICKETS.TABLE.DATE.LABEL'),
          align: 'center',
          sortable: true,
          value: 'date',
        }, {
          text: this.$t('DASHBOARD.VIEWS.QUINIELA.TICKETS.TABLE.DAY.LABEL'),
          align: 'center',
          sortable: true,
          value: 'day',
        }, {
          text: this.$t('DASHBOARD.VIEWS.QUINIELA.TICKETS.TABLE.ACTIONS.LABEL'),
          align: 'center',
          sortable: false,
          value: 'actions',
        },
      ],
      editTicketTooltip: this.$t('DASHBOARD.VIEWS.QUINIELA.TICKETS.TABLE.ACTIONS.EDIT.TOOLTIP'),
      deleteTicketTooltip: this.$t('DASHBOARD.VIEWS.QUINIELA.TICKETS.TABLE.ACTIONS.DELETE.TOOLTIP'),
      adminText: this.$t('ROLES.ADMIN.TEXT'),
      privilegedText: this.$t('ROLES.PRIVILEGED.TEXT'),
      ticketToBeDeleted: null,
      dialog: false,
      confirmDeleteDialogTitle: this.$t('COMMON.CONFIRM_DELETE_DIALOG.TITLE'),
      confirmDeleteDialogText: this.$t('COMMON.CONFIRM_DELETE_DIALOG.TEXT'),
      cancelButtonText: this.$t('COMMON.BUTTON.CANCEL.TEXT'),
      confirmButtonText: this.$t('COMMON.BUTTON.CONFIRM.TEXT'),
    };
  },
  async fetch() {
    const {
      sortBy, sortDesc, page, itemsPerPage,
    } = this.options;

    this.$store.commit('quiniela/setTicketsPagination', {
      page,
      per_page: itemsPerPage,
      sort_type: sortDesc[0] ? 'desc' : 'asc',
      sort_property: sortBy[0],
    });

    return Promise.all([
      this.$store.dispatch('quiniela/getTickets'),
      this.$store.dispatch('quiniela/getSeasons'),
    ]);
  },
  head() {
    return {
      title: this.$t('DASHBOARD.VIEWS.QUINIELA.TICKETS.TITLE'),
    };
  },
  computed: {
    ...mapState('quiniela', {
      loading: 'loading',
      tickets: (state) => state.tickets.data,
      total: (state) => state.tickets.total,
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
  methods: {
    getTickets() {
      if (this.loading) {
        return;
      }

      const {
        sortBy, sortDesc, page, itemsPerPage,
      } = this.options;

      this.$store.commit('quiniela/setTicketsPagination', {
        page,
        per_page: itemsPerPage,
        sort_type: sortDesc[0] ? 'desc' : 'asc',
        sort_property: sortBy[0],
      });

      // eslint-disable-next-line consistent-return
      return this.$store.dispatch('quiniela/getTickets');
    },
    getRole(role) {
      if (role === utils.ROLES.ADMIN.VALUE) return this.adminText;
      if (role === utils.ROLES.PRIVILEGED.VALUE) return this.privilegedText;
      return '';
    },
    toggleFilters() {
      this.showFilters = !this.showFilters;
    },
    getEditTicketRoute(ticket) {
      return this.localePath({
        name: 'admin-quiniela-tickets-id',
        params: {
          // eslint-disable-next-line no-underscore-dangle
          id: ticket._id,
        },
      });
    },
    deleteTicket(ticket) {
      this.ticketToBeDeleted = ticket;
      this.dialog = true;
    },
    cancelDeleteTicket() {
      this.ticketToBeDeleted = null;
      this.dialog = false;
    },
    confirmDeleteTicket() {
      const ticketDeletedText = this.$t('DASHBOARD.VIEWS.QUINIELA.TICKETS.MESSAGES.DELETED', {
        ticket: this.ticketToBeDeleted.name,
      });
      // eslint-disable-next-line no-underscore-dangle
      return this.$store.dispatch('quiniela/deleteTicket', { id: this.ticketToBeDeleted._id })
        .then(() => this.$toast.success(ticketDeletedText, {
          icon: 'check',
        }))
        .then(() => this.getTickets())
        .catch(() => {
          this.$toast.error(this.$t('DASHBOARD.VIEWS.QUINIELA.TICKETS.MESSAGES.DELETE_ERROR', {
            ticket: this.ticketToBeDeleted.name,
          }));
        })
        .finally(() => {
          this.cancelDeleteTicket();
        });
    },
    search() {
      const {
        sortBy, sortDesc, itemsPerPage,
      } = this.options;

      this.$store.commit('quiniela/setTicketsPagination', {
        page: 1,
        per_page: itemsPerPage,
        sort_type: sortDesc[0] ? 'desc' : 'asc',
        sort_property: sortBy[0],
      });

      return this.$store.dispatch('quiniela/getTickets');
    },
  },
};
</script>

<style lang="scss" scoped>
</style>
