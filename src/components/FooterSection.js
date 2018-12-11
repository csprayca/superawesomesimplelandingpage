'use strict';

const React = require('react');
const HeartImg = require('./HeartImg');

const FooterSection = () => {
  return (
    <React.Fragment>
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
    </React.Fragment>
  );
};

exports = module.exports = FooterSection;
