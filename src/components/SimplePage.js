import React, { Fragment } from 'react';
import PageInfoSection from './PageInfoSection';
import LinkListSection from './LinkListSection';
import FooterSection from './FooterSection';

const UpperPage = opts => {
  const { user, links } = opts;
  if (user && links) {
    return (
      <Fragment>
        <main>
          <PageInfoSection title={user.title} subTitle={user.subTitle} />
          <LinkListSection links={links} />
        </main>
        <style jsx>{`
          main {
            display: flex;
            flex-direction: column;
            align-items: center;
          }
        `}</style>
      </Fragment>
    );
  } else {
    return (
      <Fragment>
        <main>
          <PageInfoSection />
          <LinkListSection />
        </main>
        <style jsx>{`
          main {
            display: flex;
            flex-direction: column;
            align-items: center;
          }
        `}</style>
      </Fragment>
    );
  }
};

const SuperAwesomeSimpleLandingPage = ({ user, links }) => (
  <Fragment>
    <UpperPage user={user} links={links} />
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
  </Fragment>
);

export default SuperAwesomeSimpleLandingPage;
