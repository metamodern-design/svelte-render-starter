module.exports = {
  extends: 'airbnb-base',
  parserOptions: {
    ecmaVersion: '2020',
    sourceType: 'module',
  },
  env: {
    es6: true,
    browser: true,
  },
  plugins: [
    'import',
    'svelte3',
  ],
  overrides: [{
    files: [ '*.svelte' ],
    processor: 'svelte3/svelte3',
    excludedFiles: 'src/index.svelte',
  }], 
  rules: {
    'no-undef': 'warn',
    'no-unused-vars': 'off',
    'no-multiple-empty-lines': [
      'error', 
      { 'max': 2 },
    ],
    'import/no-extraneous-dependencies': [
      'error',
      { devDependencies: [ 'test/*.js' ] },
    ],
    'import/extensions': [
      'error',
      'always',
      { ignorePackages: true },
    ],
    'import/prefer-default-export': 'off',
    'import/no-mutable-exports': 'off',
  },
  settings: {
    'svelte3/ignore-styles': () => true,
    'svelte3/ignore-warnings': () => true,
    'import/resolver': {
      'eslint-import-resolver-custom-alias': {
        'alias': {
          '_': './src',
          '$': './src/components',
          '@': './src/routes',
        },
        'extensions': ['.js', '.svelte'],
      },
    },
  },
};
