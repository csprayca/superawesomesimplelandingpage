'use strict';

const React = require('react');

const Link = ({ title, fromURL }) => {
  // if (title && title.length === 0) {
  //   return null;
  // }
  // if (fromURL && fromURL.length === 0) {
  //   return null;
  // }

  return (
    <React.Fragment>
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
    </React.Fragment>
  );
};

exports = module.exports = Link;
