module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  globals: {
    bootstrap: 'readonly'
  },
  plugins: [
    'svelte3'
  ],
  overrides: [
    {
      files: ['*.svelte'],
      processor: 'svelte3/svelte3'
    }
  ],
  extends: [
    'standard'
  ],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module'
  },
  rules: {
    // these rules have issues with svelte
    'no-multiple-empty-lines': 'off',
    'prefer-const': 'off',
    'import/first': 'off'
  }
}
