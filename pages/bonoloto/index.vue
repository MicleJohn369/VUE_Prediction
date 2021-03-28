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
      <div class="text-center text-h1 my-3 pb-4 black--text">
        Bonoloto
      </div>
      <ScrollButton />
      <v-card
        elevation="2"
      >
        <p
          class="text-body-2 pa-3"
          v-text="tocTitle"
        />
        <v-treeview
          :items="indexItems"
          expand-icon=""
          open-all
          item-children="nested"
          item-key="target"
        >
          <template v-slot:label="{ item }">
            <v-btn
              block
              text
              link
              :href="item.target"
              class="justify-start"
            >
              {{ item.emoji }} {{ item.title }}
            </v-btn>
          </template>
        </v-treeview>
      </v-card>
      <nuxt-content :document="doc" />
    </v-col>
  </v-row>
</template>

<script>
import utils from '@/utils';

import { mapState } from 'vuex';
import ScrollButton from '@/components/ScrollButton.vue';

export default {
  name: 'Bonoloto',
  components: {
    ScrollButton,
  },
  nuxtI18n: {
    paths: {
      es: '/bonoloto',
    },
  },
  async fetch() {
    return Promise.all([
      this.$store.dispatch('posts/getBySlug', {
        slug: 'bonoloto',
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
          text: this.$t('BREADCRUMBS.BONOLOTO.TEXT'),
          disabled: true,
        }, {
          text: this.$t('BREADCRUMBS.BONOLOTO.PROBABILITIES.TEXT'),
          disabled: true,
        },
      ],
      tocTitle: this.$t('VIEWS.BONOLOTO.TOC.TITLE.TEXT'),
      indexItems: [
        {
          title: this.$t('VIEWS.BONOLOTO.TOC.INTRODUCTION.TEXT'),
          target: '#introduction',
          emoji: '🚀',
        }, {
          title: this.$t('VIEWS.BONOLOTO.TOC.PROBABILITIES.TEXT'),
          target: '#probabilities',
          emoji: '🎲',
          nested: [
            {
              title: this.$t('VIEWS.BONOLOTO.TOC.PROBABILITIES.THREE_NUMBERS.TEXT'),
              target: '#probability-three-numbers',
              emoji: '🔸',
            }, {
              title: this.$t('VIEWS.BONOLOTO.TOC.PROBABILITIES.FOUR_NUMBERS.TEXT'),
              target: '#probability-four-numbers',
              emoji: '🔸',
            }, {
              title: this.$t('VIEWS.BONOLOTO.TOC.PROBABILITIES.FIVE_NUMBERS.TEXT'),
              target: '#probability-five-numbers',
              emoji: '🔸',
            }, {
              title: this.$t('VIEWS.BONOLOTO.TOC.PROBABILITIES.FIVE_NUMBERS_AND_COMPLEMENTARY.TEXT'),
              target: '#probability-five-numbers-and-complementary',
              emoji: '🔸',
            }, {
              title: this.$t('VIEWS.BONOLOTO.TOC.PROBABILITIES.SIX_NUMBERS.TEXT'),
              target: '#probability-six-numbers',
              emoji: '🔸',
            }, {
              title: this.$t('VIEWS.BONOLOTO.TOC.PROBABILITIES.REIMBURSEMENT.TEXT'),
              target: '#probability-reimbursement',
              emoji: '🔸',
            }, {
              title: this.$t('VIEWS.BONOLOTO.TOC.PROBABILITIES.SUMMARY.TEXT'),
              target: '#probability-summary',
              emoji: '🔸',
            },
          ],
        }, {
          title: this.$t('VIEWS.BONOLOTO.TOC.SOURCES.TEXT'),
          target: '#sources',
          emoji: '📚',
        },
      ],
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
