var merge = function (intervals) {
    if (intervals.length === 0) return [];
    // 1. 按起点排序
    intervals.sort((a, b) => a[0] - b[0]);
    let res = [];
    //初始化
    let [start, end] = intervals[0]

    for (let i = 1; i < intervals.length; i++) {
        let [curStart, curEnd] = intervals[i];
        // 2. 有重叠，合并
        if (curStart <= end) {
            end = Math.max(end, curEnd)
        } else {
            // 3. 无重叠，保存旧区间，开启新区间
            res.push([start, end])
            start = curStart;
            end = curEnd;
        }
    }
    // 4. 别忘了把最后一个区间放进去

    res.push([start, end]);

    return res;

}