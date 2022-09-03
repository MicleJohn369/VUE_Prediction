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
export default {
  name: 'QuinielaCompetitionsFiltersForm',
  props: {},
  data() {
    return {
      rules: {
        name: [],
      },
      valid: false,
      nameText: this.$t('DASHBOARD.VIEWS.QUINIELA.COMPETITIONS.FILTERS.NAME.LABEL'),
      searchText: this.$t('COMMON.BUTTON.SEARCH.TEXT'),
    };
  },
  computed: {
    name: {
      get() {
        return this.$store.state.quiniela.competitionsFilters.name;
      },
      set(value) {
        const filters = this.$store.state.quiniela.competitionsFilters;
        this.$store.commit('quiniela/setCompetitionsFilters', {
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
