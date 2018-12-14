/**
 * This is a sample usecase.
 *
 * I also included an example of how you can set your own data easily.
 * Simply look at the file located in `../data/defaultData.js`
 *
 *
 * @tutorial base-use-case
 */
import React from 'react';
import SimplePage from '../../src/components/SimplePage';
import { links, user } from '../data/defaultData';

export default () => <SimplePage user={user} links={links} />;
