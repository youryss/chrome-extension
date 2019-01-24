const path = require('path');
const roots = ['<rootDir>/src'];

module.exports = {
  bail: true,
  verbose: false,
  rootDir: path.resolve(__dirname, '../'),
  roots,
  testMatch: ['**/__tests__/**/*.test.js'],
  testURL: 'http://localhost',
  testPathIgnorePatterns: ['/node_modules/', '/src/chrome/'],
  moduleFileExtensions: ['js', 'json'],
}