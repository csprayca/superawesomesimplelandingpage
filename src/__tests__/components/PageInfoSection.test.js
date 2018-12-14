/* eslint-env jest */

import React from 'react';
import renderer from 'react-test-renderer';
import PageInfoSection from '../../components/PageInfoSection';

describe('PageInfoSection component', () => {
  describe('given default settings', () => {
    it('works as expected', () => {
      const component = renderer.create(<PageInfoSection />);
      const renderTree = component.toJSON();
      expect(renderTree).toMatchSnapshot();
    });
  });

  describe('given proper input', () => {
    it('works as expected', () => {
      const component = renderer.create(
        <PageInfoSection title="Alex Kluew" subTitle="Make all the things!" />
      );
      const tree = component.toJSON();
      expect(tree).toMatchSnapshot();
    });
  });
});
