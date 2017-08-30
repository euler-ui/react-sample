module.exports = {
  parser: 'babel-eslint',
  extends: 'airbnb',
  plugins: ['react', 'jsx-a11y', 'import'],
  env: {
    browser: true,
    node: true,
    jest: true,
  },
  settings: {
    'import/resolver': {
      node: {
        moduleDirectory: ['node_modules', 'src'],
      },
    },
  },
  rules: {
    'arrow-parens': 'off', // Incompatible with prettier
    'arrow-body-style': 'off', // Not our taste?
    'react/jsx-filename-extension': [2, { extensions: ['.js'] }],
    'func-names': ['error', 'as-needed'],
    'no-param-reassign': 0,
    'space-before-function-paren': 'off',
    'import/no-extraneous-dependencies': ['error', { devDependencies: ['server/**/*.js'] }],
  },
};
