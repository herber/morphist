const morphist = require('./lib/index');
const { JSDOM } = require('jsdom');
const bel = require('bel');

const dom = new JSDOM(`<body></body>`);

const document = dom.window.document;

test('diffs dom nodes', () => {
  // tests are comming
  expect(true).toBe(true);
});
