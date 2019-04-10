module.exports = {
  root: true,
  extends: ['ali/react', 'prettier'],
  parser: 'babel-eslint',
  rules: {
    'no-unused-vars': [
      'error',
      {
        vars: 'all',
        args: 'after-used',
        ignoreRestSiblings: false,
        varsIgnorePattern: 'createElement',
      },
    ],
  },
};
