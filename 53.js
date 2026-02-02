var maxSubArray = function(nums) {
    //初始化
    let curMax = nums[0];
    let maxMax = nums[0];

    for(let i = 1;i<nums.length;i++){
        //要么从自己开始，要么接上之前的
        curMax = Math.max(nums[i],curMax+nums[i]);
        maxMax = Math.max(maxMax,curMax);
    }
    return maxMax
};