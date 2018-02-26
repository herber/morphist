module.exports = (a, b) => {
  if (a.id) return a.id === b.id;
  if (a.isSameNode) return a.isSameNode(b);
  if (a.tagName !== b.tagName) return false;
  if (a.type === 3) return a.nodeValue === b.nodeValue;

  return false;
};
