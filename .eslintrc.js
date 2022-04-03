module.exports = {
  env: {
    browser: true,
    es2022: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:vue/vue3-essential',
    "plugin:vue/vue3-recommended",
    "prettier",
    "plugin:unicorn/recommended",
  ],
  parser: 'vue-eslint-parser',
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: [
    'vue',
    "unicorn"
  ],
  ignorePatterns: ["*.spec.js", "*.config.js", ".eslintrc.js"],
  rules: {
    "unicorn/filename-case": "off"
  },
  settings: {
    'import/resolver': {
      nuxt: {
        extensions: ['.js', '.vue'],
      },
    },
  },
};
