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
        currentNode.smaller = newTreeNode;
      } else {
        this.addNodeToTree(currentNode.smaller, newTreeNode);
      }
    } else {
      if (!currentNode.bigger) {
        currentNode.bigger = newTreeNode;
      } else {
        this.addNodeToTree(currentNode.bigger, newTreeNode);
      }
    }
  }

  has(data) {
    let currentNode = this.treeRoot;

    while (currentNode) {
      if (data === currentNode.data) {
        if (!currentNode.deleted) {
            return true;
        }
        return false;
      } else if (data > currentNode.data) {
        currentNode = currentNode.bigger;
      } else if (data < currentNode.data) {
        currentNode = currentNode.smaller;
      }
    }

    return false;
  }

  find(data) {
    let currentNode = this.treeRoot;

    while (currentNode) {
      if (data === currentNode.data) {
        if (!currentNode.deleted) {
            return currentNode;
        }
        return null;
      } else if (data > currentNode.data) {
        currentNode = currentNode.bigger;
      } else if (data < currentNode.data) {
        currentNode = currentNode.smaller;
      }
    }

    return null;
}

remove(data) {
  let nodeToDelete = this.find(data);

  nodeToDelete.deleted = true;
}

  min() {
    let currentNode = this.treeRoot;
  
    while (currentNode.smaller) {
      currentNode = currentNode.smaller;
    }

    return currentNode.data;
  }

  max() {
    let currentNode = this.treeRoot;
  
    while (currentNode.bigger) {
      currentNode = currentNode.bigger;
    }

    return currentNode.data;
  }
}

console.log(TreeNode);

module.exports = {
  BinarySearchTree
};