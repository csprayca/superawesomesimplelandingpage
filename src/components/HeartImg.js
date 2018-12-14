/**
 * Icon from svg icon from http://www.evericons.com/
 */

import React, { Fragment } from 'react';

const HeartImg = () => {
  return (
    <Fragment>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        viewBox="0 0 16 16"
      >
        <path
          fillRule="evenodd"
          d="M8.65708925,1.48980938 C9.44702079,1.12156992 10.1377013,0.999998758 11.1883068,1.0000128 C13.943947,1.01088121 16,3.242131 16,6.07991742 C16,8.22791335 14.7634633,10.2681748 12.4882503,12.2170546 C11.3099464,13.2263548 9.80903233,14.2228264 8.72690182,14.7565081 L8,15.1149993 L7.27309818,14.7565081 C6.19096767,14.2228264 4.69005361,13.2263548 3.51174965,12.2170546 C1.2365367,10.2681748 5.68434189e-14,8.22791335 5.68434189e-14,6.07991742 C5.62896157e-14,3.21360608 2.03849924,1 4.81818182,1 C5.831947,1 6.55686751,1.13284947 7.36106901,1.51166756 C7.58155904,1.61552911 7.79197381,1.73466526 7.99152798,1.86886795 C8.20174845,1.72496494 8.42388406,1.59852177 8.65708925,1.48980938 Z M11.187169,10.6981118 C13.0611791,9.09289045 14,7.54385424 14,6.07991742 C14,4.31040799 12.7983624,3.00637851 11.1843568,3.00000502 C10.4070928,3.00000037 9.99576289,3.07240122 9.50211527,3.30252309 C9.20545515,3.44081604 8.94389972,3.62634814 8.71590052,3.8619669 L8.00336481,4.59831505 L7.28458534,3.86806044 C7.06157127,3.64148599 6.80321629,3.45967162 6.50879287,3.32098384 C5.99874428,3.0807261 5.55824569,3 4.81818182,3 C3.18155518,3 2,4.28305063 2,6.07991742 C2,7.54385424 2.9388209,9.09289045 4.81283097,10.6981118 C5.80770499,11.5502913 7.07792962,12.404173 8,12.8828952 C8.92207038,12.404173 10.192295,11.5502913 11.187169,10.6981118 Z"
        />
      </svg>
      <style jsx>
        {`
          svg {
            padding-left: 0.5em;
            padding-right: 0.5em;
            animation: spin infinite 20s linear;
          }
          @keyframes spin {
            from {
              transform: rotate(0deg);
            }
            to {
              transform: rotate(360deg);
            }
          }
          path {
            fill: red;
          }
        `}
      </style>
    </Fragment>
  );
};

export default HeartImg;
