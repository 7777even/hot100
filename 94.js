var inorderTraversal = function(root) {
    // 定义结果数组 所有访问到的节点值 按顺序push到这里
      const res = [];
    
    //递归处理
      function dfs(node) {
    //如果节点为null 直接返回
        if (!node) return;
    // 中序遍历
        dfs(node.left);
        res.push(node.val);
        dfs(node.right);
      }
    
      dfs(root);
      return res;
    };
    