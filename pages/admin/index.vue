<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="8">
      <div class="text-center">
        <div class="text-h3 pb-4">
          Dashboard
        </div>
        <ScrollButton />
        <v-card
          elevation="2"
        >
          <v-card-text class="text-justify">
            <p>xoxTexto introductorio del dashboard</p>
          </v-card-text>
        </v-card>
      </div>
    </v-col>
  </v-row>
</template>

<script>
import ScrollButton from '@/components/ScrollButton.vue';

export default {
  components: {
    ScrollButton,
  },
  layout: 'admin',
  middleware: 'auth',
  data() {
    return {};
  },
  head() {
    return {
      title: this.$t('VIEWS.HOME.TITLE'),
    };
  },
  computed: {},
};
</script>

<style lang="scss" scoped>

</style>
