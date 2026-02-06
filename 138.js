var copyRandomList = function (head) {
    if (!head) return null;

    const map = new Map();

    // 第一遍：复制所有节点（只复制val）
    let cur = head;
    while (cur) {
        map.set(cur, new Node(cur.val));
        cur = cur.next;
    }

    // 第二遍：连接 next 和 random
    cur = head;
    while (cur) {
        //找到cur原节点对应的新节点
        const newNode = map.get(cur);
        newNode.next = cur.next ? map.get(cur.next) : null;
        newNode.random = cur.random ? map.get(cur.random) : null;
        cur = cur.next;
    }

    return map.get(head);
};



