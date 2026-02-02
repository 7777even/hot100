var minWindow = function(s, t) {
  if (t.length > s.length) return "";

  const need = new Map();
  const window = new Map();

  // 统计 t
  for (let c of t) {
    need.set(c, (need.get(c) || 0) + 1);
  }

  let left = 0, right = 0;
  let valid = 0;

  // 记录最小窗口
  let start = 0;
  let len = Infinity;

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

    // 收缩窗口
    while (valid === need.size) {
      // 更新最小值
      if (right - left < len) {
        start = left;
        len = right - left;
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

  return len === Infinity ? "" : s.substr(start, len);
};
