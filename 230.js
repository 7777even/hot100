//二叉搜索树中第K小的元素
//BST的中序遍历结果是严格递增序列，第k小就是中序遍历的第k个元素
//先访问更小值（左子树）
//当前的node就是中序序列里的第count个 也就是第k小
//再访问更大值（右子树）
function kthSmallest(root, k) {
    let count = 0;
    let result = null;

    function inorder(node) {
        if (!node || result !== null) return;
        //先访问更小值
        inorder(node.left);
        //当前的node就是中序序列里的第count个 也就是第k小
        count++;
        if (count === k) {
            result = node.val;
            return;
        }
        //再访问更大值
        inorder(node.right);
    }
    inorder(root);
    return result;
}