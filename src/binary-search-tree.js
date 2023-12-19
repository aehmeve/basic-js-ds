const { NotImplementedError } = require('../extensions/index.js');

// const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/

class TreeNode {
  constructor(data) {
    this.data = data;
    this.smaller = null;
    this.bigger = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.treeRoot = null;
  }

  root() {
    return this.treeRoot;
  }

  add(data) {
    let newTreeNode;

    if (data) {
      newTreeNode = new TreeNode(data);
    } else {
      throw new TypeError('Invalid argument!');
    }

    if (!this.treeRoot) {
      this.treeRoot = newTreeNode;
    } else {
      this.addNodeToTree(this.treeRoot, newTreeNode);
    }
  }

  addNodeToTree(currentNode, newTreeNode) {
    if (newTreeNode.data < currentNode.data) {
      if (!currentNode.smaller) {
        currentNode.left = newTreeNode;
      } else {
        this.addNodeToTree(currentNode.left, newTreeNode);
      }
    } else {
      if (!currentNode.bigger) {
        currentNode.bigger = newTreeNode;
      } else {
        this.addNodeToTree(currentNode.bigger, newTreeNode);
      }
    }
  }

  has(/* data */) {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  find(/* data */) {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  remove(/* data */) {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  min() {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  max() {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }
}

module.exports = {
  BinarySearchTree
};