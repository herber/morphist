# _[WIP]_ Morphist

> Tiny dom morphing library

## Install

```
$ npm install morphist
```

## Usage

```js
const morphist = require('morphist');
const bel = require('bel');

const tree = html`<div>hello</div>`;
document.body.appendChild(tree);

morphist(tree, html`<div>hello world</div>`);
```

## License

MIT © [Tobias Herber](http://tobihrbr.com)
