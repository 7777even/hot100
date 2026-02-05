//用一个 dummy 头，统一处理头节点变化，指针每次走两步。
//两个相邻节点
// 交换
// 移动 prev 到下一对前

var swapPairs = function (head) {
    let dummy = new ListNode(0, head);
    let prev = dummy;

    //两个相邻节点
    while (prev.next && prev.next.next) {
        //交换
        let a = prev.next;
        let b = a.next;

        prev.next = b;
        a.next = b.next;
        b.next = a;
        //移动prev到下一对前
        prev = a;
    }

    return dummy.next;
};
