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
        <QuinielaCompetitionForm
          v-if="competitionLoaded"
          ref="editCompetitionForm"
          @onSubmit="editCompetition()"
        />
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
import { mapState } from 'vuex';

import QuinielaCompetitionForm from '@/components/admin/quiniela/competitions/QuinielaCompetitionForm.vue';

export default {
  components: {
    QuinielaCompetitionForm,
  },
  mixins: [],
  layout: 'admin',
  middleware: 'auth',
  data() {
    const { id } = this.$route.params;

    return {
      competitionLoaded: false,
      titleText: this.$t('DASHBOARD.VIEWS.QUINIELA.COMPETITIONS.COMPETITION_FORM.EDIT.TITLE'),
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
        text: this.$t('DASHBOARD.BREADCRUMBS.QUINIELA.COMPETITIONS.TEXT'),
        disabled: false,
        to: this.localePath({
          name: 'admin-competitions',
        }),
        nuxt: true,
        exactPath: true,
      }],
      id,
    };
  },
  async fetch() {
    return Promise.all([
      this.$store.dispatch('quiniela/getCompetition', this.id),
    ]).then(() => {
      const competition = this.$store.state.quiniela.currentCompetition;

      this.items.push({
        text: competition.name,
        disabled: false,
        to: this.localePath({
          name: 'admin-competitions-id',
        }),
        nuxt: true,
        exactPath: true,
      });
      this.competitionLoaded = true;
    });
  },
  head() {
    return {
      title: this.$t('DASHBOARD.VIEWS.QUINIELA.COMPETITIONS.COMPETITION_FORM.EDIT.TITLE'),
    };
  },
  computed: {
    ...mapState('quiniela', {
      loading: 'loading',
    }),
  },
  methods: {
    editCompetition() {
      const { competitionForm } = this.$refs.editCompetitionForm;
      const competitionEditedText = this.$t('DASHBOARD.VIEWS.QUINIELA.COMPETITIONS.COMPETITION_FORM.MESSAGES.EDITED', {
        competition: competitionForm.name,
      });

      return this.$store.dispatch('quiniela/editCompetition', { id: this.id, competition: competitionForm })
        .then(() => this.$toast.success(competitionEditedText, {
          icon: 'check',
        }))
        .then(() => this.$router.push(this.localePath({
          name: 'admin-quiniela-competitions',
        })))
        .catch(() => {
          this.$toast.error(this.$t('DASHBOARD.VIEWS.QUINIELA.COMPETITIONS.COMPETITION_FORM.MESSAGES.EDIT_ERROR'));
        });
    },
  },
};
</script>

<style lang="scss" scoped>

</style>
