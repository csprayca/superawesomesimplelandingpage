import React, { Fragment } from 'react';
import HeartImg from '../components/HeartImg';

const FooterSection = () => {
  return (
    <Fragment>
      <footer>
        Made with <HeartImg /> in Toronto
      </footer>
      <style jsx>
        {`
          footer {
            min-height: 5vh;
            display: flex;
            justify-content: center;
          }
        `}
      </style>
    </Fragment>
  );
};

export default FooterSection;
