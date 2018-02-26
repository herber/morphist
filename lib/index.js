const walk = require('walk');

module.exports = (oldTree, newTree) => {
  if (typeof oldTree !== 'object') throw new Error('old tree sould be an object');
  if (typeof newTree !== 'object') throw new Error('new tree sould be an object');

  return walk(newTree, oldTree);
};
