//验证二叉搜索树
//以node为根的子树，所有节点必须在（min，max）之间
//空树为二叉搜索树
//违反BST全局约束
//左子树最大值只能是根节点的值 右子树最小值只能是根结点的值
//返回根节点
var isValidBST = function (root) {
    //以node为根的子树，所有节点必须在（min，max）之间
    function dfs(node, min, max) {
        //空树为二叉搜索树
        if (!node) return true;
        //违反BST全局约束
        if (node.val <= min || node.val >= max) return false;
        //左子树的最大值只能是根节点的值，右子树的最小值只能是根节点的值
        return dfs(node.left, min, node.val) && dfs(node.right, node.val, max);
    }
    //返回根节点
    return dfs(root, -Infinity, Infinity)
};



