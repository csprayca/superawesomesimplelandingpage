'use strict';

const React = require('react');

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

const PageInfoSection = require('./components/PageInfoSection');
const LinkListSection = require('./components/LinkListSection');
const FooterSection = require('./components/FooterSection');

const Page = () => {
  return (
    <React.Fragment>
      <main>
        <PageInfoSection />
        <LinkListSection links={links} />
      </main>
      <style jsx>{`
        main {
          display: flex;
          flex-direction: column;
          align-items: center;
        }
      `}</style>
    </React.Fragment>
  );
};

const IndexOG = () => {
  return (
    <div>
      <Page />
      <FooterSection />
      <style global jsx>{`
        body {
          margin: 0;
          padding: 0;
          color: #222d59;
          font-family: 'Nunito', sans-serif;
          background-color: #f3f8f2;
        }
      `}</style>
    </div>
  );
};

exports = module.exports = IndexOG;
