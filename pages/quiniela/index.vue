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
      <div class="text-center text-h1 my-3 pb-4 blue--text">
        Quiniela
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
  name: 'Quiniela',
  components: {
    ScrollButton,
  },
  nuxtI18n: {
    paths: {
      es: '/quiniela',
    },
  },
  async fetch() {
    return Promise.all([
      this.$store.dispatch('posts/getBySlug', {
        slug: 'quiniela',
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
          text: this.$t('BREADCRUMBS.QUINIELA.TEXT'),
          disabled: true,
        }, {
          text: this.$t('BREADCRUMBS.QUINIELA.PROBABILITIES.TEXT'),
          disabled: true,
        },
      ],
      tocTitle: this.$t('VIEWS.QUINIELA.TOC.TITLE.TEXT'),
      indexItems: [
        {
          title: this.$t('VIEWS.QUINIELA.TOC.INTRODUCTION.TEXT'),
          target: '#introduction',
          emoji: '🚀',
        }, {
          title: this.$t('VIEWS.QUINIELA.TOC.PROBABILITIES.TEXT'),
          target: '#probabilities',
          emoji: '🎲',
          nested: [
            {
              title: this.$t('VIEWS.QUINIELA.TOC.PROBABILITIES.TEN_RESULTS.TEXT'),
              target: '#probability-ten-results',
              emoji: '🔸',
            }, {
              title: this.$t('VIEWS.QUINIELA.TOC.PROBABILITIES.ELEVEN_RESULTS.TEXT'),
              target: '#probability-eleven-results',
              emoji: '🔸',
            }, {
              title: this.$t('VIEWS.QUINIELA.TOC.PROBABILITIES.TWELVE_RESULTS.TEXT'),
              target: '#probability-twelve-results',
              emoji: '🔸',
            }, {
              title: this.$t('VIEWS.QUINIELA.TOC.PROBABILITIES.THIRTEEN_RESULTS.TEXT'),
              target: '#probability-thirteen-results',
              emoji: '🔸',
            }, {
              title: this.$t('VIEWS.QUINIELA.TOC.PROBABILITIES.FOURTEEN_RESULTS.TEXT'),
              target: '#probability-fourteen-results',
              emoji: '🔸',
            }, {
              title: this.$t('VIEWS.QUINIELA.TOC.PROBABILITIES.SPECIAL_RESULT.TEXT'),
              target: '#probability-special-result',
              emoji: '🔸',
            }, {
              title: this.$t('VIEWS.QUINIELA.TOC.PROBABILITIES.FOURTEEN_RESULTS_AND_SPECIAL_RESULT.TEXT'),
              target: '#probability-fourteen-results-and-special-result',
              emoji: '🔸',
            }, {
              title: this.$t('VIEWS.QUINIELA.TOC.PROBABILITIES.SUMMARY.TEXT'),
              target: '#probability-summary',
              emoji: '🔸',
            },
          ],
        }, {
          title: this.$t('VIEWS.QUINIELA.TOC.SOURCES.TEXT'),
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
