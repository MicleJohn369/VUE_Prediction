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
            name: 'admin',
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
      <v-container fluid>
        <nuxt />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import Vue from 'vue';

export default {
  data() {
    return {
      clipped: true,
      drawer: true,
      fixed: false,
      miniVariant: false,
      items: [
        {
          icon: 'mdi-account-group',
          title: this.$t('DASHBOARD.MENU.USERS.TEXT'),
          to: this.localePath({
            name: 'admin-users',
          }),
        }, {
          icon: 'mdi-finance',
          title: this.$t('DASHBOARD.MENU.ECONOMIC_BALANCE.TEXT'),
          to: this.localePath({
            name: 'index',
          }),
        }, {
          icon: 'mdi-soccer',
          iconColor: 'primary',
          title: this.$t('DASHBOARD.MENU.QUINIELA.TEXT'),
          items: [
            {
              icon: 'mdi-shield-star',
              title: this.$t('DASHBOARD.MENU.QUINIELA.TEAMS.TEXT'),
              to: this.localePath({
                name: 'quiniela-teams',
              }),
            }, {
              icon: 'mdi-podium',
              title: this.$t('DASHBOARD.MENU.QUINIELA.COMPETITIONS.TEXT'),
              to: this.localePath({
                name: 'quiniela-competitions',
              }),
            }, {
              icon: 'mdi-calendar',
              title: this.$t('DASHBOARD.MENU.QUINIELA.SEASONS.TEXT'),
              to: this.localePath({
                name: 'quiniela-seasons',
              }),
            }, {
              icon: 'mdi-history',
              title: this.$t('DASHBOARD.MENU.QUINIELA.TICKETS.TEXT'),
              to: this.localePath({
                name: 'quiniela-tickets',
              }),
            }, {
              icon: 'mdi-database-search',
              title: this.$t('DASHBOARD.MENU.QUINIELA.ANALYZER.TEXT'),
              to: this.localePath({
                name: 'quiniela-analyzer',
              }),
            },
          ],
        }, {
          icon: 'mdi-clover',
          iconColor: 'black',
          title: this.$t('DASHBOARD.MENU.BONOLOTO.TEXT'),
          items: [
            {
              icon: 'mdi-calendar',
              title: this.$t('DASHBOARD.MENU.BONOLOTO.YEARS.TEXT'),
              to: this.localePath({
                name: 'bonoloto-years',
              }),
            }, {
              icon: 'mdi-history',
              title: this.$t('DASHBOARD.MENU.BONOLOTO.TICKETS.TEXT'),
              to: this.localePath({
                name: 'bonoloto-tickets',
              }),
            },
          ],
        }, {
          icon: 'mdi-cash',
          iconColor: 'green darken-2',
          title: this.$t('DASHBOARD.MENU.PRIMITIVA.TEXT'),
          items: [
            {
              icon: 'mdi-calendar',
              title: this.$t('DASHBOARD.MENU.PRIMITIVA.YEARS.TEXT'),
              to: this.localePath({
                name: 'primitiva-years',
              }),
            }, {
              icon: 'mdi-history',
              title: this.$t('DASHBOARD.MENU.PRIMITIVA.TICKETS.TEXT'),
              to: this.localePath({
                name: 'primitiva-tickets',
              }),
            },
          ],
        }, {
          icon: 'mdi-cash-multiple',
          iconColor: 'red darken-2',
          title: this.$t('DASHBOARD.MENU.GORDO.TEXT'),
          items: [
            {
              icon: 'mdi-calendar',
              title: this.$t('DASHBOARD.MENU.GORDO.YEARS.TEXT'),
              to: this.localePath({
                name: 'gordo-years',
              }),
            }, {
              icon: 'mdi-history',
              title: this.$t('DASHBOARD.MENU.GORDO.TICKETS.TEXT'),
              to: this.localePath({
                name: 'gordo-tickets',
              }),
            },
          ],
        }, {
          icon: 'mdi-star-circle',
          iconColor: 'purple darken-4',
          title: this.$t('DASHBOARD.MENU.EUROMILLONES.TEXT'),
          items: [
            {
              icon: 'mdi-calendar',
              title: this.$t('DASHBOARD.MENU.EUROMILLONES.YEARS.TEXT'),
              to: this.localePath({
                name: 'euromillones-years',
              }),
            }, {
              icon: 'mdi-history',
              title: this.$t('DASHBOARD.MENU.EUROMILLONES.TICKETS.TEXT'),
              to: this.localePath({
                name: 'euromillones-tickets',
              }),
            },
          ],
        },
      ],
      title: 'Dashboard',
      logoutTitle: this.$t('TOP_BAR.LOGOUT.TITLE'),
    };
  },
  beforeCreate() {
    const token = this.$auth.strategy.token.get();

    Vue.pronostigolClient.setToken(token);
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
