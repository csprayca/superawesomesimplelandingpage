import React, { Fragment } from 'react';

const Link = ({ title, fromURL }) => {
  // if (title && title.length === 0) {
  //   return null;
  // }
  // if (fromURL && fromURL.length === 0) {
  //   return null;
  // }

  return (
    <Fragment>
      <a href={fromURL} role="button" title={title}>
        {title}
      </a>
      <style jsx>{`
        a {
          text-decoration: none;
          width: 100%;
          max-width: 100%;
          word-wrap: break-word;
          padding: 1em;
          border-width: 2px;
          border-style: solid;
          border-radius: 1em;
          text-align: center;
        }
      `}</style>
    </Fragment>
  );
};

export default Link;
