/*
 * Ankur Mursalin
 *
 * https://encryptioner.github.io/
 *
 * Created on Wed Sep 07 2022
 */

// Accepted
// REFERENCE: https://leetcode.com/problems/construct-string-from-binary-tree/

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
    return `${root.val}`;
  }
  if (root.right == null) {
    return `${root.val}(${tree2str(root.left)})`;
  }
  return `${root.val}(${tree2str(root.left)})(${tree2str(root.right)})`;
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
];

function run(): void {
  tests.forEach((test) => {
    console.log(tree2str(test));
  });
}

run();
