<template>
  <v-form
    ref="form"
    v-model="valid"
    @submit.prevent="submitForm"
  >
    <v-container fluid>
      <v-row>
        <v-col
          cols="12"
          md="6"
        >
          <v-text-field
            v-model="user"
            :rules="rules.user"
            :label="userText"
            clearable
          />
        </v-col>
        <v-col
          cols="12"
          md="6"
        >
          <v-autocomplete
            v-model="role"
            :rules="rules.role"
            :items="roles"
            :label="roleText"
            item-text="name"
            item-value="value"
            clearable
          />
        </v-col>
      </v-row>
      <v-row
        justify="center"
      >
        <v-col
          cols="auto"
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
</template>

<script>
import utils from '@/utils';

export default {
  name: 'UsersFiltersForm',
  props: {},
  data() {
    return {
      rules: {
        user: [],
        role: [],
      },
      valid: false,
      userText: this.$t('DASHBOARD.VIEWS.USERS.FILTERS.USER.LABEL'),
      roleText: this.$t('DASHBOARD.VIEWS.USERS.FILTERS.ROLE.LABEL'),
      searchText: this.$t('COMMON.BUTTON.SEARCH.TEXT'),
      roles: [
        {
          name: this.$t('ROLES.ADMIN.TEXT'),
          value: utils.ROLES.ADMIN.VALUE,
        }, {
          name: this.$t('ROLES.PRIVILEGED.TEXT'),
          value: utils.ROLES.PRIVILEGED.VALUE,
        },
      ],
    };
  },
  computed: {
    user: {
      get() {
        return this.$store.state.users.usersFilters.user;
      },
      set(value) {
        const filters = this.$store.state.users.usersFilters;
        this.$store.commit('users/setUsersFilters', {
          ...filters,
          user: value,
        });
      },
    },
    role: {
      get() {
        return this.$store.state.users.usersFilters.role;
      },
      set(value) {
        const filters = this.$store.state.users.usersFilters;
        this.$store.commit('users/setUsersFilters', {
          ...filters,
          role: value,
        });
      },
    },
  },
  methods: {
    async submitForm() {
      this.$refs.form.validate();

      if (this.valid) {
        await this.getUsers();
      }
    },
    getUsers() {
      return this.$store.dispatch('users/getUsers');
    },
  },
};
</script>
