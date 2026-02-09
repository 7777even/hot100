//将有序数组转换为二叉搜索树
//用 nums[left..right]构建一颗平衡BST(二叉搜索树）
//递归的出口
//取中点 确保左右子数组规模尽量接近
//中点作为根节点 满足BST
//分治（递归处理左右两边子树）
//返回当前子树的根（给上一层作为left/right）
function sortedArrayToBST(nums) {
    //用 nums[left..right]构建一颗平衡BST(二叉搜索树）
    function build(left,right) {
        //递归的出口
        if (left > right) return null;
        //取中点 确保左右子数组规模尽量接近
        const mid = Math.floor((left+right)/2);
        //中点作为根节点 满足BST
        const root = new TreeNode(nums[mid]);
        //分治（递归处理左右两边子树）
        root.left = build(left,mid-1);
        root.right = build(mid+1,right);

        //返回当前子树的根
        return root;
    }
    return build(0,nums.length-1);
}