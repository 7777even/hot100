var findAnagrams = function (s, p) {
    const res = [];
    if (s.length < p.length) return res;

    const need = new Map();
    const window = new Map();

    // 1. 统计 p 中字符出现次数
    for (let c of p) {
        need.set(c, (need.get(c) || 0) + 1);
    }

    let left = 0;
    let right = 0;
    let valid = 0; // 有多少字符的数量是“对的”

    // 2. 滑动窗口
    while (right < s.length) {
        let c = s[right];
        right++;

        // 扩大窗口
        if (need.has(c)) {
            window.set(c, (window.get(c) || 0) + 1);
            if (window.get(c) === need.get(c)) {
                valid++;
            }
        }

        // 3. 收缩窗口（保持长度等于 p.length）
        while (right - left >= p.length) {
            if (valid === need.size) {
                res.push(left);
            }

            let d = s[left];
            left++;

            if (need.has(d)) {
                if (window.get(d) === need.get(d)) {
                    valid--;
                }
                window.set(d, window.get(d) - 1);
            }
        }
    }

    return res;
};
