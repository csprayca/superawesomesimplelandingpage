/* eslint-env jest */
import React from 'react';
import renderer from 'react-test-renderer';
import FooterSection from '../../components/FooterSection';

describe('FooterSection component', () => {
  describe('given default setup', () => {
    test('it renders just fine', () => {
      const component = renderer.create(<FooterSection />);
      const renderTree = component.toJSON();

      expect(renderTree).toMatchSnapshot();
    });
  });
});
