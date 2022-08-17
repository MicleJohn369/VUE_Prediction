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
                id="create-user-btn"
                class="float-right"
                color="success"
                dark
                nuxt
                :to="localePath({
                  name: 'admin-users-create'
                })"
              >
                <v-icon left>
                  mdi-plus
                </v-icon>
                {{ createUserButtonText }}
              </v-btn>
            </v-col>
            <v-expand-transition>
              <v-col
                v-show="showFilters"
                cols="12"
                md="8"
                offset-md="2"
              >
                <UsersFiltersForm />
              </v-col>
            </v-expand-transition>
          </v-row>
        </v-card-title>
        <v-data-table
          class="mt-5"
          :headers="headers"
          :items="users"
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
            #[`item.role`]="{ item }"
          >
            {{ getRole(item.role) }}
          </template>
          <template
            #[`item.date`]="{ item }"
          >
            {{ getFormattedDate(item.date) }}
          </template>
          <template #[`item.actions`]="{ item }">
            <v-btn
              dark
              fab
              x-small
              color="warning"
              :to="getEditUserRoute(item)"
              nuxt
            >
              <v-icon
                small
                :title="editUserTooltip"
              >
                mdi-pencil
              </v-icon>
            </v-btn>
            <v-btn
              dark
              fab
              x-small
              color="error"
              @click="deleteUser(item)"
            >
              <v-icon
                small
                :title="deleteUserTooltip"
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
              @click="cancelDeleteUser()"
            >
              {{ cancelButtonText }}
            </v-btn>
            <v-btn
              color="primary"
              text
              @click="confirmDeleteUser()"
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

import UsersFiltersForm from '@/components/admin/users/UsersFiltersForm.vue';

export default {
  components: {
    UsersFiltersForm,
  },
  mixins: [getFormattedDate],
  layout: 'admin',
  middleware: 'auth',
  data() {
    return {
      titleText: this.$t('DASHBOARD.VIEWS.USERS.TITLE'),
      items: [
        {
          text: this.$t('DASHBOARD.BREADCRUMBS.DASHBOARD'),
          disabled: false,
          to: this.localePath({
            name: 'admin',
          }),
          nuxt: true,
          exactPath: true,
        },
        {
          text: this.$t('DASHBOARD.BREADCRUMBS.USERS'),
          disabled: true,
          to: this.localePath({
            name: 'admin-users',
          }),
          nuxt: true,
          exactPath: true,
        },
      ],
      showFilters: false,
      filtersButtonText: this.$t('DASHBOARD.VIEWS.USERS.SHOW_FILTERS.TEXT'),
      createUserButtonText: this.$t('DASHBOARD.VIEWS.USERS.CREATE_USER_BUTTON.TEXT'),
      options: {
        mustSort: true,
        sortBy: ['user'],
        sortDesc: [true],
      },
      headers: [
        {
          text: this.$t('DASHBOARD.VIEWS.USERS.TABLE.USER.LABEL'),
          align: 'center',
          sortable: true,
          value: 'user',
        }, {
          text: this.$t('DASHBOARD.VIEWS.USERS.TABLE.ROLE.LABEL'),
          align: 'center',
          sortable: true,
          value: 'role',
        }, {
          text: this.$t('DASHBOARD.VIEWS.USERS.TABLE.PASSWORD.LABEL'),
          align: 'center',
          sortable: false,
          value: 'password',
        }, {
          text: this.$t('DASHBOARD.VIEWS.USERS.TABLE.REGISTER_DATE.LABEL'),
          align: 'center',
          sortable: true,
          value: 'date',
        }, {
          text: this.$t('DASHBOARD.VIEWS.USERS.TABLE.ACTIONS.LABEL'),
          align: 'center',
          sortable: false,
          value: 'actions',
        },
      ],
      editUserTooltip: this.$t('DASHBOARD.VIEWS.USERS.TABLE.ACTIONS.EDIT.TOOLTIP'),
      deleteUserTooltip: this.$t('DASHBOARD.VIEWS.USERS.TABLE.ACTIONS.DELETE.TOOLTIP'),
      adminText: this.$t('ROLES.ADMIN.TEXT'),
      privilegedText: this.$t('ROLES.PRIVILEGED.TEXT'),
      userToBeDeleted: null,
      dialog: false,
      confirmDeleteDialogTitle: this.$t('COMMON.CONFIRM_DELETE_DIALOG.TITLE'),
      confirmDeleteDialogText: this.$t('COMMON.CONFIRM_DELETE_DIALOG.TEXT'),
      cancelButtonText: this.$t('COMMON.BUTTON.CANCEL.TEXT'),
      confirmButtonText: this.$t('COMMON.BUTTON.CONFIRM.TEXT'),
    };
  },
  async fetch() {
    this.$store.commit('users/setUserPagination', {
      sort_property: this.options.sortBy[0],
      sort_type: this.options.sortDesc[0] ? 'desc' : 'asc',
    });

    return this.$store.dispatch('users/getUsers');
  },
  head() {
    return {
      title: this.$t('DASHBOARD.VIEWS.USERS.TITLE'),
    };
  },
  computed: {
    ...mapState('users', {
      loading: 'loading',
      users: (state) => state.users.data,
      total: (state) => state.users.total,
    }),
  },
  watch: {
    options: {
      handler() {
        this.getUsers();
      },
      deep: true,
    },
  },
  methods: {
    getUsers() {
      const {
        sortBy, sortDesc, page, itemsPerPage,
      } = this.options;

      this.$store.commit('users/setUserPagination', {
        page,
        per_page: itemsPerPage,
        sort_type: sortDesc[0] ? 'desc' : 'asc',
        sort_property: sortBy[0],
      });

      return this.$store.dispatch('users/getUsers');
    },
    getRole(role) {
      if (role === utils.ROLES.ADMIN.VALUE) return this.adminText;
      if (role === utils.ROLES.PRIVILEGED.VALUE) return this.privilegedText;
      return '';
    },
    toggleFilters() {
      this.showFilters = !this.showFilters;
    },
    getEditUserRoute(user) {
      return this.localePath({
        name: 'admin-users-id',
        params: {
          // eslint-disable-next-line no-underscore-dangle
          id: user._id,
        },
      });
    },
    deleteUser(user) {
      this.userToBeDeleted = user;
      this.dialog = true;
    },
    cancelDeleteUser() {
      this.userToBeDeleted = null;
      this.dialog = false;
    },
    confirmDeleteUser() {
      const userDeletedText = this.$t('DASHBOARD.VIEWS.USERS.USER_FORM.MESSAGES.DELETED', {
        user: this.userToBeDeleted.user,
      });
      // eslint-disable-next-line no-underscore-dangle
      return this.$store.dispatch('users/deleteUser', { id: this.userToBeDeleted._id })
        .then(() => this.$toast.success(userDeletedText, {
          icon: 'check',
        }))
        .then(() => this.getUsers())
        .finally(() => {
          this.cancelDeleteUser();
        });
    },
  },
};
</script>

<style lang="scss" scoped>
</style>
