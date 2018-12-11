'use strict';

const React = require('react');
const Link = require('./Link');

const ListLiList = ({ list = [] }) => {
  if (list && list.length === 0) {
    return null;
  }

  return (
    <React.Fragment>
      {list.map((item, index) => (
        <li key={index}>
          <Link title={item.title} fromURL={item.fromURL} />
        </li>
      ))}
      <style jsx>{`
        li {
          display: flex;
          align-items: stretch;
          padding-bottom: 1em;
        }
      `}</style>
    </React.Fragment>
  );
};

exports = module.exports = ListLiList;
