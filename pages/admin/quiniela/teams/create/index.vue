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
        <QuinielaTeamForm
          ref="createTeamForm"
          @onSubmit="createTeam()"
        />
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
import { mapState } from 'vuex';

import QuinielaTeamForm from '@/components/admin/quiniela/teams/QuinielaTeamForm.vue';

export default {
  components: {
    QuinielaTeamForm,
  },
  nuxtI18n: {
    paths: {
      es: '/admin/quiniela/equipos/crear',
    },
  },
  mixins: [],
  layout: 'admin',
  middleware: 'auth',
  data() {
    return {
      titleText: this.$t('DASHBOARD.VIEWS.QUINIELA.TEAMS.TEAM_FORM.CREATE.TITLE'),
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
          to: this.localePath({
            name: 'admin-quiniela',
          }),
          nuxt: true,
          exactPath: true,
        }, {
          text: this.$t('DASHBOARD.BREADCRUMBS.QUINIELA.TEAMS.TEXT'),
          disabled: false,
          to: this.localePath({
            name: 'admin-quiniela-teams',
          }),
          nuxt: true,
          exactPath: true,
        },
      ],
    };
  },
  head() {
    return {
      title: this.$t('DASHBOARD.VIEWS.QUINIELA.TEAMS.TEAM_FORM.CREATE.TITLE'),
    };
  },
  computed: {
    ...mapState('quiniela', {
      loading: 'loading',
      team: (state) => state.quiniela.currentTeam,
    }),
  },
  methods: {
    createTeam() {
      const { teamForm } = this.$refs.createTeamForm;

      const teamCreatedText = this.$t('DASHBOARD.VIEWS.QUINIELA.TEAMS.TEAM_FORM.MESSAGES.CREATED', {
        team: teamForm.name,
      });
      return this.$store.dispatch('quiniela/createTeam', teamForm)
        .then(() => this.$toast.success(teamCreatedText, {
          icon: 'check',
        }))
        .then(() => this.$router.push(this.localePath({
          name: 'admin-quiniela-teams',
        })))
        .catch(() => {
          this.$toast.error(this.$t('DASHBOARD.VIEWS.QUINIELA.TEAMS.TEAM_FORM.MESSAGES.CREATE_ERROR'));
        });
    },
  },
};
</script>

<style lang="scss" scoped>

</style>
