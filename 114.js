// 空树直接返回
// 1. 递归展开左右子树
// 2. 保存原来的左右子树
// 3. 把左子树放到右边
// 4. 找到新的右链表末尾
// 5. 把原来的右子树接到末尾
function flatten(root) {
    // 空树直接返回
    if (!root) return;
    // 1. 递归展开左右子树
    flatten(root.left);
    flatten(root.right);
    //2. 保存原来的左右子树
    let left = root.left;
    let right = root.right;
    //3. 把左子树放到右边
    root.left = null;
    root.right = left;
    //4. 找到新的右链表末尾
    let current = root;
    while (current) {
        current = current.right;
    }
    //把原来的右子树接到末尾
    current.right = right;
}