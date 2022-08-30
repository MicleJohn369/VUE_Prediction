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
          <v-text-field
            v-model="name"
            :rules="rules.name"
            :label="nameText"
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
import utils from '@/utils';

export default {
  name: 'QuinielaSeasonsFiltersForm',
  props: {},
  data() {
    return {
      rules: {
        name: [],
      },
      valid: false,
      nameText: this.$t('DASHBOARD.VIEWS.QUINIELA.SEASONS.FILTERS.NAME.LABEL'),
      searchText: this.$t('COMMON.BUTTON.SEARCH.TEXT'),
      roles: [
        {
          name: this.$t('ROLES.ADMIN.TEXT'),
          value: utils.ROLES.ADMIN.VALUE,
        }, {
          name: this.$t('ROLES.PRIVILEGED.TEXT'),
          value: utils.ROLES.PRIVILEGED.VALUE,
        },
      ],
    };
  },
  computed: {
    name: {
      get() {
        return this.$store.state.quiniela.seasonsFilters.name;
      },
      set(value) {
        const filters = this.$store.state.quiniela.seasonsFilters;
        this.$store.commit('quiniela/setSeasonsFilters', {
          ...filters,
          name: value,
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
