/* eslint-env jest */

import React from 'react';
import renderer from 'react-test-renderer';
import Link from '../../components/Link';

const expected = {
  title: 'Youtube',
  toURL: 'https://www.youtube.com/channel/UCB5mFx3KjuOuMZoXDLSUvSg',
  fromURL: '/youtube'
};

describe('Link Component', () => {
  describe('given valid input', () => {
    test('works as expected', () => {
      const component = renderer.create(
        <Link title={expected.title} fromURL={expected.fromURL} />
      );

      let tree = component.toJSON();
      expect(tree).toMatchSnapshot();
    });
  });

  describe('given missing input', () => {
    test('it renders with no title when a title is missing', () => {
      const component = renderer.create(<Link />);
      let tree = component.toJSON();
      expect(tree).toMatchSnapshot();
    });

    test('it renders with no target link when a fromURL is missing', () => {
      const component = renderer.create(<Link title={expected.title} />);
      let tree = component.toJSON();
      expect(tree).toMatchSnapshot();
    });
  });
});
