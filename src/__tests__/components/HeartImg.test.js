/* eslint-env jest */
'use strict';

const React = require('react');
const renderer = require('react-test-renderer');
const HeartImg = require('../../components/HeartImg');

describe('HeartImg component', () => {
  describe('given default setup', () => {
    it('works as expected', () => {
      const component = renderer.create(<HeartImg />);
      const renderedTree = component.toJSON();

      expect(renderedTree).toMatchSnapshot();
    });
  });
});
