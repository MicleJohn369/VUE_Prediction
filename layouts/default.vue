<template>
  <v-app>
    <v-navigation-drawer
      v-model="drawer"
      :mini-variant="miniVariant"
      :clipped="clipped"
      floating
      app
    >
      <v-list>
        <div
          v-for="(item, i) in items"
          :key="i"
        >
          <v-list-item
            v-if="!item.items"
            :key="i"
            :to="item.to"
            exact
            class="v-list-item"
          >
            <v-list-item-action>
              <v-icon
                :color="item.iconColor"
              >
                {{ item.icon }}
              </v-icon>
            </v-list-item-action>
            <v-list-item-title v-text="item.title" />
          </v-list-item>
          <v-list-group
            v-else
            :key="item.title"
            no-action
          >
            <template #activator>
              <v-list-item
                class="px-0"
              >
                <v-list-item-action>
                  <v-icon
                    v-if="item.icon"
                    :color="item.iconColor"
                  >
                    {{ item.icon }}
                  </v-icon>
                </v-list-item-action>
                <v-list-item-content>
                  <v-list-item-title>{{ item.title }}</v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </template>
            <v-list-item
              v-for="(subItem, j) in item.items"
              :key="j"
              :to="subItem.to"
              exact
              class="pl-8"
            >
              <v-list-item-action>
                <v-icon
                  v-if="subItem.icon"
                  :color="subItem.iconColor"
                >
                  {{ subItem.icon }}
                </v-icon>
              </v-list-item-action>
              <v-list-item-content>
                <v-list-item-title v-text="subItem.title" />
              </v-list-item-content>
            </v-list-item>
          </v-list-group>
        </div>
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
          exact
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
            target="_blank"
            to="/docs"
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
    <v-dialog
      v-model="showAdblockDialog"
      max-width="500"
    >
      <v-card>
        <v-card-title class="text-h5">
          {{ adblockTitle }}
        </v-card-title>
        <v-card-text class="text-justify">
          {{ adblockText }}
        </v-card-text>
        <v-divider />
        <v-card-actions>
          <v-spacer />
          <v-btn
            dark
            color="teal"
            onclick="location.reload(true)"
          >
            <v-icon
              left
              dark
            >
              mdi-cached
            </v-icon>
            {{ reloadText }}
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-app>
</template>

<script>
import { detectAnyAdblocker } from 'vue-adblock-detector';

export default {
  data() {
    return {
      clipped: true,
      drawer: true,
      fixed: false,
      miniVariant: false,
      showAdblockDialog: false,
      adblockTitle: this.$t('COMMON.ADBLOCK.TITLE'),
      adblockText: this.$t('COMMON.ADBLOCK.TEXT'),
      reloadText: this.$t('COMMON.ADBLOCK.RELOAD.TEXT'),
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
          iconColor: 'primary',
          title: this.$t('MENU.QUINIELA.TEXT'),
          items: [
            {
              icon: 'mdi-dice-multiple',
              title: this.$t('MENU.QUINIELA.PROBABILITIES.TEXT'),
              to: this.localePath({
                name: 'quiniela',
              }),
            }, {
              icon: 'mdi-history',
              title: this.$t('MENU.QUINIELA.TICKETS.TEXT'),
              to: this.localePath({
                name: 'quiniela-tickets',
              }),
            }, {
              icon: 'mdi-poll-box',
              title: this.$t('MENU.QUINIELA.STATS.TEXT'),
              to: this.localePath({
                name: 'quiniela-stats',
              }),
            },
          ],
        }, {
          icon: 'mdi-clover',
          iconColor: 'black',
          title: this.$t('MENU.BONOLOTO.TEXT'),
          items: [
            {
              icon: 'mdi-dice-multiple',
              title: this.$t('MENU.BONOLOTO.PROBABILITIES.TEXT'),
              to: this.localePath({
                name: 'bonoloto',
              }),
            }, {
              icon: 'mdi-history',
              title: this.$t('MENU.BONOLOTO.TICKETS.TEXT'),
              to: this.localePath({
                name: 'bonoloto-tickets',
              }),
            }, {
              icon: 'mdi-poll-box',
              title: this.$t('MENU.BONOLOTO.STATS.TEXT'),
              to: this.localePath({
                name: 'bonoloto-stats',
              }),
            },
          ],
        }, {
          icon: 'mdi-cash',
          iconColor: 'green darken-2',
          title: this.$t('MENU.PRIMITIVA.TEXT'),
          items: [
            {
              icon: 'mdi-dice-multiple',
              title: this.$t('MENU.PRIMITIVA.PROBABILITIES.TEXT'),
              to: this.localePath({
                name: 'primitiva',
              }),
            }, {
              icon: 'mdi-history',
              title: this.$t('MENU.PRIMITIVA.TICKETS.TEXT'),
              to: this.localePath({
                name: 'primitiva-tickets',
              }),
            }, {
              icon: 'mdi-poll-box',
              title: this.$t('MENU.PRIMITIVA.STATS.TEXT'),
              to: this.localePath({
                name: 'primitiva-stats',
              }),
            },
          ],
        }, {
          icon: 'mdi-cash-multiple',
          iconColor: 'red darken-2',
          title: this.$t('MENU.GORDO.TEXT'),
          items: [
            {
              icon: 'mdi-dice-multiple',
              title: this.$t('MENU.GORDO.PROBABILITIES.TEXT'),
              to: this.localePath({
                name: 'gordo',
              }),
            }, {
              icon: 'mdi-history',
              title: this.$t('MENU.GORDO.TICKETS.TEXT'),
              to: this.localePath({
                name: 'gordo-tickets',
              }),
            }, {
              icon: 'mdi-poll-box',
              title: this.$t('MENU.GORDO.STATS.TEXT'),
              to: this.localePath({
                name: 'gordo-stats',
              }),
            },
          ],
        }, {
          icon: 'mdi-star-circle',
          iconColor: 'purple darken-4',
          title: this.$t('MENU.EUROMILLONES.TEXT'),
          items: [
            {
              icon: 'mdi-dice-multiple',
              title: this.$t('MENU.EUROMILLONES.PROBABILITIES.TEXT'),
              to: this.localePath({
                name: 'euromillones',
              }),
            }, {
              icon: 'mdi-history',
              title: this.$t('MENU.EUROMILLONES.TICKETS.TEXT'),
              to: this.localePath({
                name: 'euromillones-tickets',
              }),
            }, {
              icon: 'mdi-poll-box',
              title: this.$t('MENU.EUROMILLONES.STATS.TEXT'),
              to: this.localePath({
                name: 'euromillones-stats',
              }),
            },
          ],
        },
      ],
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
  beforeMount() {
    this.detectAdblock();
  },
  methods: {
    detectAdblock() {
      detectAnyAdblocker().then((response) => {
        if (response) {
          this.showAdblockDialog = true;
        }
      });
    },
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
