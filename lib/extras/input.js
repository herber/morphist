const copyAttribute = require('../utils/copy-attribute');

module.exports = (newNode, oldNode) => {
  const newValue = newNode.value;
  const oldValue = oldNode.value;

  updateAttribute(newNode, oldNode, 'checked');
  updateAttribute(newNode, oldNode, 'disabled');

  if (newValue !== oldValue) {
    oldNode.setAttribute('value', newValue);
    oldNode.value = newValue;
  }

  if (newValue === 'null') {
    oldNode.value = '';
    oldNode.removeAttribute('value');
  }

  if (!newNode.hasAttributeNS(null, 'value')) {
    oldNode.removeAttribute('value');
  } else if (oldNode.type === 'range') {
    oldNode.value = newValue;
  }
};
