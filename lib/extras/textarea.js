module.exports = (newNode, oldNode) => {
  const newValue = newNode.value;

  if (newValue !== oldNode.value) oldNode.value = newValue;

  if (oldNode.firstChild && oldNode.firstChild.nodeValue !== newValue) {
    if (newValue === '' && oldNode.firstChild.nodeValue === oldNode.placeholder) return;

    oldNode.firstChild.nodeValue = newValue;
  }
};
