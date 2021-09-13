<template>
  <v-row justify="center" align="center">
    <v-col cols="12">
      <v-breadcrumbs :items="items">
        <template v-slot:item="{ item }">
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
        {{ faqTitle }}
      </div>
      <ScrollButton />
      <nuxt-content :document="doc" />
    </v-col>
  </v-row>
</template>

<script>
import utils from '@/utils';

import { mapState } from 'vuex';
import ScrollButton from '@/components/ScrollButton.vue';

export default {
  name: 'FAQ',
  components: {
    ScrollButton,
  },
  nuxtI18n: {
    paths: {
      es: '/preguntas-frecuentes',
    },
  },
  async fetch() {
    return Promise.all([
      this.$store.dispatch('posts/getBySlug', {
        slug: 'faq',
      }),
    ]);
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
          text: this.$t('BREADCRUMBS.FAQ.TEXT'),
          disabled: true,
        },
      ],
      faqTitle: this.$t('VIEWS.FAQ.TITLE'),
    };
  },
  computed: {
    ...mapState('posts', {
      doc: 'current',
    }),
  },
  head() {
    return utils.getCommonMetas(this.doc);
  },
};
</script>

<style lang="scss" scoped>
</style>
