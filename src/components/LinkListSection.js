import React from 'react';
import ListLiList from '../components/ListLiList';
import defaultData from '../defaultData';

const LinkListSection = ({ links = [] }) => {
  if (links && links.length === 0) {
    return (
      <section>
        <ul>
          <ListLiList list={defaultData} />
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

export default LinkListSection;
