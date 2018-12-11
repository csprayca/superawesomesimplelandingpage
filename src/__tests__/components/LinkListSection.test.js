/* eslint-env jest */
'use strict';

const React = require('react');
const renderer = require('react-test-renderer');
const LinkListSection = require('../../components/LinkListSection');

const links = [
  {
    title: 'Watch my latest video',
    toURL: 'https://youtu.be/bwESQ8wOJ5Y',
    fromURL: '/latestvideo'
  },
  {
    title: 'Follow behind the scenes on instagram',
    toURL: 'https://www.instagram.com/lastminutelaura.ca',
    fromURL: '/instagram'
  },
  {
    title: 'Checkout my etsy store for one of a kind items',
    toURL: 'https://www.etsy.com/ca/shop/LastMinuteLaura',
    fromURL: '/etsy'
  },
  {
    title: 'Recent Livestream',
    toURL: 'https://youtu.be/ZaSOYhQUQSw',
    fromURL: '/recentlivestream'
  },
  {
    title: 'Youtube',
    toURL: 'https://www.youtube.com/channel/UCB5mFx3KjuOuMZoXDLSUvSg',
    fromURL: '/youtube'
  }
];

describe('LinkListSection component', () => {
  describe('given no input, default settings', () => {
    test('it works as expected', () => {
      const component = renderer.create(<LinkListSection />);
      const renderTree = component.toJSON();

      expect(renderTree).toMatchSnapshot();
    });
  });

  describe('given expected input', () => {
    test('it renders the list as expected', () => {
      const component = renderer.create(<LinkListSection links={links} />);
      const renderTree = component.toJSON();

      expect(renderTree).toMatchSnapshot();
    });
  });
});
