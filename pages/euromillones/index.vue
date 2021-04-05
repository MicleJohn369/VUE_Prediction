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
      <div class="text-center text-h1 my-3 pb-4 purple--text text--darken-4">
        Euromillones
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
  name: 'Euromillones',
  components: {
    ScrollButton,
  },
  nuxtI18n: {
    paths: {
      es: '/euromillones',
    },
  },
  async fetch() {
    return Promise.all([
      this.$store.dispatch('posts/getBySlug', {
        slug: 'euromillones',
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
          text: this.$t('BREADCRUMBS.EUROMILLONES.TEXT'),
          disabled: true,
        }, {
          text: this.$t('BREADCRUMBS.EUROMILLONES.PROBABILITIES.TEXT'),
          disabled: true,
        },
      ],
      tocTitle: this.$t('VIEWS.EUROMILLONES.TOC.TITLE.TEXT'),
      indexItems: [
        {
          title: this.$t('VIEWS.EUROMILLONES.TOC.INTRODUCTION.TEXT'),
          target: '#introduction',
          emoji: '🚀',
        }, {
          title: this.$t('VIEWS.EUROMILLONES.TOC.PROBABILITIES.TEXT'),
          target: '#probabilities',
          emoji: '🎲',
          nested: [
            {
              title: this.$t('VIEWS.EUROMILLONES.TOC.PROBABILITIES.ONE_NUMBER_AND_TWO_STARS.TEXT'),
              target: '#probability-one-number-and-two-stars',
              emoji: '🔸',
            }, {
              title: this.$t('VIEWS.EUROMILLONES.TOC.PROBABILITIES.TWO_NUMBERS.TEXT'),
              target: '#probability-two-numbers',
              emoji: '🔸',
            }, {
              title: this.$t('VIEWS.EUROMILLONES.TOC.PROBABILITIES.TWO_NUMBERS_AND_ONE_STAR.TEXT'),
              target: '#probability-two-numbers-and-one-star',
              emoji: '🔸',
            }, {
              title: this.$t('VIEWS.EUROMILLONES.TOC.PROBABILITIES.TWO_NUMBERS_AND_TWO_STARS.TEXT'),
              target: '#probability-two-numbers-and-two-stars',
              emoji: '🔸',
            }, {
              title: this.$t('VIEWS.EUROMILLONES.TOC.PROBABILITIES.THREE_NUMBERS.TEXT'),
              target: '#probability-three-numbers',
              emoji: '🔸',
            }, {
              title: this.$t('VIEWS.EUROMILLONES.TOC.PROBABILITIES.THREE_NUMBERS_AND_ONE_STAR.TEXT'),
              target: '#probability-three-numbers-and-one-star',
              emoji: '🔸',
            }, {
              title: this.$t('VIEWS.EUROMILLONES.TOC.PROBABILITIES.THREE_NUMBERS_AND_TWO_STARS.TEXT'),
              target: '#probability-three-numbers-and-two-stars',
              emoji: '🔸',
            }, {
              title: this.$t('VIEWS.EUROMILLONES.TOC.PROBABILITIES.FOUR_NUMBERS.TEXT'),
              target: '#probability-four-numbers',
              emoji: '🔸',
            }, {
              title: this.$t('VIEWS.EUROMILLONES.TOC.PROBABILITIES.FOUR_NUMBERS_AND_ONE_STAR.TEXT'),
              target: '#probability-four-numbers-and-one-star',
              emoji: '🔸',
            }, {
              title: this.$t('VIEWS.EUROMILLONES.TOC.PROBABILITIES.FOUR_NUMBERS_AND_TWO_STARS.TEXT'),
              target: '#probability-four-numbers-and-two-stars',
              emoji: '🔸',
            }, {
              title: this.$t('VIEWS.EUROMILLONES.TOC.PROBABILITIES.FIVE_NUMBERS.TEXT'),
              target: '#probability-five-numbers',
              emoji: '🔸',
            }, {
              title: this.$t('VIEWS.EUROMILLONES.TOC.PROBABILITIES.FIVE_NUMBERS_AND_ONE_STAR.TEXT'),
              target: '#probability-five-numbers-and-one-star',
              emoji: '🔸',
            }, {
              title: this.$t('VIEWS.EUROMILLONES.TOC.PROBABILITIES.FIVE_NUMBERS_AND_TWO_STARS.TEXT'),
              target: '#probability-five-numbers-and-two-stars',
              emoji: '🔸',
            }, {
              title: this.$t('VIEWS.EUROMILLONES.TOC.PROBABILITIES.ONE_STAR.TEXT'),
              target: '#probability-one-star',
              emoji: '🔸',
            }, {
              title: this.$t('VIEWS.EUROMILLONES.TOC.PROBABILITIES.TWO_STARS.TEXT'),
              target: '#probability-two-stars',
              emoji: '🔸',
            }, {
              title: this.$t('VIEWS.EUROMILLONES.TOC.PROBABILITIES.SUMMARY.TEXT'),
              target: '#probability-summary',
              emoji: '🔸',
            },
          ],
        }, {
          title: this.$t('VIEWS.EUROMILLONES.TOC.SOURCES.TEXT'),
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
