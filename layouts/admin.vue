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
      color="black"
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
        :title="logoutTitle"
        target="_blank"
        rel="nofollow"
        @click="$auth.logout()"
      >
        <v-icon>
          mdi-logout
        </v-icon>
      </v-btn>
    </v-app-bar>
    <v-main>
      <v-container>
        <nuxt />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      clipped: true,
      drawer: true,
      fixed: false,
      miniVariant: false,
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
              icon: 'mdi-chart-box',
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
              icon: 'mdi-chart-box',
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
              icon: 'mdi-chart-box',
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
              icon: 'mdi-chart-box',
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
              icon: 'mdi-chart-box',
              title: this.$t('MENU.EUROMILLONES.STATS.TEXT'),
              to: this.localePath({
                name: 'euromillones-stats',
              }),
            },
          ],
        },
      ],
      title: 'Dashboard',
      logoutTitle: this.$t('TOP_BAR.LOGOUT.TITLE'),
    };
  },
  methods: {},
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
</style>
