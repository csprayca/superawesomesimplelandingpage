'use strict';

exports = module.exports = {
  setupFiles: ['<rootDir>/jest.setup.js'],
  testPathIgnorePatterns: ['<rootDir>/node_modules/', '<rootDir>/coverage/'],
  bail: true,
  verbose: true,
  collectCoverage: true
};
