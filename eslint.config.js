// eslint.config.js
const antfu = require('@antfu/eslint-config').default

module.exports = antfu(
  {
    // Type of the project. 'lib' for libraries, the default is 'app'
    type: 'lib',

    // TypeScript and Vue are auto-detected, you can also explicitly enable them:
    typescript: false,
    vue: {
      vueVersion: 2,
      overrides: {
        'vue/block-order': ['error', {
          order: [['script', 'template'], 'style'],
        }],
        'vue/custom-event-name-casing': ['error', 'kebab-case'],
        'vue/no-unused-refs': 'warn',
        'no-console': 'warn',
      },
    },

    // Disable jsonc and yaml support
    // jsonc: false,
    yaml: false,
    // toml: false,

    lessOpinionated: true,
  },
  {
    rules: {
      'perfectionist/sort-imports': 'off',
    },
  },
)
