//用一个虚拟头节点 dummy 做初始化
//用一个指针 tail，不断从 l1 和 l2 里选更小的节点接到后面
// 把剩余的直接接上
//返回新链表节点

var mergeTwoLists = function (l1, l2) {
    //用一个虚拟头节点 dummy 做初始化
    let dummy = new ListNode(-1);
    let tail = dummy;

    while (l1 && l2) {
        //用一个指针 tail，不断从 l1 和 l2 里选更小的节点接到后面
        if (l1.val <= l2.val) {
            tail.next = l1;
            l1 = l1.next;

        } else {
            tail.next = l2;
            l2 = l2.next;
        }
        tail = tail.next;
    }

    // 不为空的链表直接接上
    tail.next = l1 || l2;
    //返回新链表节点
    return dummy.next;
}

