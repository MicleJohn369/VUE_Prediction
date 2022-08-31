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
          v-if="seasonLoaded"
          ref="editSeasonForm"
          @onSubmit="editSeason()"
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
  mixins: [],
  layout: 'admin',
  middleware: 'auth',
  data() {
    const { id } = this.$route.params;

    return {
      seasonLoaded: false,
      titleText: this.$t('DASHBOARD.VIEWS.QUINIELA.SEASONS.SEASON_FORM.EDIT.TITLE'),
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
        text: this.$t('DASHBOARD.BREADCRUMBS.QUINIELA.SEASONS.TEXT'),
        disabled: false,
        to: this.localePath({
          name: 'admin-seasons',
        }),
        nuxt: true,
        exactPath: true,
      }],
      id,
    };
  },
  async fetch() {
    return Promise.all([
      this.$store.dispatch('quiniela/getSeason', this.id),
    ]).then(() => {
      const season = this.$store.state.quiniela.currentSeason;

      this.items.push({
        text: season.name,
        disabled: false,
        to: this.localePath({
          name: 'admin-seasons-id',
        }),
        nuxt: true,
        exactPath: true,
      });
      this.seasonLoaded = true;
    });
  },
  head() {
    return {
      title: this.$t('DASHBOARD.VIEWS.QUINIELA.SEASONS.SEASON_FORM.EDIT.TITLE'),
    };
  },
  computed: {
    ...mapState('quiniela', {
      loading: 'loading',
    }),
  },
  methods: {
    editSeason() {
      const { seasonForm } = this.$refs.editSeasonForm;
      const seasonEditedText = this.$t('DASHBOARD.VIEWS.QUINIELA.SEASONS.SEASON_FORM.MESSAGES.EDITED', {
        season: seasonForm.name,
      });

      return this.$store.dispatch('quiniela/editSeason', { id: this.id, season: seasonForm })
        .then(() => this.$toast.success(seasonEditedText, {
          icon: 'check',
        }))
        .then(() => this.$router.push(this.localePath({
          name: 'admin-quiniela-seasons',
        })))
        .catch(() => {
          this.$toast.error(this.$t('DASHBOARD.VIEWS.QUINIELA.SEASONS.SEASON_FORM.MESSAGES.EDIT_ERROR'));
        });
    },
  },
};
</script>

<style lang="scss" scoped>

</style>
