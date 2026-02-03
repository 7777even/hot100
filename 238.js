var productExceptSelf = function (nums) {
    const n = nums.length;
    const answer = new Array(n);

    //左边初始化
    answer[0] = 1;

    //answer[i]先存左边乘积

    for (let i = 1; i < n; i++) {
        // 第i个位置左边所有元素的乘积 = 上一个位置左边所有元素的乘积 x 上一个元素
        answer[i] = answer[i - 1] * nums[i - 1]
    }
    //右边初始化
    let rightProduct = 1;

    // 2. 用一个变量保存右边乘积
    for (let i = n - 1; i >= 0; i--) {
        // 除nums[i]的数的乘积
        answer[i] = answer[i] * rightProduct;
        //把当前数加入右边
        rightProduct = nums[i]*rightProduct;
    }

    return answer
}




