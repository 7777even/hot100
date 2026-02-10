// 建立 inorder 中值 -> 下标 的 map，加速查找
//遍历中序 建立inorder中值
//用preIndex线性推进
// 1. 前序的当前值就是根
// 2. 在中序中找到根的位置
// 3. 分治构建左右子树
var buildTree = function (preorder, inorder) {
    //建立 inorder中值 -> 下标的map，加速查找
    const indexMap = new Map();
    //遍历中序 建立inorder中值
    for (let i = 0; i < inorder.length; i++) {
        indexMap.set(inorder[i], i);
    }
    //用preIndex线性推进
    let preIndex = 0;
    function build(inLeft, inRight) {
        if (inLeft > inRight) return null;

        //1. 前序的当前值就是根
        const rootVal = preorder[preIndex++];
        const root = new TreeNode(rootVal);

        //2. 在中序中找到根的位置
        const mid = indexMap.get(rootVal);

        //3. 分治构建左右子树
        root.left = build(inLeft, mid - 1);
        root.right = build(mid + 1, inRight);

        return root;
    }

    return build(0, inorder.length - 1);
}