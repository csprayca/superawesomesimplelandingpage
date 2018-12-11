'use strict';

/**
 * References:
 *
 * - https://stackoverflow.com/a/43425808
 * - https://www.npmjs.com/package/eslint-plugin-react
 * - https://eslint.org/docs/rules/jsx-quotes
 * - https://stackoverflow.com/a/46809082
 * - https://standardjs.com/#is-there-an-automatic-formatter
 */

exports = module.exports = {
  extends: ['standard', 'standard-react'],
  rules: {
    semi: [2, 'always'],
    'space-before-function-paren': [
      'error',
      {
        anonymous: 'always',
        named: 'never',
        asyncArrow: 'always'
      }
    ],
    'react/prop-types': 0,
    'jsx-quotes': 0
  }
};
