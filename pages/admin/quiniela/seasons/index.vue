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
                id="create-season-btn"
                class="float-right"
                color="success"
                dark
                nuxt
                :to="localePath({
                  name: 'admin-quiniela-seasons-create'
                })"
              >
                <v-icon left>
                  mdi-plus
                </v-icon>
                {{ createSeasonButtonText }}
              </v-btn>
            </v-col>
            <v-expand-transition>
              <v-col
                v-show="showFilters"
                cols="12"
                md="8"
                offset-md="2"
              >
                <QuinielaSeasonsFiltersForm @onSearch="search" />
              </v-col>
            </v-expand-transition>
          </v-row>
        </v-card-title>
        <v-data-table
          class="mt-5"
          :headers="headers"
          :items="seasons"
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
              :to="getEditSeasonRoute(item)"
              nuxt
            >
              <v-icon
                small
                :title="editSeasonTooltip"
              >
                mdi-pencil
              </v-icon>
            </v-btn>
            <v-btn
              dark
              fab
              x-small
              color="error"
              @click="deleteSeason(item)"
            >
              <v-icon
                small
                :title="deleteSeasonTooltip"
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
              @click="cancelDeleteSeason()"
            >
              {{ cancelButtonText }}
            </v-btn>
            <v-btn
              color="primary"
              text
              @click="confirmDeleteSeason()"
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

import QuinielaSeasonsFiltersForm from '~/components/admin/quiniela/seasons/QuinielaSeasonsFiltersForm.vue';

export default {
  components: {
    QuinielaSeasonsFiltersForm,
  },
  nuxtI18n: {
    paths: {
      es: '/admin/quiniela/temporadas',
    },
  },
  mixins: [getFormattedDate],
  layout: 'admin',
  middleware: 'auth',
  data() {
    return {
      titleText: this.$t('DASHBOARD.VIEWS.QUINIELA.SEASONS.TITLE'),
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
          text: this.$t('DASHBOARD.BREADCRUMBS.QUINIELA.SEASONS.TEXT'),
          disabled: true,
          to: this.localePath({
            name: 'admin-quiniela-seasons',
          }),
          nuxt: true,
          exactPath: true,
        },
      ],
      showFilters: false,
      filtersButtonText: this.$t('DASHBOARD.VIEWS.QUINIELA.SEASONS.SHOW_FILTERS.TEXT'),
      createSeasonButtonText: this.$t('DASHBOARD.VIEWS.QUINIELA.SEASONS.CREATE_SEASON_BUTTON.TEXT'),
      options: {
        mustSort: true,
        sortBy: ['name'],
        sortDesc: [true],
        page: 1,
        itemsPerPage: 10,
      },
      headers: [
        {
          text: this.$t('DASHBOARD.VIEWS.QUINIELA.SEASONS.TABLE.NAME.LABEL'),
          align: 'center',
          sortable: true,
          value: 'name',
        }, {
          text: this.$t('DASHBOARD.VIEWS.QUINIELA.SEASONS.TABLE.ACTIONS.LABEL'),
          align: 'center',
          sortable: false,
          value: 'actions',
        },
      ],
      editSeasonTooltip: this.$t('DASHBOARD.VIEWS.QUINIELA.SEASONS.TABLE.ACTIONS.EDIT.TOOLTIP'),
      deleteSeasonTooltip: this.$t('DASHBOARD.VIEWS.QUINIELA.SEASONS.TABLE.ACTIONS.DELETE.TOOLTIP'),
      adminText: this.$t('ROLES.ADMIN.TEXT'),
      privilegedText: this.$t('ROLES.PRIVILEGED.TEXT'),
      seasonToBeDeleted: null,
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

    this.$store.commit('quiniela/setSeasonsPagination', {
      page,
      per_page: itemsPerPage,
      sort_type: sortDesc[0] ? 'desc' : 'asc',
      sort_property: sortBy[0],
    });

    return this.$store.dispatch('quiniela/getSeasons');
  },
  head() {
    return {
      title: this.$t('DASHBOARD.VIEWS.QUINIELA.SEASONS.TITLE'),
    };
  },
  computed: {
    ...mapState('quiniela', {
      loading: 'loading',
      seasons: (state) => state.seasons.data,
      total: (state) => state.seasons.total,
    }),
  },
  watch: {
    options: {
      handler() {
        this.getSeasons();
      },
      deep: true,
    },
  },
  methods: {
    getSeasons() {
      if (this.loading) {
        return;
      }

      const {
        sortBy, sortDesc, page, itemsPerPage,
      } = this.options;

      this.$store.commit('quiniela/setSeasonsPagination', {
        page,
        per_page: itemsPerPage,
        sort_type: sortDesc[0] ? 'desc' : 'asc',
        sort_property: sortBy[0],
      });

      // eslint-disable-next-line consistent-return
      return this.$store.dispatch('quiniela/getSeasons');
    },
    getRole(role) {
      if (role === utils.ROLES.ADMIN.VALUE) return this.adminText;
      if (role === utils.ROLES.PRIVILEGED.VALUE) return this.privilegedText;
      return '';
    },
    toggleFilters() {
      this.showFilters = !this.showFilters;
    },
    getEditSeasonRoute(season) {
      return this.localePath({
        name: 'admin-quiniela-seasons-id',
        params: {
          // eslint-disable-next-line no-underscore-dangle
          id: season._id,
        },
      });
    },
    deleteSeason(season) {
      this.seasonToBeDeleted = season;
      this.dialog = true;
    },
    cancelDeleteSeason() {
      this.seasonToBeDeleted = null;
      this.dialog = false;
    },
    confirmDeleteSeason() {
      const seasonDeletedText = this.$t('DASHBOARD.VIEWS.QUINIELA.SEASONS.MESSAGES.DELETED', {
        season: this.seasonToBeDeleted.name,
      });
      // eslint-disable-next-line no-underscore-dangle
      return this.$store.dispatch('quiniela/deleteSeason', { id: this.seasonToBeDeleted._id })
        .then(() => this.$toast.success(seasonDeletedText, {
          icon: 'check',
        }))
        .then(() => this.getSeasons())
        .catch(() => {
          this.$toast.error(this.$t('DASHBOARD.VIEWS.QUINIELA.SEASONS.MESSAGES.DELETE_ERROR', {
            season: this.seasonToBeDeleted.name,
          }));
        })
        .finally(() => {
          this.cancelDeleteSeason();
        });
    },
    search() {
      const {
        sortBy, sortDesc, itemsPerPage,
      } = this.options;

      this.$store.commit('quiniela/setSeasonsPagination', {
        page: 1,
        per_page: itemsPerPage,
        sort_type: sortDesc[0] ? 'desc' : 'asc',
        sort_property: sortBy[0],
      });

      return this.$store.dispatch('quiniela/getSeasons');
    },
  },
};
</script>

<style lang="scss" scoped>
</style>
