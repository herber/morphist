module.exports = (newNode, oldNode, attr) => {
  if (newNode[attr] !== oldNode[attr]) {
    oldNode[attr] = newNode[attr];

    if (newNode[attr]) {
      oldNode.setAttribute(attr, '');
    } else {
      oldNode.removeAttribute(attr);
    }
  }
};
