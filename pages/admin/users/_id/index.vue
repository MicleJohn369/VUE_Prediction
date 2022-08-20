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
          v-if="userLoaded"
          ref="editUserForm"
          @onSubmit="editUser()"
        />
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
import { mapState } from 'vuex';

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
    const { id } = this.$route.params;

    return {
      userLoaded: false,
      titleText: this.$t('DASHBOARD.VIEWS.USERS.USER_FORM.EDIT.TITLE'),
      items: [{
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
      }],
      id,
    };
  },
  async fetch() {
    return Promise.all([
      this.$store.dispatch('users/getUser', {
        id: this.id,
      }),
    ]).then(() => {
      const user = this.$store.state.users.currentUser;

      this.items.push({
        text: user.user,
        disabled: false,
        to: this.localePath({
          name: 'admin-users-id',
        }),
        nuxt: true,
        exactPath: true,
      });
      this.userLoaded = true;
    });
  },
  head() {
    return {
      title: this.$t('DASHBOARD.VIEWS.USERS.USER_FORM.EDIT.TITLE'),
    };
  },
  computed: {
    ...mapState('users', {
      loading: 'loading',
      user: (state) => state.users.current,
    }),
  },
  methods: {
    editUser() {
      const { userForm } = this.$refs.editUserForm;
      const userEditedText = this.$t('DASHBOARD.VIEWS.USERS.USER_FORM.MESSAGES.EDITED', {
        user: userForm.user,
      });

      return this.$store.dispatch('users/editUser', { id: this.id, user: userForm })
        .then(() => this.$toast.success(userEditedText, {
          icon: 'check',
        }))
        .then(() => this.$router.push(this.localePath({
          name: 'admin-users',
        })))
        .catch(() => {
          this.$toast.error(this.$t('DASHBOARD.VIEWS.USERS.USER_FORM.MESSAGES.EDIT_ERROR'));
        });
    },
  },
};
</script>

<style lang="scss" scoped>

</style>
