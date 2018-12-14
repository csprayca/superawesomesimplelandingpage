import React, { Fragment } from 'react';
import Link from '../components/Link';

const ListLiList = ({ list = [] }) => {
  if (list && list.length === 0) {
    return null;
  }

  return (
    <Fragment>
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
    </Fragment>
  );
};

export default ListLiList;
