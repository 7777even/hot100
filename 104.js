//空树深度为0
//最大深度 为 左右子树最大深度 加 1
var maxDepth = function(root) {
    //空树深度为0
    if(!root) return 0;
    //最大深度 为 左右子树最大深度 加 1
    const left = maxDepth(root.left);
    const right = maxDepth(root.right)

    max = Math.max(left,right);
    return max+1;
}