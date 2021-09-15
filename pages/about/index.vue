<template>
  <v-row justify="center" align="center">
    <v-col cols="12">
      <v-breadcrumbs :items="items">
        <template #item="{ item }">
          <v-breadcrumbs-item
            :to="item.to"
            :disabled="item.disabled"
            nuxt
          >
            {{ item.text.toUpperCase() }}
          </v-breadcrumbs-item>
        </template>
      </v-breadcrumbs>
      <div class="text-center text-h3 my-3 pb-4 black--text">
        {{ aboutTitle }}
      </div>
      <ScrollButton />
      <nuxt-content :document="doc" />
    </v-col>
  </v-row>
</template>

<script>
import { mapState } from 'vuex';
import utils from '@/utils';

import ScrollButton from '@/components/ScrollButton.vue';

export default {
  name: 'About',
  components: {
    ScrollButton,
  },
  nuxtI18n: {
    paths: {
      es: '/acerca-de',
    },
  },
  data() {
    return {
      items: [
        {
          text: this.$t('BREADCRUMBS.HOME.TEXT'),
          disabled: false,
          to: this.localePath({
            name: 'index',
          }),
        },
        {
          text: this.$t('BREADCRUMBS.ABOUT.TEXT'),
          disabled: true,
        },
      ],
      aboutTitle: this.$t('VIEWS.ABOUT.TITLE'),
    };
  },
  async fetch() {
    return Promise.all([
      this.$store.dispatch('posts/getBySlug', {
        slug: 'about',
      }),
    ]);
  },
  head() {
    return utils.getCommonMetas(this.doc);
  },
  computed: {
    ...mapState('posts', {
      doc: 'current',
    }),
  },
};
</script>

<style lang="scss" scoped>
</style>
