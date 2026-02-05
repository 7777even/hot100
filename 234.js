// 找中点
//反转后半部分
// 两节点进行比较
//复用反转链表

var isPalindrome = function (head) {
    if (!head || !head.next) return true;
    // 找中点
    let slow = head;
    let fast = head;

    while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
    }
    //反转后半部分
    let secondHalf = reverseList(slow);

    //两节点进行比较
    let p1 = head;
    let p2 = secondHalf;

    while (p2) {
        if (p1.val !== p2.val) return false;
        p1 = p1.next;
        p2 = p2.next;
    }

    return true;
}

//复用反转链表
function reverseList(head) {
    let prev = null;
    let curr = head;
    while (curr) {
        //暂存下一个节点
        let nextTemp = curr.next;
        //反转指针
        curr.next = prev;
        //prev后移
        prev = curr;
        //curr后移
        curr = nextTemp;
    }
    //反转过后的头部为prev;
    return prev;
}
