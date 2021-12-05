<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="8">
      <div class="text-center">
        <div class="text-h3 pb-4">
          <p v-text="title" />
        </div>
        <v-card
          elevation="2"
        >
          <v-card-text class="text-justify">
            <v-form
              ref="form"
              v-model="valid"
              @submit.prevent="onSubmit"
            >
              <v-text-field
                v-model="form.user"
                :rules="rules.userRules"
                :label="userFieldLabel"
                required
                autocomplete="new-username"
              />
              <v-text-field
                v-model="form.password"
                type="password"
                :rules="rules.passwordRules"
                :label="passwordFieldLabel"
                required
                autocomplete="new-password"
              />
              <div class="text-center">
                <v-btn
                  :disabled="!valid"
                  color="success"
                  class="mr-4"
                  type="submit"
                >
                  {{ submitText }}
                </v-btn>
              </div>
            </v-form>
          </v-card-text>
        </v-card>
        <v-snackbar
          v-model="errorMessage"
          color="error"
        >
          {{ errorMessageText }}
        </v-snackbar>
      </div>
    </v-col>
  </v-row>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      title: this.$t('VIEWS.LOGIN.TITLE'),
      valid: true,
      form: {
        user: '',
        password: '',
      },
      userFieldLabel: this.$t('VIEWS.LOGIN.FORM.USER.LABEL'),
      passwordFieldLabel: this.$t('VIEWS.LOGIN.FORM.PASSWORD.LABEL'),
      rules: {
        userRules: [
          (v) => !!v || this.$t('VIEWS.LOGIN.FORM.USER.ERRORS.REQUIRED'),
        ],
        passwordRules: [
          (v) => !!v || this.$t('VIEWS.LOGIN.FORM.PASSWORD.ERRORS.REQUIRED'),
        ],
      },
      errorMessage: false,
      errorMessageText: '',
      submitText: this.$t('VIEWS.LOGIN.FORM.SUBMIT.TEXT'),
    };
  },
  head() {
    return {
      title: this.$t('VIEWS.LOGIN.TITLE'),
    };
  },
  computed: {},
  methods: {
    async onSubmit() {
      this.cleanError();
      const result = this.$refs.form.validate();

      if (result) {
        try {
          await this.$auth.loginWith('local', { data: this.form });

          this.$router.push(this.localePath({ name: 'admin' }));
        } catch (err) {
          const { status } = err.response;
          let message;

          if (status === 400) {
            message = this.$t('VIEWS.LOGIN.FORM.ERRORS.BAD_CREDENTIALS');
          } else {
            message = this.$t('VIEWS.LOGIN.FORM.ERRORS.AUTH_ERROR');
          }

          this.displayError(message);
        }
      }
    },
    cleanError() {
      this.errorMessage = false;
    },
    displayError(text) {
      this.errorMessage = true;
      this.errorMessageText = text;
    },
  },
};
</script>

<style lang="scss" scoped>

</style>
