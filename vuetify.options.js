export default function vuetifyOptions({ app }) {
  return {
    customVariables: ['~/assets/variables.scss'],
    dark: false,
    lang: {
      t: (key, ...params) => app.i18n.t(key, params),
    },
  };
}
