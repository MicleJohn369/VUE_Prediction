module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  parserOptions: {
    parser: 'babel-eslint',
  },
  extends: [
    '@nuxtjs',
    'plugin:nuxt/recommended',
    'airbnb-base',
  ],
  plugins: [
  ],
  // add your custom rules here
  rules: {
    'no-shadow': [
      'error',
      {
        allow: [
          'state',
        ],
      },
    ],
    'no-debugger': [
      'warn',
    ],
  },
  settings: {
    'import/resolver': {
      webpack: {
        config: {
          resolve: {
            alias: {
              '@': __dirname,
              '~': __dirname,
            },
          },
        },
      },
    },
  },
};
