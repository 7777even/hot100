//存放最终结果
//标记每个数字是否在当前排列path中使用过（避免重复使用）
//递归路径长度 等于 原数组长度 终止递归
// 找到一个排列，加入结果
//遍历每个数字 
// 已经使用过的数字跳过
// 选择数字     
// 标记已用
// 递归选择下一个数字
// 回溯，撤销选择  
// 恢复状态       
function permute(nums) {
    //存放最终结果
    const res = [];
    //标记每个数字是否在当前排列path中使用过（避免重复使用）
    const used = new Array(nums.length).fill(false);

    function backTrack(path) {
        //递归路径长度 等于 原数组长度 终止递归
        if (path.length === nums.length) {
            //找到一个排列，加入结果
            res.push([...path]);
            return;
        }
        //遍历每个数字
        for (let i = 0; i < nums.length; i++) {
            //已经使用过的数字跳过
            if (used[i]) continue;
            //选择数字
            path.push(nums[i]);
            //标记已用
            used[i] = true;
            //递归选择下一个数字
            backTrack(path);
            //回溯，撤销选择
            path.pop();
            //恢复状态
            used[i] = false;
        }
    }
    backTrack([]);
    return res;
}