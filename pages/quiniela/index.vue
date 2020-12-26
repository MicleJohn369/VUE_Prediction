<template>
  <v-row justify="center" align="center">
    <v-col cols="12">
      <div class="blue--text">
        <div class="text-center text-h1 pb-4">
          Quiniela
        </div>
        <v-card
          elevation="2"
        >
          <p
            class="text-body-2 pa-3 text--secondary"
            v-text="tocTitle"
          />
          <v-treeview
            :items="indexItems"
            expand-icon=""
            open-all
            item-children="nested"
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
      </div>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: 'Quiniela',
  nuxtI18n: {
    paths: {
      es: '/quiniela',
    },
  },
  data() {
    return {
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
        },
      ],
    };
  },
};
</script>
