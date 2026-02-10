// 岛屿数量
// 如果网格为空 直接返回 0；
// 记录行列数 以及 当前已经发现的岛屿数量
// 从坐标（i，j）开始，把这个位置所在的整个岛屿全部标记为0
// 越界 or 水，直接返回
// 标记当前陆地为已访问（淹没）
// 向四个方向扩散
// 双重for循环（发现新岛屿）
// 把整个岛屿淹没
// 返回岛屿数

var numIslands = function(grid) {
    // 如果网格为空 直接返回 0；
    if(!grid||grid.length===0) return 0;
    // 记录行列数 以及 当前已经发现的岛屿数量
    const m = grid.length;
    const n = grid[0].length;
    let count = 0;
    // 从坐标（i，j）开始，把这个位置所在的整个岛屿全部标记为0
    function dfs(i,j){
        // 越界 or 水，直接返回
        if(i<0||i>=m||j<0||j>=m||grid[i][j]==='0') return
        // 标记当前陆地为已访问（淹没）
        grid[i][j]='0';
        // 向四个方向扩散
        dfs(i-1,j)
        dfs(i+1,j)
        dfs(i,j-1)
        dfs(i,j+1)
    }

    // 双重for循环（发现新岛屿）
    for(let i =0;i<m;i++){
        for(let j=0;j<n;j++){
            if(grid[i][j]==='1'){
                count++;
                //把整个岛屿淹没
                dfs(i,j);
            }
        }
    }
    return count;
}