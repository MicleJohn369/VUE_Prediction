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
      <v-card>
        <UserForm
          ref="createUserForm"
          @onSubmit="createUser()"
        />
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
import { mapState } from 'vuex';

// import utils from '@/utils';
import getFormattedDate from '@/mixins/getFormattedDate';

import UserForm from '@/components/admin/users/UserForm.vue';

export default {
  components: {
    UserForm,
  },
  mixins: [getFormattedDate],
  layout: 'admin',
  middleware: 'auth',
  data() {
    return {
      titleText: this.$t('DASHBOARD.VIEWS.USERS.USER_FORM.CREATE.TITLE'),
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
          text: this.$t('DASHBOARD.BREADCRUMBS.USERS.TEXT'),
          disabled: false,
          to: this.localePath({
            name: 'admin-users',
          }),
          nuxt: true,
          exactPath: true,
        },
      ],
    };
  },
  head() {
    return {
      title: this.$t('DASHBOARD.VIEWS.USERS.USER_FORM.CREATE.TITLE'),
    };
  },
  computed: {
    ...mapState('users', {
      loading: 'loading',
      user: (state) => state.users.current,
    }),
  },
  methods: {
    createUser() {
      const { userForm } = this.$refs.createUserForm;

      const userCreatedText = this.$t('DASHBOARD.VIEWS.USERS.USER_FORM.MESSAGES.CREATED', {
        user: userForm.user,
      });
      return this.$store.dispatch('users/createUser', userForm)
        .then(() => this.$toast.success(userCreatedText, {
          icon: 'check',
        }))
        .then(() => this.$router.push(this.localePath({
          name: 'admin-users',
        })))
        .catch(() => {
          this.$toast.error('xoxHubo un error al crear el usuario');
        });
    },
  },
};
</script>

<style lang="scss" scoped>

</style>
