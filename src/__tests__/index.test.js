/* eslint-env jest */
// https://github.com/patrickleet/open-source-setup/commit/840376c55c111008a5b06f4e118decba7e3eae5f

const index = require('../index');

describe('base project', () => {
  test('should have tests', () => {
    expect(index()).toEqual({ hello: 'world' });
  });
});
