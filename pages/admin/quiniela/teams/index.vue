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
                id="create-team-btn"
                class="float-right"
                color="success"
                dark
                nuxt
                :to="localePath({
                  name: 'admin-quiniela-teams-create'
                })"
              >
                <v-icon left>
                  mdi-plus
                </v-icon>
                {{ createTeamButtonText }}
              </v-btn>
            </v-col>
            <v-expand-transition>
              <v-col
                v-show="showFilters"
                cols="12"
                md="8"
                offset-md="2"
              >
                <QuinielaTeamsFiltersForm @onSearch="search" />
              </v-col>
            </v-expand-transition>
          </v-row>
        </v-card-title>
        <v-data-table
          class="mt-5"
          :headers="headers"
          :items="teams"
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
              :to="getEditTeamRoute(item)"
              nuxt
            >
              <v-icon
                small
                :title="editTeamTooltip"
              >
                mdi-pencil
              </v-icon>
            </v-btn>
            <v-btn
              dark
              fab
              x-small
              color="error"
              @click="deleteTeam(item)"
            >
              <v-icon
                small
                :title="deleteTeamTooltip"
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
              @click="canceldeleteTeam()"
            >
              {{ cancelButtonText }}
            </v-btn>
            <v-btn
              color="primary"
              text
              @click="confirmdeleteTeam()"
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

import QuinielaTeamsFiltersForm from '~/components/admin/quiniela/teams/QuinielaTeamsFiltersForm.vue';

export default {
  components: {
    QuinielaTeamsFiltersForm,
  },
  nuxtI18n: {
    paths: {
      es: '/admin/quiniela/equipos',
    },
  },
  mixins: [getFormattedDate],
  layout: 'admin',
  middleware: 'auth',
  data() {
    return {
      titleText: this.$t('DASHBOARD.VIEWS.QUINIELA.TEAMS.TITLE'),
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
          text: this.$t('DASHBOARD.BREADCRUMBS.QUINIELA.TEAMS.TEXT'),
          disabled: true,
          to: this.localePath({
            name: 'admin-quiniela-teams',
          }),
          nuxt: true,
          exactPath: true,
        },
      ],
      showFilters: false,
      filtersButtonText: this.$t('DASHBOARD.VIEWS.QUINIELA.TEAMS.SHOW_FILTERS.TEXT'),
      createTeamButtonText: this.$t('DASHBOARD.VIEWS.QUINIELA.TEAMS.CREATE_TEAM_BUTTON.TEXT'),
      options: {
        mustSort: true,
        sortBy: ['name'],
        sortDesc: [false],
        page: 1,
        itemsPerPage: 10,
      },
      headers: [
        {
          text: this.$t('DASHBOARD.VIEWS.QUINIELA.TEAMS.TABLE.NAME.LABEL'),
          align: 'center',
          sortable: true,
          value: 'name',
        }, {
          text: this.$t('DASHBOARD.VIEWS.QUINIELA.TEAMS.TABLE.ACTIONS.LABEL'),
          align: 'center',
          sortable: false,
          value: 'actions',
        },
      ],
      editTeamTooltip: this.$t('DASHBOARD.VIEWS.QUINIELA.TEAMS.TABLE.ACTIONS.EDIT.TOOLTIP'),
      deleteTeamTooltip: this.$t('DASHBOARD.VIEWS.QUINIELA.TEAMS.TABLE.ACTIONS.DELETE.TOOLTIP'),
      adminText: this.$t('ROLES.ADMIN.TEXT'),
      privilegedText: this.$t('ROLES.PRIVILEGED.TEXT'),
      teamToBeDeleted: null,
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

    this.$store.commit('quiniela/setTeamsPagination', {
      page,
      per_page: itemsPerPage,
      sort_type: sortDesc[0] ? 'desc' : 'asc',
      sort_property: sortBy[0],
    });

    return this.$store.dispatch('quiniela/getTeams');
  },
  head() {
    return {
      title: this.$t('DASHBOARD.VIEWS.QUINIELA.TEAMS.TITLE'),
    };
  },
  computed: {
    ...mapState('quiniela', {
      loading: 'loading',
      teams: (state) => state.teams.data,
      total: (state) => state.teams.total,
    }),
  },
  watch: {
    options: {
      handler() {
        this.getTeams();
      },
      deep: true,
    },
  },
  methods: {
    getTeams() {
      if (this.loading) {
        return;
      }

      const {
        sortBy, sortDesc, page, itemsPerPage,
      } = this.options;

      this.$store.commit('quiniela/setTeamsPagination', {
        page,
        per_page: itemsPerPage,
        sort_type: sortDesc[0] ? 'desc' : 'asc',
        sort_property: sortBy[0],
      });

      // eslint-disable-next-line consistent-return
      return this.$store.dispatch('quiniela/getTeams');
    },
    getRole(role) {
      if (role === utils.ROLES.ADMIN.VALUE) return this.adminText;
      if (role === utils.ROLES.PRIVILEGED.VALUE) return this.privilegedText;
      return '';
    },
    toggleFilters() {
      this.showFilters = !this.showFilters;
    },
    getEditTeamRoute(team) {
      return this.localePath({
        name: 'admin-quiniela-teams-id',
        params: {
          // eslint-disable-next-line no-underscore-dangle
          id: team._id,
        },
      });
    },
    deleteTeam(team) {
      this.teamToBeDeleted = team;
      this.dialog = true;
    },
    cancelDeleteTeam() {
      this.teamToBeDeleted = null;
      this.dialog = false;
    },
    confirmDeleteTeam() {
      const teamDeletedText = this.$t('DASHBOARD.VIEWS.QUINIELA.TEAMS.MESSAGES.DELETED', {
        team: this.teamToBeDeleted.name,
      });
      // eslint-disable-next-line no-underscore-dangle
      return this.$store.dispatch('quiniela/deleteTeam', { id: this.teamToBeDeleted._id })
        .then(() => this.$toast.success(teamDeletedText, {
          icon: 'check',
        }))
        .then(() => this.getTeams())
        .catch(() => {
          this.$toast.error(this.$t('DASHBOARD.VIEWS.QUINIELA.TEAMS.MESSAGES.DELETE_ERROR', {
            team: this.teamToBeDeleted.name,
          }));
        })
        .finally(() => {
          this.cancelDeleteTeam();
        });
    },
    search() {
      const {
        sortBy, sortDesc, itemsPerPage,
      } = this.options;

      this.$store.commit('quiniela/setTeamsPagination', {
        page: 1,
        per_page: itemsPerPage,
        sort_type: sortDesc[0] ? 'desc' : 'asc',
        sort_property: sortBy[0],
      });

      return this.$store.dispatch('quiniela/getTeams');
    },
  },
};
</script>

<style lang="scss" scoped>
</style>
