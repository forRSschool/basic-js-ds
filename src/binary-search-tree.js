const { NotImplementedError } = require('../extensions/index.js');

// const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
  constructor(data = null) {  
    this.res = data;
  }

  root() {
    return this.res;
  }

  add(data) {
    this.res = addWithin(this.res, data);
    function addWithin(node, data) {
      if (!node) {
        return new Node(data);
      }

      if (node.data === data) {
        return node;
      }
      if (data < node.data) {
        node.left = addWithin(node.left, data);
      } else {
        node.right = addWithin(node.right, data);
      }
      return node;
    }
  }

  has(data) {
    return searchWithin(this.res, data);
    function searchWithin(node, data) {
      if (!node) {
        return false;
      }
      if (node.data === data) {
        return true;
      }
      return data < node.data ? 
        searchWithin(node.left, data) : 
        searchWithin(node.right, data);
    }

  }

  find(data) {
    return findWithin(this.res, data);
    function findWithin(node, data) {
      if (!node) {
        return null;
      }
      if (node.data === data) {
        return node;
      }
      return data < node.data ? 
        findWithin(node.left, data) : 
        findWithin(node.right, data);
    }

  }

  remove(data) {
    this.res = removeNode(this.res, data);
    function removeNode(node, data) {
      if (!node) {
        return null;
      }
      if (data < node.data) {
        node.left = removeNode(node.left, data);
        return node;
      } else if (node.data < data) {
        node.right = removeNode(node.right, data);
        return node;
      } else {
        if (!node.left && !node.right) {
          return null;
        }
        if (!node.left) {
          node = node.right;
          return node;
        }
        if (!node.right) {
          node = node.left;
          return node;
        }
        let minFromRight = node.right;
        while (minFromRight.left) {
          minFromRight = minFromRight.left;
        }
        node.data = minFromRight.data;
        node.right = removeNode(node.right, minFromRight.data);
        return node;
      }
    }
  }

  min() {
    if (!this.res) {
      return;
    }
    let node = this.res;
    while (node.left) {
      node = node.left;
    }
    return node.data;
  }

  max() {
    if (!this.res) {
      return;
    }
    let node = this.res;
    while (node.right) {
      node = node.right;
    }
    return node.data;
  }
}

module.exports = {
  BinarySearchTree
};