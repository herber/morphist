# _[WIP]_ Morphist

<p align="center">A tiny dom morphing library</p>

__Morphist__ diffs read dom nodes. We don't use a vdom, because the dom is really efficient at everything we need.

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

## Alternatives

- [Nanomorph](https://github.com/choojs/nanomorph)
- [Morphdom](https://github.com/patrick-steele-idem/morphdom)

## License

MIT © [Tobias Herber](http://tobihrbr.com)
