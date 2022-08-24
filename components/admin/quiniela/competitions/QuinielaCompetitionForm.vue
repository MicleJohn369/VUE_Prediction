<template>
  <v-form
    ref="competitionForm"
    v-model="valid"
  >
    <v-container fluid>
      <v-row>
        <v-col
          cols="12"
          md="6"
        >
          <v-text-field
            v-model="competitionForm.name"
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
            v-model="competitionForm.value"
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
              name: 'admin-quiniela-competitions'
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
  name: 'QuinielaCompetitionForm',
  props: {},
  data() {
    const initialCompetitionForm = {
      name: '',
      value: '',
    };

    return {
      isEditMode: !!this.$route.params.id,
      rules: {
        name: [
          (v) => !!v || this.$t('DASHBOARD.VIEWS.QUINIELA.COMPETITIONS.COMPETITION_FORM.NAME.ERRORS.REQUIRED'),
        ],
        value: [
          (v) => !!v || this.$t('DASHBOARD.VIEWS.QUINIELA.COMPETITIONS.COMPETITION_FORM.VALUE.ERRORS.REQUIRED'),
        ],
      },
      valid: false,
      initialCompetitionForm,
      competitionForm: utils.cloneObject(initialCompetitionForm),
      nameText: this.$t('DASHBOARD.VIEWS.QUINIELA.COMPETITIONS.COMPETITION_FORM.NAME.LABEL'),
      valueText: this.$t('DASHBOARD.VIEWS.QUINIELA.COMPETITIONS.COMPETITION_FORM.VALUE.LABEL'),
      valuePlaceholder: this.$t('DASHBOARD.VIEWS.QUINIELA.COMPETITIONS.COMPETITION_FORM.VALUE.PLACEHOLDER'),
      cancelButtonText: this.$t('COMMON.BUTTON.CANCEL.TEXT'),
      submitButtonText: this.$t('COMMON.BUTTON.SUBMIT.TEXT'),
    };
  },
  computed: {},
  created() {
    const competitionForm = {};

    if (this.isEditMode) {
      competitionForm.name = utils.cloneObject(this.$store.state.quiniela.currentCompetition.name);
      competitionForm.value = utils
        .cloneObject(this.$store.state.quiniela.currentCompetition.value);
    }

    this.competitionForm = { ...this.competitionForm, ...competitionForm };
  },
  methods: {
    async validateForm() {
      this.$refs.competitionForm.validate();

      return this.valid;
    },
    async submitForm() {
      const result = await this.validateForm();
      if (result) this.$emit('onSubmit');
    },
  },
};
</script>
