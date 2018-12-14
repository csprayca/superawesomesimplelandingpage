/**
 * This file contains the protocol, or the format, that I am expecting to use in this project. If you follow the format below you should guarantee that eveything else will work. Feel free to look through the tests if you need adjustments.
 *
 * So you need to feed some user data. At the moment we want `title` an `subTitle`.
 *
 * For example:
 *
 * ```js
 * const user = {
 *  title: 'Last minute laura',
 *  subTitle: '🎭 Artist. Maker. Creator.'
 * };
 * ```
 *
 * Then we need the actual list of links that you want to appear on your landing page. There are two requirements:
 *
 * 1. It must be an array of objects
 * 2. Each object must have the following attributes: `title`, `toURL`, and `fromURL`
 *
 * For example:
 *
 * ```js
 * const links = [{
 *  title: 'Watch my latest video',
 *  toURL: 'https://youtu.be/bwESQ8wOJ5Y',
 *  fromURL: '/latestvideo'
 * }, {
 *  title: 'Follow behind the scenes on instagram',
 *  toURL: 'https://www.instagram.com/lastminutelaura.ca',
 *  fromURL: '/instagram'
 * },
 * {
 *  title: 'Checkout C Spray - a product we made',
 *  toURL: 'https://cspray.ca',
 *  fromURL: '/cspray'
 * },
 * {
 *  title: 'Checkout my etsy store for one of a kind items',
 *  toURL: 'https://www.etsy.com/ca/shop/LastMinuteLaura',
 *  fromURL: '/etsy'
 * },{
 *  title: 'Recent Livestream',
 *  toURL: 'https://youtu.be/ZaSOYhQUQSw',
 *  fromURL: '/recentlivestream'
 * },{
 *  title: 'Youtube',
 *  toURL: 'https://www.youtube.com/channel/UCB5mFx3KjuOuMZoXDLSUvSg',
 *  fromURL: '/youtube'
 * }];
 * ```
 *
 * and then you simply export this data :
 *
 * ```js
 * exports = module.exports = { links: links, user: user };
 * ```
 *
 * @tutorial sample-default-data-use-case
 */

const user = {
  title: 'Last minute laura',
  subTitle: '🎭 Artist. Maker. Creator.'
};

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
    title: 'Checkout C Spray - a product we made',
    toURL: 'https://cspray.ca',
    fromURL: '/cspray'
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

exports = module.exports = { links: links, user: user };
