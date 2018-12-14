'use strict';

/**
 * References:
 * - used https://github.com/sedubois/relate/blob/master/package.json#L12 for nodemon setup during localhost module setup for testing
 * - http://thecodebarbarian.com/building-a-nextjs-app-with-mongodb.html
 * - https://github.com/sedubois/relate/blob/master/server/index.js
 * - https://github.com/zeit/next.js/tree/canary/examples/with-yarn-workspaces
 * - https://github.com/martpie/next-plugin-transpile-modules/blob/master/index.js
 * - https://github.com/martpie/next-plugin-transpile-modules#readme
 */

const express = require('express');
const next = require('next');
const SuperAwesomeRedirector = require('superawesomeredirector');
const { links } = require('./data/defaultData');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev: dev, dir: 'example/' });
const handle = app.getRequestHandler();

app
  .prepare()
  .then(() => {
    const server = express();

    server.get('/health', (req, res) => {
      return res.sendStatus(200);
    });

    SuperAwesomeRedirector({ expressServ: server, data: links });

    server.get('*', (req, res) => {
      return handle(req, res);
    });

    server.listen(2369, err => {
      if (err) throw err;
      console.log('> Ready on http://localhost:2369');
    });
  })
  .catch(ex => {
    console.log(ex.stack);
    process.exit(1);
  });
