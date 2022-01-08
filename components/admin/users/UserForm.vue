<template>
  <v-form
    ref="userForm"
    v-model="valid"
  >
    <v-container fluid>
      <v-row>
        <v-col
          cols="12"
          md="6"
        >
          <v-text-field
            id="user"
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
            id="role"
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
  name: 'UserForm',
  props: {},
  data() {
    return {
      rules: {
        user: [],
        role: [],
      },
      valid: false,
      userText: this.$t('DASHBOARD.VIEWS.USERS.USER_FORM.USER.LABEL'),
      roleText: this.$t('DASHBOARD.VIEWS.USERS.USER_FORM.ROLE.LABEL'),
      searchText: this.$t('VIEWS.QUINIELA.STATS.CUSTOM_STATS_FORM.FILTERS.SEARCH.TEXT'),
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
  computed: {},
  methods: {
    async validateForm() {
      this.$refs.form.validate();

      return this.valid;
    },
  },
};
</script>
