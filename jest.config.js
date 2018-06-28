module.exports = {
  notify: true,
  verbose: true,
  testPathIgnorePatterns: [
    `/examples/`,
    `/www/`,
    `/dist/`,
    `/node_modules/`,
    `__tests__/fixtures`,
  ],
  transform: { '^.+\\.js$': `./jest-transformer.js` },
}