//空树 直接返回对称
//定义递归函数，判断两个 子树是否镜像
// 都为空，直接返回对称
// 只有一个为空，不对称 
//  当前节点值相等 并且 左右子树孩子镜像对称    
function isSymmetric(root) {
    //空树 直接返回对称
    if (!root) return true;
    //定义递归函数，判断两个 子树是否镜像
    function isMirror(l1, l2) {
        // 都为空，直接返回对称
        if (!l1 && !l2) return true;
        if (!l1 || !l2) return false;
        //  当前节点值相等 并且 左右子树孩子镜像对称    
        return (l1.val===l2.val)&&isMirror(l1.left,l2.right)&&isMirror(l1.right,l2.left);
    }
    return isMirror(root.left,root.right)
}