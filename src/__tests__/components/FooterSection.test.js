/* eslint-env jest */
'use strict';

const React = require('react');
const renderer = require('react-test-renderer');
const FooterSection = require('../../components/FooterSection');

describe('FooterSection component', () => {
  describe('given default setup', () => {
    test('it renders just fine', () => {
      const component = renderer.create(<FooterSection />);
      const renderTree = component.toJSON();

      expect(renderTree).toMatchSnapshot();
    });
  });
});
