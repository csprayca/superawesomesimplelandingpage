'use strict';

const React = require('react');
const ListLiList = require('./ListLiList');

const LinkListSection = ({ links = [] }) => {
  if (links && links.length === 0) {
    return null;
  }

  return (
    <section>
      <ul>
        <ListLiList list={links} />
      </ul>
      <style jsx>{`
        ul {
          width: 100%;
          padding-left: 1em;
          padding-right: 1em;
          list-style-type: none;
        }
        section {
          display: flex;
          max-width: 700px;
          width: 100%;
        }
      `}</style>
    </section>
  );
};

exports = module.exports = LinkListSection;
