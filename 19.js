// 用 dummy + 快慢指针，
// fast 先走 n+1 步
// fast 和 slow 一起走
// 当 fast 到 null，slow 正好在待删除节点的前一个。

var removeNthFromEnd = function (head, n) {
    //新建一个虚拟节点 dummy，让 dummy.next 指向原来的 head
    // 用 dummy + 快慢指针，
    let dummy = new ListNode(0, head);
    let slow = dummy;
    let fast = dummy;

    // fast 先走 n+1 步
    for (let i = 0; i <= n; i++) {
        fast = fast.next
    }
    // fast 和 slow 一起走
    while(fast){
        slow = slow.next;
        fast = fast.next;
    }
    // 当 fast 到 null，slow 正好在待删除节点的前一个。
    slow.next = slow.next.next;

    return dummy.next
}