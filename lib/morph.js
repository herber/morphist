const copyAttributes = require('./utils/copy-attributes');
const copyEvents = require('./utils/events');

const input = require('./extras/input');
const option = require('./extras/option');
const textarea = require('./extras/textarea');

module.exports = (newNode, oldNode) => {
  const nodeType = newNode.nodeType;
  const nodeName = newNode.nodeName;

  if (nodeType === 1) {
    copyAttributes(newNode, oldNode);
  }

  if (nodeType === 3 || nodeType === 8) {
    if (oldNode.nodeValue !== newNode.nodeValue) {
      oldNode.nodeValue = newNode.nodeValue;
    }
  }

  // Some dom nodes need a little bit of extra massaging
  if (nodeName === 'INPUT') input(newNode, oldNode);
  else if (nodeName === 'OPTION') option(newNode, oldNode);
  else if (nodeName === 'TEXTAREA') textarea(newNode, oldNode);

  copyEvents(newNode, oldNode);
};
