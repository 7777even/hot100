var lengthOfLongestSubstring = function (s) {

    let left = 0;

    let maxLen = 0;

    let n = s.length;

    const set = new Set();


    for (let right = 0; right < n; right++) {


        while (set.has(s[right])) {

            set.delete(s[left]);

            left++;

        }

        set.add(s[right]);

        maxLen = Math.max(maxLen, right - left + 1);

    }

    return maxLen


}