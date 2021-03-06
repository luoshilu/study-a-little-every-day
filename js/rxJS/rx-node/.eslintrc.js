export default {
  'env': {
    'node': true,
    'browser': true,
    'commonjs': true,
    'es6': true
  },
  'extends': 'eslint:recommended',
  'parserOptions': {
    'ecmaFeatures': {
      'jsx': true
    },
    'sourceType': 'module'
  },
  'rules': {
    'indent': [
      'error',
      2
    ],
    'linebreak-style': [
      'error',
      'unix'
    ],
    // 'quotes': [
    //   'error',
    //   'double'
    // ],
    // 'semi': [
    //   'error',
    //   'false'
    // ],
    'no-console': 'off'
  }
}
