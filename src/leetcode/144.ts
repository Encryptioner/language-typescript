/*
 * Ankur Mursalin
 *
 * https://encryptioner.github.io/
 *
 * Created on Fri Sep 09 2022
 */

// Accepted
// REFERENCE: https://leetcode.com/problems/binary-tree-preorder-traversal/

// Definition for a binary tree node.
class TreeNode {
  val: number;

  // eslint-disable-next-line no-use-before-define
  left: TreeNode | null;

  // eslint-disable-next-line no-use-before-define
  right: TreeNode | null;

  constructor(
    val?: number, left?: TreeNode | null, right?: TreeNode | null,
  ) {
    this.val = (val === undefined ? 0 : val);
    this.left = (left === undefined ? null : left);
    this.right = (right === undefined ? null : right);
  }
}

function preorderTraversal(root: TreeNode | null): number[] {
  const result: number[] = [];

  function traverse(node: TreeNode | null): void {
    if (node) {
      result.push(node.val);
      traverse(node.left);
      traverse(node.right);
    }
  }

  traverse(root);
  return result;
}

const tests: (TreeNode | null)[] = [
  {
    val: 1,
    left: {
      val: 2,
      left: {
        val: 4,
        left: null,
        right: null,
      },
      right: null,
    },
    right: {
      val: 3,
      left: null,
      right: null,
    },
  },
  {
    val: 1,
    left: {
      val: 2,
      left: null,
      right: {
        val: 4,
        left: null,
        right: null,
      },
    },
    right: {
      val: 3,
      left: null,
      right: null,
    },
  },
  {
    val: 1,
    left: null,
    right: {
      val: 2,
      left: {
        val: 3,
        left: null,
        right: null,
      },
      right: null,
    },
  },
  null,
];

function run(): void {
  tests.forEach((test) => {
    console.log(preorderTraversal(test));
  });
}

run();

export {};

// leetcode input
// [37,-34,-48,null,-100,-100,48,null,null,null,null,-54,null,-71,-22,null,null,null,8]
