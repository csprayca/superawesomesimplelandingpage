'use strict';

const PageInfoSection = require('./components/PageInfoSection');
const Link = require('./components/Link');
const ListLiList = require('./components/ListLiList');
const LinkListSection = require('./components/LinkListSection');
const HeartImg = require('./components/HeartImg');
const FooterSection = require('./components/FooterSection');

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

exports = module.exports = () => ({
  PageInfoSection: PageInfoSection,
  Link: Link,
  ListLiList: ListLiList,
  LinkListSection: LinkListSection,
  HeartImg: HeartImg,
  FooterSection: FooterSection,
  defaultLinks: links
});
