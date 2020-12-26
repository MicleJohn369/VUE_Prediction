<template>
  <v-app>
    <v-navigation-drawer
      v-model="drawer"
      :mini-variant="miniVariant"
      :clipped="clipped"
      fixed
      app
      temporary
    >
      <v-list class="pa-0">
        <v-list-item class="pa-0">
          <v-list-item-content class="pa-0">
            <v-list-item-title class="title">
              <v-img
                src="https://www.pronostigol.es/img/favicon.png"
              />
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
      <v-list class="pt-0">
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          :to="item.to"
          router
          exact
        >
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="item.title" />
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar
      :clipped-left="clipped"
      fixed
      app
      color="primary"
      dark
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-toolbar-title>
        <v-btn
          id="pronostigol-toolbar-button"
          :to="localePath({
            name: 'index',
          })"
          rounded
          text
          nuxt
        >
          {{ title }}
        </v-btn>
      </v-toolbar-title>
      <v-spacer />
      <v-btn
        icon
        href="https://twitter.com/pronostigolesp"
        title="Cuenta de Twitter"
        target="_blank"
        rel="nofollow"
      >
        <v-icon>
          mdi-twitter
        </v-icon>
      </v-btn>
      <v-btn
        icon
        href="https://github.com/jualoppaz/pronostigol"
        title="Repositorio en GitHub"
        target="_blank"
        rel="nofollow"
      >
        <v-icon>
          mdi-github
        </v-icon>
      </v-btn>
    </v-app-bar>
    <v-main>
      <v-container>
        <nuxt />
      </v-container>
    </v-main>
    <v-footer
      :absolute="!fixed"
      app
    >
      <v-card
        flat
        tile
        width="100%"
        class="primary lighten-1 text-center"
        dark
      >
        <v-card-text>
          <v-btn
            text
            rounded
            to="/privacidad"
            nuxt
          >
            {{ privacyText }}
          </v-btn>
          <v-btn
            text
            rounded
            to="/preguntas-frecuentes"
            nuxt
          >
            {{ faqText }}
          </v-btn>
          <v-btn
            text
            rounded
            to="/acerca-de"
            nuxt
          >
            {{ aboutText }}
          </v-btn>
          <v-btn
            text
            rounded
            to="/docs"
            nuxt
          >
            {{ apiDocText }}
          </v-btn>
        </v-card-text>
        <v-card-text id="games-footer">
          <v-btn
            text
            rounded
            to="/quiniela"
            nuxt
            class="blue darken-3"
          >
            {{ quinielaText }}
          </v-btn>
          <v-btn
            text
            rounded
            to="/bonoloto"
            nuxt
            class="black"
          >
            {{ bonolotoText }}
          </v-btn>
          <v-btn
            text
            rounded
            to="/primitiva"
            nuxt
            class="green darken-4"
          >
            {{ primitivaText }}
          </v-btn>
          <v-btn
            text
            rounded
            to="/gordo"
            nuxt
            class="red accent-4"
          >
            {{ gordoText }}
          </v-btn>
          <v-btn
            text
            rounded
            to="/euromillones"
            nuxt
            class="deep-purple darken-4"
          >
            {{ euromillonesText }}
          </v-btn>
        </v-card-text>

        <v-divider />
        <v-card-text class="white--text">
          <strong>
            <v-icon>
              mdi-copyright
            </v-icon>
            {{ new Date().getFullYear() }}
          </strong>
          <v-btn
            text
            rounded
            href="http://www.juanmanuellopezpazos.es"
            target="_blank"
          >
            Juan Manuel López Pazos
          </v-btn>
        </v-card-text>
      </v-card>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      clipped: true,
      drawer: false,
      fixed: false,
      items: [
        {
          icon: 'mdi-home',
          title: this.$t('MENU.HOME.TEXT'),
          to: this.localePath({
            name: 'index',
          }),
        },
        {
          icon: 'mdi-soccer',
          title: this.$t('MENU.QUINIELA.TEXT'),
          to: this.localePath({
            name: 'quiniela',
          }),
        },
      ],
      miniVariant: false,
      title: 'Pronostigol',
      privacyText: this.$t('FOOTER.PRIVACY.TEXT'),
      faqText: this.$t('FOOTER.FAQ.TEXT'),
      aboutText: this.$t('FOOTER.ABOUT.TEXT'),
      apiDocText: this.$t('FOOTER.API_DOC.TEXT'),
      quinielaText: this.$t('FOOTER.QUINIELA.TEXT'),
      bonolotoText: this.$t('FOOTER.BONOLOTO.TEXT'),
      primitivaText: this.$t('FOOTER.PRIMITIVA.TEXT'),
      gordoText: this.$t('FOOTER.GORDO.TEXT'),
      euromillonesText: this.$t('FOOTER.EUROMILLONES.TEXT'),
    };
  },
};
</script>

<style lang="scss" scoped>
.v-toolbar__content{
  #pronostigol-toolbar-button{
    &::before{
      opacity: 0;
    }

    &:hover{
      &::before{
        opacity: 0.08;
      }
    }
  }
}
.v-footer{
  padding: 0;

  #games-footer{
    .v-btn{
      margin: 3px 0 3px;
    }
  }
}
</style>
