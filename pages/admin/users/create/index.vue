<template>
  <v-row justify="start" align="center">
    <v-col cols="12" sm="12">
      <div class="text-h3 pb-4">
        {{ titleText }}
      </div>
      <div>
        <p>Botón</p>
      </div>
      <UserForm ref="createUserForm" />
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
    submitForm() {
      this.$refs.createUserForm.userForm.validateForm()
        .then((valid) => {
          if (valid) this.createUser();
        });
    },
    createUser() {
      return this.$store.dispatch('users/createUser', this.$refs.createUserForm.userForm);
    },
  },
};
</script>

<style lang="scss" scoped>

</style>
