var setZeroes = function(matrix) {
    const m = matrix.length;
    const n = matrix[0].length;
  
    let row0 = false;
    let col0 = false;
  
    // 1. 检查第一列
    for (let i = 0; i < m; i++) {
      if (matrix[i][0] === 0) {
        col0 = true;
        break;
      }
    }
  
    // 2. 检查第一行
    for (let j = 0; j < n; j++) {
      if (matrix[0][j] === 0) {
        row0 = true;
        break;
      }
    }
  
    // 3. 用第一行和第一列做标记
    for (let i = 1; i < m; i++) {
      for (let j = 1; j < n; j++) {
        if (matrix[i][j] === 0) {
          matrix[i][0] = 0;
          matrix[0][j] = 0;
        }
      }
    }
  
    // 4. 根据标记清零（不包括第一行第一列）
    for (let i = 1; i < m; i++) {
      if (matrix[i][0] === 0) {
        for (let j = 1; j < n; j++) {
          matrix[i][j] = 0;
        }
      }
    }
  
    for (let j = 1; j < n; j++) {
      if (matrix[0][j] === 0) {
        for (let i = 1; i < m; i++) {
          matrix[i][j] = 0;
        }
      }
    }
  
    // 5. 最后处理第一列
    if (col0) {
      for (let i = 0; i < m; i++) {
        matrix[i][0] = 0;
      }
    }
  
    // 6. 最后处理第一行
    if (row0) {
      for (let j = 0; j < n; j++) {
        matrix[0][j] = 0;
      }
    }
  };
  