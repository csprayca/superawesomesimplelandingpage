/**
 * This file and transpilation is used for a purpose.
 * I created these components as you can see them in the src/ folder.
 * However, in order for you to use them in your project you will need to transpile them into your project.
 *
 * If you are installing this as package, you would probably do something like:
 *
 * ```js
 * module.exports = withTM({
 * transpileModules: ['superawesomesimplelandingpage']
 * });
 * ```
 *
 * After this you will be able to import this component as expected.
 *
 * ```js
 * // some file, for example pages/index.js
 * import React from 'react';
 * import SimplePage from 'superawesomesimplelandingpage';
 * // optional but suggested use for simplicity
 * import { links, user } from '../data/defaultData';
 * export default () => <SimplePage user={user} links={links} />;
 * // OR to see default settings
 * export default () => <SimplePage />;
 * ```
 * References:
 * - https://github.com/zeit/next.js/issues/5288
 * - https://github.com/martpie/next-plugin-transpile-modules/issues/1#issuecomment-425839242
 * - https://github.com/zeit/next.js/pull/3732/files
 * - https://github.com/zeit/next.js/issues/706
 * - https://github.com/tleunen/babel-plugin-module-resolver
 * - https://github.com/zeit/next.js/issues/3018
 * - https://github.com/material-components/material-components-web-react/issues/45
 * - https://blog.logrocket.com/how-to-build-a-server-rendered-react-app-with-next-express-d5a389e7ab2f
 * - https://github.com/rollup/rollup/wiki/pkg.module
 * - https://babeljs.io/docs/en/options
 * - https://nextjs.org/learn/basics/fetching-data-for-pages/fetching-batman-shows
 * - https://github.com/babel/babel-loader/issues/370
 * - https://github.com/zeit/next.js/issues/819
 * - https://nextjs.org/learn/basics/using-shared-components/create-the-header-component
 * - https://github.com/zeit/next.js/tree/canary/examples/with-storybook
 *
 * 90 % into index
 *
 * @tutorial express-setup
 */

const withTM = require('next-plugin-transpile-modules');

module.exports = withTM({
  transpileModules: ['../src/components/', '../src/defaultData.js']
});
