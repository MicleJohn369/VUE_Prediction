<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="8">
      <div class="text-center">
        <Logo />
        <div class="text-h1 pb-4">
          Pronostigol
        </div>
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
              href="/quiniela"
              class="blue darken-3 white--text"
            >
              {{ quinielaText }}
            </v-btn>
            <v-btn
              text
              rounded
              href="/bonoloto"
              class="black white--text"
            >
              {{ bonolotoText }}
            </v-btn>
            <v-btn
              text
              rounded
              href="/primitiva"
              class="green darken-4 white--text"
            >
              {{ primitivaText }}
            </v-btn>
            <v-btn
              text
              rounded
              href="/gordo"
              class="red accent-4 white--text"
            >
              {{ gordoText }}
            </v-btn>
            <v-btn
              text
              rounded
              href="/euromillones"
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
      </div>
    </v-col>
  </v-row>
</template>

<script>
import VRuntimeTemplate from 'v-runtime-template';
import Logo from '@/components/Logo.vue';
import { Timeline } from 'vue-tweet-embed';

export default {
  components: {
    Logo,
    VRuntimeTemplate,
    Timeline,
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
</style>
