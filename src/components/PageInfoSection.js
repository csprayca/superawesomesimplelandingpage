import React, { Fragment } from 'react';

const PageInfoSection = ({
  title = 'Last minute laura',
  subTitle = 'Artist. Maker. Creator.'
}) => {
  return (
    <Fragment>
      <section>
        <h1>{title}</h1>
        <h2>{subTitle}</h2>
      </section>
      <style jsx>{`
        section {
          padding-left: 1em;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
        }
        h1 {
          text-transform: uppercase;
        }
        h2 {
          font-weight: lighter;
        }
      `}</style>
    </Fragment>
  );
};

export default PageInfoSection;
