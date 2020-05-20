module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
    jest: true
  },

  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true
    }
  },
  extends: ['eslint:recommended', 'plugin:react/recommended', 'airbnb-base'],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly'
  },

  rules: { 'comma-dangle': ['error', 'never'], 'no-param-reassign': ['error', { props: false }] },
  parser: 'babel-eslint'
};
