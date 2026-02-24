function letterCombinations(digits) {
    if (!digits) return [];

    const map = {
        2: "abc",
        3: "def",
        4: "ghi",
        5: "jkl",
        6: "mno",
        7: "pqrs",
        8: "tuv",
        9: "wxyz"
    };

    const res = [];

    function backTrack(index, path) {
        //终止条件：路径长度等于digits长度
        if (index === digits.length) {
            res.push(path);
            return;
        }

        const letters = map[digits[index]];

        for (let char of letters) {
            backTrack(index + 1, path + char);
        }
    }

    backTrack(0, "");
    return res;
}