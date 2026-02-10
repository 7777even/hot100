//初始化
//双重for循环
// 如果一开始就没有新鲜橘子 直接return0分钟
//上下左右方向用于BFS扩散腐烂的橘子
// BFS主循环（只要队列中的腐烂橘子数量不为0就继续）
//遍历当前层
//取出一个腐烂橘子位置作为扩散源
//遍历四个方向，计算相邻格子位置 (nx, ny)
//判断相邻格子是否合法
// 感染
// 只有这一轮真的感染了，时间才 +1
var orangesRotting = function (grid) {
    //初始化
    const m = grid.length;
    const n = grid[0].length;
    const queue = [];
    let fresh = 0;

    //双重for循环 
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (grid[i][j] === 2) {
                queue.push([i, j]); // 所有腐烂橘子入队
            } else if (grid[i][j] === 1) {
                fresh++; // 统计新鲜橘子
            }
        }
    }

    // 如果一开始就没有新鲜橘子 直接return0分钟
    if (fresh === 0) return 0;

    //上下左右方向用于BFS扩散腐烂的橘子
    const dirs = [[1, 0], [-1, 0], [0, 1], [0, -1]];
    let minutes = 0;

    // BFS主循环（只要队列中的腐烂橘子数量不为0就继续）
    while (queue.length > 0) {
        const size = queue.length;
        let infectedThisRound = false;

        //遍历当前层
        for (let k = 0; k < size; k++) {
            //取出一个腐烂橘子位置作为扩散源
            const [x, y] = queue.shift();
            //遍历四个方向，计算相邻格子位置 (nx, ny)
            for (const [dx, dy] of dirs) {
                const nx = x + dx;
                const ny = y + dy;
                //判断相邻格子是否合法
                if (
                    nx >= 0 && nx < m &&
                    ny >= 0 && ny < n &&
                    grid[nx][ny] === 1
                ) {
                    // 感染
                    grid[nx][ny] = 2;
                    fresh--;
                    queue.push([nx, ny]);
                    infectedThisRound = true;
                }
            }
        }

        // 只有这一轮真的感染了，时间才 +1
        if (infectedThisRound) {
            minutes++;
        }
    }

    return fresh === 0 ? minutes : -1;
};
