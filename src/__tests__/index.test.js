/* eslint-env jest */
// https://github.com/patrickleet/open-source-setup/commit/840376c55c111008a5b06f4e118decba7e3eae5f

const index = require('../index');

describe('base project', () => {
  test('should have tests', () => {
    const landingPage = index();

    expect(landingPage.FooterSection).toBeInstanceOf(Function);
    expect(landingPage.Link).toBeInstanceOf(Function);
    expect(landingPage.ListLiList).toBeInstanceOf(Function);
    expect(landingPage.LinkListSection).toBeInstanceOf(Function);
    expect(landingPage.HeartImg).toBeInstanceOf(Function);
    expect(landingPage.FooterSection).toBeInstanceOf(Function);
    expect(landingPage.defaultLinks).toBeInstanceOf(Array);
  });
});
