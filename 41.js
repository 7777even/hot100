var firstMissingPositive = function (nums) {
    const n = nums.length;
    for (let i = 0; i < n; i++) {
        // 界定范围
        while (
            nums[i] >= 1 &&
            nums[i] <= n &&
            nums[nums[i] - 1] !== nums[i]
        ) {
            // 1.原地交换
            const index = nums[i] - 1;
            [nums[i], nums[index]] = [nums[index], nums[i]]
        }
    }
    // 2. 查找第一个缺失
    for (let i = 0; i < n; i++) {
        if (nums[i] !== i + 1) {
            return i + 1
        }
    }
    //如果都不在
    return n+1;
}
