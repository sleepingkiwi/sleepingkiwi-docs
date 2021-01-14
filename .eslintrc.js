module.exports = {
  parser: 'babel-eslint',
  extends: ['airbnb-base'],
  plugins: [],
  overrides: [],
  rules: {
    // two line breaks max - airbnb says one but I like having two to help divide bigger files
    'no-multiple-empty-lines': [
      'error',
      {
        max: 2,
      },
    ],
    // don't throw an error for `/*****lol` but do for `//lol`
    'spaced-comment': [
      'error',
      'always',
      {
        exceptions: [
          '*',
        ],
      },
    ],
    'function-paren-newline': [
      'error',
      'consistent',
    ],
    // allow us to import from svelte etc. even though it's a dev dependency
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: true,
      },
    ],
  },
  settings: {},
  env: {
    browser: true,
    // needed for globals like `require` and `process` (i.e. process.env.NODE_ENV)
    node: true,
  },
}; // returned config object
