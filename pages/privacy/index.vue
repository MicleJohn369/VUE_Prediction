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
        {{ privacyTitle }}
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
  name: 'Privacy',
  components: {
    ScrollButton,
  },
  nuxtI18n: {
    paths: {
      es: '/privacidad',
    },
  },
  async fetch() {
    return Promise.all([
      this.$store.dispatch('posts/getBySlug', {
        slug: 'privacy',
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
          text: this.$t('BREADCRUMBS.PRIVACY.TEXT'),
          disabled: true,
        },
      ],
      privacyTitle: this.$t('VIEWS.PRIVACY.TITLE'),
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
::v-deep .nuxt-content{
  .v-data-table{
    th, td{
      white-space: normal;
    }
  }
}
</style>
