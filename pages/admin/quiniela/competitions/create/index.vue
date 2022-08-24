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
          ref="createCompetitionForm"
          @onSubmit="createCompetition()"
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
  nuxtI18n: {
    paths: {
      es: '/admin/quiniela/competiciones/crear',
    },
  },
  mixins: [],
  layout: 'admin',
  middleware: 'auth',
  data() {
    return {
      titleText: this.$t('DASHBOARD.VIEWS.QUINIELA.COMPETITIONS.COMPETITION_FORM.CREATE.TITLE'),
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
          text: this.$t('DASHBOARD.BREADCRUMBS.QUINIELA.COMPETITIONS.TEXT'),
          disabled: false,
          to: this.localePath({
            name: 'admin-quiniela-competitions',
          }),
          nuxt: true,
          exactPath: true,
        },
      ],
    };
  },
  head() {
    return {
      title: this.$t('DASHBOARD.VIEWS.QUINIELA.COMPETITIONS.COMPETITION_FORM.CREATE.TITLE'),
    };
  },
  computed: {
    ...mapState('quiniela', {
      loading: 'loading',
      competition: (state) => state.quiniela.currentCompetition,
    }),
  },
  methods: {
    createCompetition() {
      const { competitionForm } = this.$refs.createCompetitionForm;

      const competitionCreatedText = this.$t('DASHBOARD.VIEWS.QUINIELA.COMPETITIONS.COMPETITION_FORM.MESSAGES.CREATED', {
        competition: competitionForm.name,
      });
      return this.$store.dispatch('quiniela/createCompetition', competitionForm)
        .then(() => this.$toast.success(competitionCreatedText, {
          icon: 'check',
        }))
        .then(() => this.$router.push(this.localePath({
          name: 'admin-quiniela-competitions',
        })))
        .catch(() => {
          this.$toast.error(this.$t('DASHBOARD.VIEWS.QUINIELA.COMPETITIONS.COMPETITION_FORM.MESSAGES.CREATE_ERROR'));
        });
    },
  },
};
</script>

<style lang="scss" scoped>

</style>
