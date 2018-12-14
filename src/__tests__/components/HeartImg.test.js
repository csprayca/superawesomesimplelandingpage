/* eslint-env jest */
import React from 'react';
import renderer from 'react-test-renderer';
import HeartImg from '../../components/HeartImg';

describe('HeartImg component', () => {
  describe('given default setup', () => {
    it('works as expected', () => {
      const component = renderer.create(<HeartImg />);
      const renderedTree = component.toJSON();

      expect(renderedTree).toMatchSnapshot();
    });
  });
});
