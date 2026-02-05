//第一阶段：判断是否有环
//第二阶段：有环后找入环点
// 把其中一个指针放回 head，
// 两个指针每次都走一步，
// 再次相遇的位置 = 入环点

var detectCycle = function (head) {
    if (!head || !head.next) return null;
    //第一阶段：判断是否有环
    let slow = head;
    let fast = head;

    while (fast && fast.next) {
         slow = slow.next;
         fast = fast.next.next;

        //第二阶段：有环后找入环点
        if (slow === fast) {
            // 把其中一个指针放回 head，
            let p1 = head;
            let p2 = slow;
            // 两个指针每次都走一步，
            // 再次相遇的位置 = 入环点
            while(p1!==p2){
                p1=p1.next;
                p2=p2.next
            }
            return p1;
        }
    }
    return null;

}