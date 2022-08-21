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
          v-if="teamLoaded"
          ref="editTeamForm"
          @onSubmit="editTeam()"
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
  mixins: [],
  layout: 'admin',
  middleware: 'auth',
  data() {
    const { id } = this.$route.params;

    return {
      teamLoaded: false,
      titleText: this.$t('DASHBOARD.VIEWS.QUINIELA.TEAMS.TEAM_FORM.EDIT.TITLE'),
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
        text: this.$t('DASHBOARD.BREADCRUMBS.QUINIELA.TEAMS.TEXT'),
        disabled: false,
        to: this.localePath({
          name: 'admin-teams',
        }),
        nuxt: true,
        exactPath: true,
      }],
      id,
    };
  },
  async fetch() {
    return Promise.all([
      this.$store.dispatch('quiniela/getTeam', this.id),
    ]).then(() => {
      const team = this.$store.state.quiniela.currentTeam;

      this.items.push({
        text: team.name,
        disabled: false,
        to: this.localePath({
          name: 'admin-teams-id',
        }),
        nuxt: true,
        exactPath: true,
      });
      this.teamLoaded = true;
    });
  },
  head() {
    return {
      title: this.$t('DASHBOARD.VIEWS.QUINIELA.TEAMS.TEAM_FORM.EDIT.TITLE'),
    };
  },
  computed: {
    ...mapState('quiniela', {
      loading: 'loading',
    }),
  },
  methods: {
    editTeam() {
      const { teamForm } = this.$refs.editTeamForm;
      const teamEditedText = this.$t('DASHBOARD.VIEWS.QUINIELA.TEAMS.TEAM_FORM.MESSAGES.EDITED', {
        team: teamForm.team,
      });

      return this.$store.dispatch('quiniela/editTeam', { id: this.id, team: teamForm })
        .then(() => this.$toast.success(teamEditedText, {
          icon: 'check',
        }))
        .then(() => this.$router.push(this.localePath({
          name: 'admin-quiniela-teams',
        })))
        .catch(() => {
          this.$toast.error(this.$t('DASHBOARD.VIEWS.QUINIELA.TEAMS.TEAM_FORM.MESSAGES.EDIT_ERROR'));
        });
    },
  },
};
</script>

<style lang="scss" scoped>

</style>
