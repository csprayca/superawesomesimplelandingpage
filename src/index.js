/**
 * I could have exported the primary SimplePage component but I wanted to leave you with that choice. Or at least that is the plan for now.
 *
 * References:
 * - https://hacks.mozilla.org/2015/08/es6-in-depth-modules/
 * - https://medium.com/@dlmanning/interoperability-between-es-modules-and-common-js-is-a-mistake-fb9ac71d96fd
 * - https://github.com/zeit/next.js/blob/c44dab63ff835b772a8e3fea1b8a217e77e1e7c2/examples/with-yarn-workspaces/packages/web-app/next.config.js
 * - https://github.com/martpie/next-plugin-transpile-modules#readme
 */

import PageInfoSection from './components/PageInfoSection';
import Link from './components/Link';
import ListLiList from './components/ListLiList';
import LinkListSection from './components/LinkListSection';
import HeartImg from './components/HeartImg';
import FooterSection from './components/FooterSection';
import SimplePage from './components/SimplePage';

import links from './defaultData';

export default {
  SimplePage: SimplePage,
  PageInfoSection: PageInfoSection,
  Link: Link,
  ListLiList: ListLiList,
  LinkListSection: LinkListSection,
  HeartImg: HeartImg,
  FooterSection: FooterSection,
  defaultLinks: links
};
