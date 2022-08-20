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
            v-model="userForm.user"
            :rules="rules.user"
            :label="userText"
            clearable
          />
        </v-col>
      </v-row>
      <v-row>
        <v-col
          cols="12"
          md="6"
        >
          <v-autocomplete
            v-model="userForm.role"
            :rules="rules.role"
            :items="roles"
            :label="roleText"
            item-text="name"
            item-value="value"
            clearable
          />
        </v-col>
      </v-row>
      <v-row>
        <v-col
          cols="12"
          md="6"
        >
          <v-text-field
            v-model="userForm.password"
            type="password"
            :rules="rules.password"
            :label="passwordText"
            clearable
          />
        </v-col>
      </v-row>
      <v-row>
        <v-col
          cols="12"
          md="6"
        >
          <v-btn
            nuxt
            :to="localePath({
              name: 'admin-users'
            })"
          >
            {{ cancelButtonText }}
          </v-btn>
          <v-btn
            class="float-right"
            color="primary"
            @click="submitForm"
          >
            {{ submitButtonText }}
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
    const initialUserForm = {
      user: '',
      role: null,
      password: '',
    };

    return {
      isEditMode: !!this.$route.params.id,
      rules: {
        user: [
          (v) => !!v || this.$t('DASHBOARD.VIEWS.USERS.USER_FORM.USER.ERRORS.REQUIRED'),
        ],
        role: [
          (v) => !!v || this.$t('DASHBOARD.VIEWS.USERS.USER_FORM.ROLE.ERRORS.REQUIRED'),
        ],
        password: [
          (v) => !!v || this.$t('DASHBOARD.VIEWS.USERS.USER_FORM.PASSWORD.ERRORS.REQUIRED'),
        ],
      },
      valid: false,
      initialUserForm,
      userForm: utils.cloneObject(initialUserForm),
      userText: this.$t('DASHBOARD.VIEWS.USERS.USER_FORM.USER.LABEL'),
      roleText: this.$t('DASHBOARD.VIEWS.USERS.USER_FORM.ROLE.LABEL'),
      roles: [
        {
          name: this.$t('ROLES.ADMIN.TEXT'),
          value: utils.ROLES.ADMIN.VALUE,
        }, {
          name: this.$t('ROLES.PRIVILEGED.TEXT'),
          value: utils.ROLES.PRIVILEGED.VALUE,
        },
      ],
      passwordText: this.$t('DASHBOARD.VIEWS.USERS.USER_FORM.PASSWORD.LABEL'),
      cancelButtonText: this.$t('COMMON.BUTTON.CANCEL.TEXT'),
      submitButtonText: this.$t('COMMON.BUTTON.SUBMIT.TEXT'),
    };
  },
  computed: {},
  created() {
    const userForm = {};

    if (this.isEditMode) {
      userForm.user = utils.cloneObject(this.$store.state.users.currentUser.user);
      userForm.role = utils.cloneObject(this.$store.state.users.currentUser.role);
      userForm.password = utils.cloneObject(this.$store.state.users.currentUser.password);
    }

    this.userForm = { ...this.userForm, ...userForm };
  },
  methods: {
    async validateForm() {
      this.$refs.userForm.validate();

      return this.valid;
    },
    async submitForm() {
      const result = await this.validateForm();
      if (result) this.$emit('onSubmit');
    },
  },
};
</script>
