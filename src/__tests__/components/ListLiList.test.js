/* eslint-env jest */
import React from 'react';
import renderer from 'react-test-renderer';
import ListLiList from '../../components/ListLiList';

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

describe('ListLiList component', () => {
  describe('given no input, default settings', () => {
    test('it works as expected', () => {
      const component = renderer.create(<ListLiList />);
      const renderedTree = component.toJSON();

      expect(renderedTree).toMatchSnapshot();
    });
  });

  describe('given expected input', () => {
    test('it works as expected and shows the collection of links', () => {
      const component = renderer.create(<ListLiList list={links} />);
      const renderedTree = component.toJSON();

      expect(renderedTree).toMatchSnapshot();
    });
  });
});
