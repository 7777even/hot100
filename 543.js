//保存全局最大直径
//复用最大深度方法
// 更新直径（左右深度之和 = 经过 node 的最长路径边数）
// 返回当前节点的深度
var diameterOfBinaryTree = function(root) {
    //保存全局最大直径
    let diameter = 0;
    //复用最大深度方法
    function depth(node){
        if(!node) return 0;

        let left = depth(node.left);
        let right = depth(node.right);

        // 更新直径（左右深度之和 = 经过 node 的最长路径边数）
        diameter = Math.max(diameter,left+right);
        //返回当前节点的深度
        return Math.max(left,right)+1;
    }

    depth(root);
    return diameter;
}