var reverseList = function (head) {
    //尾部
    let prev = null;
    //当前要处理的节点
    let curr = head;

    //交换
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

    return prev;
}