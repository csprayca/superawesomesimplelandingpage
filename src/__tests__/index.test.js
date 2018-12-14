/* eslint-env jest */
// https://github.com/patrickleet/open-source-setup/commit/840376c55c111008a5b06f4e118decba7e3eae5f

import saslp from '../index';

describe('base project', () => {
  test('should have tests', () => {
    expect(saslp.SimplePage).toBeInstanceOf(Function);
    expect(saslp.FooterSection).toBeInstanceOf(Function);
    expect(saslp.Link).toBeInstanceOf(Function);
    expect(saslp.ListLiList).toBeInstanceOf(Function);
    expect(saslp.LinkListSection).toBeInstanceOf(Function);
    expect(saslp.HeartImg).toBeInstanceOf(Function);
    expect(saslp.FooterSection).toBeInstanceOf(Function);
    expect(saslp.defaultLinks).toBeInstanceOf(Array);
  });
});
