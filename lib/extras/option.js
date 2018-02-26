const copyAttribute = require('../utils/copy-attribute');

module.exports = (newNode, oldNode) => {
  copyAttribute(newNode, oldNode, 'selected');
};
