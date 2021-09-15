<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="8">
      <div class="text-center">
        <Logo />
        <div class="text-h3 pb-4">
          Pronostigol
        </div>
        <ScrollButton />
        <v-card
          elevation="2"
        >
          <v-card-text class="text-justify">
            <v-runtime-template :template="welcomeText" />
          </v-card-text>
          <v-card-text id="games">
            <v-btn
              text
              rounded
              to="/quiniela"
              nuxt
              class="blue darken-3 white--text"
            >
              {{ quinielaText }}
            </v-btn>
            <v-btn
              text
              rounded
              to="/bonoloto"
              nuxt
              class="black white--text"
            >
              {{ bonolotoText }}
            </v-btn>
            <v-btn
              text
              rounded
              to="/primitiva"
              nuxt
              class="green darken-4 white--text"
            >
              {{ primitivaText }}
            </v-btn>
            <v-btn
              text
              rounded
              to="/gordo"
              nuxt
              class="red accent-4 white--text"
            >
              {{ gordoText }}
            </v-btn>
            <v-btn
              text
              rounded
              to="/euromillones"
              nuxt
              class="deep-purple darken-4 white--text"
            >
              {{ euromillonesText }}
            </v-btn>
          </v-card-text>
        </v-card>
        <v-card
          class="mt-3"
          elevation="2"
        >
          <v-card-text>
            <Timeline
              id="pronostigolesp"
              source-type="profile"
              :options="{ tweetLimit: '4', lang: 'es' }"
            />
          </v-card-text>
        </v-card>
        <v-card
          class="mt-3 mx-auto"
          elevation="2"
          max-width="374"
        >
          <v-card-text>
            <p
              class="overline"
              v-text="lastUpdate"
            />
            <p
              class="overline"
              v-text="currentVersion"
            />
          </v-card-text>
        </v-card>
      </div>
    </v-col>
  </v-row>
</template>

<script>
import { Timeline } from 'vue-tweet-embed';
import VRuntimeTemplate from 'v-runtime-template';
import { mapState } from 'vuex';

import Logo from '@/components/Logo.vue';

import utils from '@/utils';
import ScrollButton from '@/components/ScrollButton.vue';

export default {
  components: {
    Logo,
    VRuntimeTemplate,
    Timeline,
    ScrollButton,
  },
  data() {
    return {
      welcomeText: this.$t('VIEWS.HOME.WELCOME.TEXT'),
      quinielaText: this.$t('VIEWS.HOME.GAMES.QUINIELA.TEXT'),
      bonolotoText: this.$t('VIEWS.HOME.GAMES.BONOLOTO.TEXT'),
      primitivaText: this.$t('VIEWS.HOME.GAMES.PRIMITIVA.TEXT'),
      gordoText: this.$t('VIEWS.HOME.GAMES.GORDO.TEXT'),
      euromillonesText: this.$t('VIEWS.HOME.GAMES.EUROMILLONES.TEXT'),
    };
  },
  async fetch() {
    return this.$store.dispatch('github/getLastCommitDate');
  },
  head() {
    return {
      title: this.$t('VIEWS.HOME.TITLE'),
    };
  },
  computed: {
    lastCommitDateParsed() {
      return this.$moment(this.lastCommitDate).format(utils.COMMON.DATE_FORMAT);
    },
    ...mapState('github', {
      lastCommitDate: 'lastCommitDate',
    }),
    lastUpdate() {
      return `${this.$t('VIEWS.HOME.APP_INFO.LAST_UPDATE.TEXT')}: ${this.lastCommitDateParsed}`;
    },
    currentVersion() {
      return `${this.$t('VIEWS.HOME.APP_INFO.CURRENT_VERSION.TEXT')}: ${this.$config.appVersion}`;
    },
  },
};
</script>

<style lang="scss" scoped>
#games{
  .v-btn{
    margin: 3px 0 3px;
  }
}

#recommended-webs{
  .recommended-web{
    a{
      display: block;
      width: 100%;

      img{
        max-width: 100%;
        margin: 0 auto;
      }
    }
  }
}
</style>
