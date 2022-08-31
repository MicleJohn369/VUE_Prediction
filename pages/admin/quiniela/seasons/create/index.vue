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
        <QuinielaSeasonForm
          ref="createSeasonForm"
          @onSubmit="createSeason()"
        />
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
import { mapState } from 'vuex';

import QuinielaSeasonForm from '@/components/admin/quiniela/seasons/QuinielaSeasonForm.vue';

export default {
  components: {
    QuinielaSeasonForm,
  },
  nuxtI18n: {
    paths: {
      es: '/admin/quiniela/temporadas/crear',
    },
  },
  mixins: [],
  layout: 'admin',
  middleware: 'auth',
  data() {
    return {
      titleText: this.$t('DASHBOARD.VIEWS.QUINIELA.SEASONS.SEASON_FORM.CREATE.TITLE'),
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
          text: this.$t('DASHBOARD.BREADCRUMBS.QUINIELA.SEASONS.TEXT'),
          disabled: false,
          to: this.localePath({
            name: 'admin-quiniela-seasons',
          }),
          nuxt: true,
          exactPath: true,
        },
      ],
    };
  },
  head() {
    return {
      title: this.$t('DASHBOARD.VIEWS.QUINIELA.SEASONS.SEASON_FORM.CREATE.TITLE'),
    };
  },
  computed: {
    ...mapState('quiniela', {
      loading: 'loading',
      season: (state) => state.quiniela.currentSeason,
    }),
  },
  methods: {
    createSeason() {
      const { seasonForm } = this.$refs.createSeasonForm;

      const seasonCreatedText = this.$t('DASHBOARD.VIEWS.QUINIELA.SEASONS.SEASON_FORM.MESSAGES.CREATED', {
        season: seasonForm.name,
      });
      return this.$store.dispatch('quiniela/createSeason', seasonForm)
        .then(() => this.$toast.success(seasonCreatedText, {
          icon: 'check',
        }))
        .then(() => this.$router.push(this.localePath({
          name: 'admin-quiniela-seasons',
        })))
        .catch(() => {
          this.$toast.error(this.$t('DASHBOARD.VIEWS.QUINIELA.SEASONS.SEASON_FORM.MESSAGES.CREATE_ERROR'));
        });
    },
  },
};
</script>

<style lang="scss" scoped>

</style>
