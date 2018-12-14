import React from 'react';
import Document, { Head, Main, NextScript } from 'next/document';
import flush from 'styled-jsx/server';

import { GA_TRACKING_ID } from '../lib/gtag';

export default class extends Document {
  static getInitialProps({ renderPage }) {
    const { html, head, errorHtml, chunks } = renderPage();
    const styles = flush();
    return { html, head, errorHtml, chunks, styles };
  }

  render() {
    return (
      <html lang="en" prefix="og: http://ogp.me/ns#">
        <Head>
          <meta charSet="UTF-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1" />
          <meta name="viewport" content="width=device-width,initial-scale=1" />
          {/* <link
            rel="shortcut icon"
            href="/static/img/favicon.png"
            type="image/png"
          /> */}
          <link rel="canonical" href="https://lastminutelaura.ca/" />
          <meta
            name="description"
            content="Last Minute Laura - lastminutelaura.ca"
          />
          <meta
            property="og:title"
            content="Last Minute Laura - lastminutelaura.ca"
          />
          <meta property="og:url" content="https://lastminutelaura.ca" />
          <meta property="og:type" content="website" />
          <meta property="og:site_name" content="lastminutelaura.ca" />
          <meta
            property="og:description"
            content="Last Minute Laura - lastminutelaura.ca"
          />
          {/* <meta
            name="og:image"
            content="https://lastminutelaura.ca/assets/images/getaclue-me-2017-09-20T03:50:48.170Z.png"
          /> */}
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:site" content="@getaclue_1" />
          <meta name="twitter:creator" content="@getaclue_1" />
          <meta name="twitter:title" content="Last Minute Laura" />
          <meta
            name="twitter:description"
            content="Last Minute Laura - lastminutelaura.ca"
          />
          {/* <meta
            name="twitter:image"
            content="https://lastminutelaura.ca/assets/images/getaclue-me-2017-09-20T03:50:48.170Z.png"
          /> */}
          <script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `window.dataLayer = window.dataLayer || [];function gtag(){dataLayer.push(arguments);}gtag('js', new Date());gtag('config', '${GA_TRACKING_ID}');`
            }}
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
