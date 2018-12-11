'use strict';

const React = require('react');

const PageInfoSection = ({
  title = 'Last minute laura',
  subTitle = 'Artist. Maker. Creator.'
}) => {
  return (
    <React.Fragment>
      <section>
        <h1>{title}</h1>
        <h2>{subTitle}</h2>
      </section>
      <style jsx>{`
        section {
          padding-left: 1em;
        }
        h1 {
          text-transform: uppercase;
        }
        h2 {
          font-weight: lighter;
        }
      `}</style>
    </React.Fragment>
  );
};

exports = module.exports = PageInfoSection;
