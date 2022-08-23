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
                id="create-competition-btn"
                class="float-right"
                color="success"
                dark
                nuxt
                :to="localePath({
                  name: 'admin-quiniela-competitions-create'
                })"
              >
                <v-icon left>
                  mdi-plus
                </v-icon>
                {{ createCompetitionButtonText }}
              </v-btn>
            </v-col>
            <v-expand-transition>
              <v-col
                v-show="showFilters"
                cols="12"
                md="8"
                offset-md="2"
              >
                <QuinielaCompetitionsFiltersForm @onSearch="search" />
              </v-col>
            </v-expand-transition>
          </v-row>
        </v-card-title>
        <v-data-table
          class="mt-5"
          :headers="headers"
          :items="competitions"
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
          <template #[`item.actions`]="{ item }">
            <v-btn
              dark
              fab
              x-small
              color="warning"
              :to="getEditCompetitionRoute(item)"
              nuxt
            >
              <v-icon
                small
                :title="editCompetitionTooltip"
              >
                mdi-pencil
              </v-icon>
            </v-btn>
            <v-btn
              dark
              fab
              x-small
              color="error"
              @click="deleteCompetition(item)"
            >
              <v-icon
                small
                :title="deleteCompetitionTooltip"
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
              @click="cancelDeleteCompetition()"
            >
              {{ cancelButtonText }}
            </v-btn>
            <v-btn
              color="primary"
              text
              @click="confirmDeleteCompetition()"
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

import QuinielaCompetitionsFiltersForm from '~/components/admin/quiniela/competitions/QuinielaCompetitionsFiltersForm.vue';

export default {
  components: {
    QuinielaCompetitionsFiltersForm,
  },
  nuxtI18n: {
    paths: {
      es: '/admin/quiniela/competiciones',
    },
  },
  mixins: [getFormattedDate],
  layout: 'admin',
  middleware: 'auth',
  data() {
    return {
      titleText: this.$t('DASHBOARD.VIEWS.QUINIELA.COMPETITIONS.TITLE'),
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
          text: this.$t('DASHBOARD.BREADCRUMBS.QUINIELA.COMPETITIONS.TEXT'),
          disabled: true,
          to: this.localePath({
            name: 'admin-quiniela-competitions',
          }),
          nuxt: true,
          exactPath: true,
        },
      ],
      showFilters: false,
      filtersButtonText: this.$t('DASHBOARD.VIEWS.QUINIELA.COMPETITIONS.SHOW_FILTERS.TEXT'),
      createCompetitionButtonText: this.$t('DASHBOARD.VIEWS.QUINIELA.COMPETITIONS.CREATE_COMPETITION_BUTTON.TEXT'),
      options: {
        mustSort: true,
        sortBy: ['name'],
        sortDesc: [false],
        page: 1,
        itemsPerPage: 10,
      },
      headers: [
        {
          text: this.$t('DASHBOARD.VIEWS.QUINIELA.COMPETITIONS.TABLE.NAME.LABEL'),
          align: 'center',
          sortable: true,
          value: 'name',
        }, {
          text: this.$t('DASHBOARD.VIEWS.QUINIELA.COMPETITIONS.TABLE.ACTIONS.LABEL'),
          align: 'center',
          sortable: false,
          value: 'actions',
        },
      ],
      editCompetitionTooltip: this.$t('DASHBOARD.VIEWS.QUINIELA.COMPETITIONS.TABLE.ACTIONS.EDIT.TOOLTIP'),
      deleteCompetitionTooltip: this.$t('DASHBOARD.VIEWS.QUINIELA.COMPETITIONS.TABLE.ACTIONS.DELETE.TOOLTIP'),
      adminText: this.$t('ROLES.ADMIN.TEXT'),
      privilegedText: this.$t('ROLES.PRIVILEGED.TEXT'),
      competitionToBeDeleted: null,
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

    this.$store.commit('quiniela/setCompetitionsPagination', {
      page,
      per_page: itemsPerPage,
      sort_type: sortDesc[0] ? 'desc' : 'asc',
      sort_property: sortBy[0],
    });

    return this.$store.dispatch('quiniela/getCompetitions');
  },
  head() {
    return {
      title: this.$t('DASHBOARD.VIEWS.QUINIELA.COMPETITIONS.TITLE'),
    };
  },
  computed: {
    ...mapState('quiniela', {
      loading: 'loading',
      competitions: (state) => state.competitions.data,
      total: (state) => state.competitions.total,
    }),
  },
  watch: {
    options: {
      handler() {
        this.getCompetitions();
      },
      deep: true,
    },
  },
  methods: {
    getCompetitions() {
      if (this.loading) {
        return;
      }

      const {
        sortBy, sortDesc, page, itemsPerPage,
      } = this.options;

      this.$store.commit('quiniela/setCompetitionsPagination', {
        page,
        per_page: itemsPerPage,
        sort_type: sortDesc[0] ? 'desc' : 'asc',
        sort_property: sortBy[0],
      });

      // eslint-disable-next-line consistent-return
      return this.$store.dispatch('quiniela/getCompetitions');
    },
    getRole(role) {
      if (role === utils.ROLES.ADMIN.VALUE) return this.adminText;
      if (role === utils.ROLES.PRIVILEGED.VALUE) return this.privilegedText;
      return '';
    },
    toggleFilters() {
      this.showFilters = !this.showFilters;
    },
    getEditCompetitionRoute(competition) {
      return this.localePath({
        name: 'admin-quiniela-competitions-id',
        params: {
          // eslint-disable-next-line no-underscore-dangle
          id: competition._id,
        },
      });
    },
    deleteCompetition(competition) {
      this.competitionToBeDeleted = competition;
      this.dialog = true;
    },
    cancelDeleteCompetition() {
      this.competitionToBeDeleted = null;
      this.dialog = false;
    },
    confirmDeleteCompetition() {
      const competitionDeletedText = this.$t('DASHBOARD.VIEWS.QUINIELA.COMPETITIONS.MESSAGES.DELETED', {
        competition: this.competitionToBeDeleted.name,
      });
      // eslint-disable-next-line no-underscore-dangle
      return this.$store.dispatch('quiniela/deleteCompetition', { id: this.competitionToBeDeleted._id })
        .then(() => this.$toast.success(competitionDeletedText, {
          icon: 'check',
        }))
        .then(() => this.getCompetitions())
        .catch(() => {
          this.$toast.error(this.$t('DASHBOARD.VIEWS.QUINIELA.COMPETITIONS.MESSAGES.DELETE_ERROR', {
            competition: this.competitionToBeDeleted.name,
          }));
        })
        .finally(() => {
          this.cancelDeleteCompetition();
        });
    },
    search() {
      const {
        sortBy, sortDesc, itemsPerPage,
      } = this.options;

      this.$store.commit('quiniela/setCompetitionsPagination', {
        page: 1,
        per_page: itemsPerPage,
        sort_type: sortDesc[0] ? 'desc' : 'asc',
        sort_property: sortBy[0],
      });

      return this.$store.dispatch('quiniela/getCompetitions');
    },
  },
};
</script>

<style lang="scss" scoped>
</style>
