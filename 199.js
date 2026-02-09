//二叉图的右视图
//空树直接返回
//BFS 队列解法
//记录当前层节点数
//只处理当前层的节点
// 每层的最后一个节点 即为右视图
//下一层的节点加入队列
function rightSideView(root){
    //空树直接返回
    if(!root) return[];
    //BFS 队列解法
    const res = [];
    const queue = [root];

    while(queue.length){
        //记录当前层节点数
        const size = queue.length;
        //只处理当前层的节点
        for(let i =0;i<size;i++){
            const node = queue.shift();
            //每层的最后一个节点 即为右视图
            if(i===size-1){
                res.push(node.val);
            }
            //下一层的节点加入队列
            if(node.left) queue.push(node.left);
            if(node.right) queue.push(node.right);
        }
    }
    return res;
}