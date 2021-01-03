<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="8">
      <div class="text-center">
        <Logo />
        <div class="text-h1 pb-4">
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
        <v-card class="mt-3" flat>
          <v-card-title class="blue--text">
            {{ recommendedWebsTitle }}
          </v-card-title>
          <v-card-text class="text-justify">
            {{ recommendedWebsText }}
          </v-card-text>
        </v-card>
        <v-responsive id="recommended-webs">
          <v-row
            dense
            justify="center"
          >
            <v-col
              v-for="(web, i) in recommendedWebs"
              :key="web.name"
              class="recommended-web d-flex align-center"
              cols="auto"
              md="4"
            >
              <a
                :href="web.url"
                target="_blank"
                :title="web.name"
                rel="nofollow"
              >
                <img
                  :src="recommendedWebs[i].img"
                  :alt="web.alt"
                >
              </a>
            </v-col>
          </v-row>
        </v-responsive>
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
import VRuntimeTemplate from 'v-runtime-template';
import Logo from '@/components/Logo.vue';
import { Timeline } from 'vue-tweet-embed';

import utils from '@/utils';
import ScrollButton from '@/components/ScrollButton.vue';

import { mapState } from 'vuex';

export default {
  components: {
    Logo,
    VRuntimeTemplate,
    Timeline,
    ScrollButton,
  },
  async fetch() {
    return this.$store.dispatch('github/getLastCommitDate');
  },
  data() {
    return {
      welcomeText: this.$t('VIEWS.HOME.WELCOME.TEXT'),
      quinielaText: this.$t('VIEWS.HOME.GAMES.QUINIELA.TEXT'),
      bonolotoText: this.$t('VIEWS.HOME.GAMES.BONOLOTO.TEXT'),
      primitivaText: this.$t('VIEWS.HOME.GAMES.PRIMITIVA.TEXT'),
      gordoText: this.$t('VIEWS.HOME.GAMES.GORDO.TEXT'),
      euromillonesText: this.$t('VIEWS.HOME.GAMES.EUROMILLONES.TEXT'),
      recommendedWebsTitle: this.$t('VIEWS.HOME.RECOMMENDED_WEBS.TITLE'),
      recommendedWebsText: this.$t('VIEWS.HOME.RECOMMENDED_WEBS.TEXT'),
      recommendedWebs: [
        {
          name: '¿Cuándo me va a tocar?',
          img: '/images/recommended_web-cuando_me_va_a_tocar.png',
          url: 'https://www.cuandomevaatocar.com',
          alt: 'Logo de "¿Cuándo me va a tocar?"',
        },
        {
          name: 'Estadística para todos',
          img: '/images/recommended_web-estadistica_para_todos.png',
          url: 'http://www.estadisticaparatodos.es/taller/loterias/loterias.html',
          alt: 'Logo de "Estadística para todos"',
        },
        {
          name: 'Combinación ganadora',
          img: '/images/recommended_web-combinacion_ganadora.png',
          url: 'https://www.combinacionganadora.com/',
          alt: 'Logo de "Combinación ganadora"',
        },
        {
          name: 'LOTERIAS.COM',
          img: '/images/recommended_web-loterias.com.ico',
          url: 'https://www.loterias.com',
          alt: 'Logo de "LOTERIAS.COM"',
        },
      ],
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
  head() {
    return {
      title: this.$t('VIEWS.HOME.TITLE'),
    };
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
