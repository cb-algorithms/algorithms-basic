const inOrderTraverse = <TValue>(
  node: BinaryTreeNode<TValue> | undefined,
  visit: (node: BinaryTreeNode<TValue>) => void,
) => {
  if (node) {
    inOrderTraverse(node.left, visit);
    visit(node);
    inOrderTraverse(node.right, visit);
  }
};

const preOrderTraverse = <TValue>(
  node: BinaryTreeNode<TValue> | undefined,
  visit: (node: BinaryTreeNode<TValue>) => void,
) => {
  if (node) {
    visit(node);
    preOrderTraverse(node.left, visit);
    preOrderTraverse(node.right, visit);
  }
};

const postOrderTraverse = <TValue>(
  node: BinaryTreeNode<TValue> | undefined,
  visit: (node: BinaryTreeNode<TValue>) => void,
) => {
  if (node) {
    postOrderTraverse(node.left, visit);
    postOrderTraverse(node.right, visit);
    visit(node);
  }
};

export class BinaryTree<TValue> {
  private _root: BinaryTreeNode<TValue> | undefined;

  constructor(...defaultValues: TValue[]) {
    const fillNode = (index: number) => {
      if (index >= defaultValues.length) return undefined;
      const node: BinaryTreeNode<TValue> = { value: defaultValues[index] };
      node.left = fillNode(index * 2 + 1);
      node.right = fillNode(index * 2 + 2);
      return node;
    };
    this._root = fillNode(0);
  }

  inOrderTraverse(visit: (value: TValue) => void) {
    this.traverse(inOrderTraverse, visit);
  }

  preOrderTraverse(visit: (value: TValue) => void) {
    this.traverse(preOrderTraverse, visit);
  }

  postOrderTraverse(visit: (value: TValue) => void) {
    this.traverse(postOrderTraverse, visit);
  }

  private traverse(
    traverseFunc: TraverseFunction<TValue>,
    visit: (value: TValue) => void,
  ) {
    traverseFunc(this._root, ({ value }) => visit(value));
  }
}

// ------------------------------------
// DEBUG
// ------------------------------------
const tree = new BinaryTree(0, 1, 2, 3, 4, 5, 6, 7);
const inOrderList: number[] = [];
tree.inOrderTraverse(value => inOrderList.push(value));
console.log(inOrderList);
const preOrderList: number[] = [];
tree.preOrderTraverse(value => preOrderList.push(value));
console.log(preOrderList);
const postOrderList: number[] = [];
tree.postOrderTraverse(value => postOrderList.push(value));
console.log(postOrderList);
// ------------------------------------

type TraverseFunction<TValue> = (
  node: BinaryTreeNode<TValue> | undefined,
  visit: (node: BinaryTreeNode<TValue>) => void,
) => void;

export interface BinaryTreeNode<TValue> {
  value: TValue;
  left?: BinaryTreeNode<TValue>;
  right?: BinaryTreeNode<TValue>;
}
