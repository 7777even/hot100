//空树直接返回
//初始化（初始把根节点入队）
//层序遍历
//当前层节点数
//存这一层的值
//for循环 只处理当前层
//把下一层节点加入队列
var levelOrder = function (root) {
    //空树直接返回
    if (!root) return [];
    //初始化
    const res = [];
    const queue = [root];
    //层序遍历
    while (queue.length) {
        //当前层节点数
        const list = queue.length;
        //存这一层的值
        const value = [];
        //for 循环 只处理当前层
        for (let i = 0; i < list; i++) {
            const node = queue.shift();
            value.push(node.val);
            //把下一层节点加入队列
            if (node.left) queue.push(node.left)
            if (node.right) queue.push(node.right)
        }
    res.push(value)
    }
    return res;
}