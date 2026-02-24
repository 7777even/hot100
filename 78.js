function subsets(nums){
    //存所有子集
    const res = [];
    //当前构造中的子集
    const path = [];

    function backTrack(start){
        //每一个path都是一个子集
        res.push([...path]);

        for(let i=start;i<nums.length;i++){
            //选择
            path.push(nums[i]);
            //递归（只能选后面的）
            backTrack(i+1);
            //回溯
            path.pop();
        }
    }

    backTrack(0);
    return res;
}