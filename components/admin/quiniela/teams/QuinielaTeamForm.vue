<template>
  <v-form
    ref="teamForm"
    v-model="valid"
  >
    <v-container fluid>
      <v-row>
        <v-col
          cols="12"
          md="6"
        >
          <v-text-field
            v-model="teamForm.name"
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
            v-model="teamForm.value"
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
              name: 'admin-quiniela-teams'
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
  name: 'QuinielaTeamForm',
  props: {},
  data() {
    const initialTeamForm = {
      name: '',
      value: '',
    };

    return {
      isEditMode: !!this.$route.params.id,
      rules: {
        name: [
          (v) => !!v || 'xoxName is required',
        ],
        value: [
          (v) => !!v || 'xoxValue is required',
        ],
      },
      valid: false,
      initialTeamForm,
      teamForm: utils.cloneObject(initialTeamForm),
      nameText: this.$t('DASHBOARD.VIEWS.QUINIELA.TEAMS.TEAM_FORM.NAME.LABEL'),
      valueText: this.$t('DASHBOARD.VIEWS.QUINIELA.TEAMS.TEAM_FORM.VALUE.LABEL'),
      valuePlaceholder: this.$t('DASHBOARD.VIEWS.QUINIELA.TEAMS.TEAM_FORM.VALUE.PLACEHOLDER'),
      cancelButtonText: this.$t('COMMON.BUTTON.CANCEL.TEXT'),
      submitButtonText: this.$t('COMMON.BUTTON.SUBMIT.TEXT'),
    };
  },
  computed: {},
  created() {
    const teamForm = {};

    if (this.isEditMode) {
      teamForm.name = utils.cloneObject(this.$store.state.quiniela.currentTeam.name);
      teamForm.value = utils.cloneObject(this.$store.state.quiniela.currentTeam.value);
    }

    this.teamForm = { ...this.teamForm, ...teamForm };
  },
  methods: {
    async validateForm() {
      this.$refs.teamForm.validate();

      return this.valid;
    },
    async submitForm() {
      const result = await this.validateForm();
      if (result) this.$emit('onSubmit');
    },
  },
};
</script>
