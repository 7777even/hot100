//空树直接返回null
// 1. 递归翻转左右子树
// 2. 交换
var invertTree = function(root) {
    //空树直接返回null
    if(!root) return null;
    //递归翻转左右子树
    const left = invertTree(root.left);
    const right = invertTree(root.right);
    //交换
    root.left = right;
    root.right = left;


    return root
}