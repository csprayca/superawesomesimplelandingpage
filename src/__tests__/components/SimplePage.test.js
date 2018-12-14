/* eslint-env jest */
import React from 'React';
import renderer from 'react-test-renderer';
import SimplePage from '../../components/SimplePage';

describe('SimplePage component', () => {
  describe('given default setup with no input', () => {
    it('works as expected with default data', () => {
      const component = renderer.create(<SimplePage />);
      const renderTree = component.toJSON();

      expect(renderTree).toMatchSnapshot();
    });
  });
  describe('given arguments', () => {
    it('works as expected', () => {
      const user = {
        title: 'Alex Kluew',
        subTitle: '🎭 Art. Engineering. Business. People.'
      };

      const links = [
        {
          title: 'Read my ramblings on twitter',
          toURL: 'https://twitter.com/getaclue_1',
          fromURL: '/twitters'
        },
        {
          title: 'Follow behind the scenes on instagram',
          toURL: 'https://www.instagram.com/getaclue_1/',
          fromURL: '/instagram'
        },
        {
          title: 'I livestream sometimes here',
          toURL: 'https://www.twitch.tv/getaclue_1',
          fromURL: '/livestream'
        },
        {
          title: 'Checkout C Spray - a product we made',
          toURL: 'https://cspray.ca',
          fromURL: '/cspray'
        }
      ];

      const component = renderer.create(
        <SimplePage user={user} links={links} />
      );

      const renderTree = component.toJSON();

      expect(renderTree).toMatchSnapshot();
    });
  });
});
