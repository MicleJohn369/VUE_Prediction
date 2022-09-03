<template>
  <v-form
    ref="form"
    v-model="valid"
    @submit.prevent="submitForm"
  >
    <v-container fluid>
      <v-row>
        <v-col
          cols="12"
          md="6"
        >
          <v-autocomplete
            v-model="season"
            :rules="rules.season"
            :items="seasons"
            :label="seasonText"
            item-text="name"
            item-value="value"
          />
        </v-col>
        <v-col
          cols="12"
          md="6"
        >
          <v-menu
            ref="menu"
            v-model="menu"
            :close-on-content-click="false"
            :return-value.sync="date"
            transition="scale-transition"
            offset-y
            min-width="auto"
          >
            <template #activator="{ on, attrs }">
              <v-text-field
                v-model="formattedDate"
                :label="dateText"
                prepend-icon="mdi-calendar"
                readonly
                v-bind="attrs"
                clearable
                v-on="on"
              />
            </template>
            <v-date-picker
              v-model="date"
              no-title
              scrollable
            >
              <v-spacer />
              <v-btn
                text
                color="primary"
                @click="menu = false"
              >
                Cancel
              </v-btn>
              <v-btn
                text
                color="primary"
                @click="$refs.menu.save(date)"
              >
                OK
              </v-btn>
            </v-date-picker>
          </v-menu>
        </v-col>
        <v-col
          cols="12"
          md="6"
        >
          <v-text-field
            v-model="day"
            :rules="rules.day"
            :label="dayText"
            clearable
          />
        </v-col>
      </v-row>
      <v-row
        justify="center"
      >
        <v-col
          cols="auto"
        >
          <v-btn
            color="primary"
            @click="submitForm"
          >
            {{ searchText }}
          </v-btn>
        </v-col>
      </v-row>
    </v-container>
  </v-form>
</template>

<script>
import { mapState } from 'vuex';

import getFormattedDate from '@/mixins/getFormattedDate';

export default {
  name: 'QuinielaTicketsFiltersForm',
  mixins: [
    getFormattedDate,
  ],
  props: {},
  data() {
    return {
      rules: {
        season: [],
        date: [],
        day: [],
      },
      valid: false,
      seasonText: this.$t('DASHBOARD.VIEWS.QUINIELA.TICKETS.FILTERS.SEASON.LABEL'),
      dateText: this.$t('DASHBOARD.VIEWS.QUINIELA.TICKETS.FILTERS.DATE.LABEL'),
      dayText: this.$t('DASHBOARD.VIEWS.QUINIELA.TICKETS.FILTERS.DAY.LABEL'),
      menu: false,
      searchText: this.$t('COMMON.BUTTON.SEARCH.TEXT'),
    };
  },
  computed: {
    ...mapState('quiniela', {
      seasons: (state) => state.seasons.data,
    }),
    season: {
      get() {
        return this.$store.state.quiniela.ticketsFilters.season;
      },
      set(value) {
        const filters = this.$store.state.quiniela.ticketsFilters;
        this.$store.commit('quiniela/setTicketsFilters', {
          ...filters,
          season: value,
        });
      },
    },
    date: {
      get() {
        return this.$store.state.quiniela.ticketsFilters.date;
      },
      set(value) {
        const filters = this.$store.state.quiniela.ticketsFilters;
        this.$store.commit('quiniela/setTicketsFilters', {
          ...filters,
          date: value,
        });
      },
    },
    formattedDate() {
      return this.date ? this.getFormattedDate(this.date) : null;
    },
    day: {
      get() {
        return this.$store.state.quiniela.ticketsFilters.day;
      },
      set(value) {
        const filters = this.$store.state.quiniela.ticketsFilters;
        this.$store.commit('quiniela/setTicketsFilters', {
          ...filters,
          day: value,
        });
      },
    },
  },
  methods: {
    async submitForm() {
      this.$refs.form.validate();

      if (this.valid) {
        this.$emit('onSearch');
      }
    },
  },
};
</script>
