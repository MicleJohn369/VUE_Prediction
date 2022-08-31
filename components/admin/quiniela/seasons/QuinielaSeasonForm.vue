<template>
  <v-form
    ref="seasonForm"
    v-model="valid"
  >
    <v-container fluid>
      <v-row>
        <v-col
          cols="12"
          md="6"
        >
          <v-text-field
            v-model="seasonForm.name"
            :rules="rules.name"
            :label="nameText"
            clearable
          />
        </v-col>
      </v-row>
      <v-row>
        <v-col
          cols="12"
          md="6"
        >
          <v-text-field
            v-model="seasonForm.value"
            :rules="rules.value"
            :label="valueText"
            :placeholder="valuePlaceholder"
            :persistent-placeholder="true"
            clearable
          />
        </v-col>
      </v-row>
      <v-row>
        <v-col
          cols="12"
          md="6"
        >
          <v-btn
            nuxt
            :to="localePath({
              name: 'admin-quiniela-seasons'
            })"
          >
            {{ cancelButtonText }}
          </v-btn>
          <v-btn
            class="float-right"
            color="primary"
            @click="submitForm"
          >
            {{ submitButtonText }}
          </v-btn>
        </v-col>
      </v-row>
    </v-container>
  </v-form>
</template>

<script>
import utils from '@/utils';

export default {
  name: 'QuinielaSeasonForm',
  props: {},
  data() {
    const initialSeasonForm = {
      name: '',
      value: '',
    };

    return {
      isEditMode: !!this.$route.params.id,
      rules: {
        name: [
          (v) => !!v || this.$t('DASHBOARD.VIEWS.QUINIELA.SEASONS.SEASON_FORM.NAME.ERRORS.REQUIRED'),
        ],
        value: [
          (v) => !!v || this.$t('DASHBOARD.VIEWS.QUINIELA.SEASONS.SEASON_FORM.VALUE.ERRORS.REQUIRED'),
        ],
      },
      valid: false,
      initialSeasonForm,
      seasonForm: utils.cloneObject(initialSeasonForm),
      nameText: this.$t('DASHBOARD.VIEWS.QUINIELA.SEASONS.SEASON_FORM.NAME.LABEL'),
      valueText: this.$t('DASHBOARD.VIEWS.QUINIELA.SEASONS.SEASON_FORM.VALUE.LABEL'),
      valuePlaceholder: this.$t('DASHBOARD.VIEWS.QUINIELA.SEASONS.SEASON_FORM.VALUE.PLACEHOLDER'),
      cancelButtonText: this.$t('COMMON.BUTTON.CANCEL.TEXT'),
      submitButtonText: this.$t('COMMON.BUTTON.SUBMIT.TEXT'),
    };
  },
  computed: {},
  created() {
    const seasonForm = {};

    if (this.isEditMode) {
      seasonForm.name = utils.cloneObject(this.$store.state.quiniela.currentSeason.name);
      seasonForm.value = utils.cloneObject(this.$store.state.quiniela.currentSeason.value);
    }

    this.seasonForm = { ...this.seasonForm, ...seasonForm };
  },
  methods: {
    async validateForm() {
      this.$refs.seasonForm.validate();

      return this.valid;
    },
    async submitForm() {
      const result = await this.validateForm();
      if (result) this.$emit('onSubmit');
    },
  },
};
</script>
