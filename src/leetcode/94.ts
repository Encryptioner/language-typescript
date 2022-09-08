/*
 * Ankur Mursalin
 *
 * https://encryptioner.github.io/
 *
 * Created on Thu Sep 08 2022
 */

// Accepted
// REFERENCE: https://leetcode.com/problems/binary-tree-inorder-traversal/

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

function tree2str(root: TreeNode | null): string {
  if (root === null) {
    return '';
  }
  if (root.left === null && root.right === null) {
    return `${root.val},`;
  }
  if (root.right == null) {
    return `${tree2str(root.left)},${root.val},`;
  }
  return `${tree2str(root.left)},${root.val},${tree2str(root.right)},`;
}

function inorderTraversal(root: TreeNode | null): number[] {
  const str = tree2str(root);
  return str.split(',')
    .filter((s) => !!s.length)
    .map((s) => parseInt(
      s, 10,
    ));
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
    console.log(inorderTraversal(test));
  });
}

run();

export {};

// leetcode input
// [37,-34,-48,null,-100,-100,48,null,null,null,null,-54,null,-71,-22,null,null,null,8]
