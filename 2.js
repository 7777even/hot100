// 1.用 dummy 节点 + tail 指针 构建新链表
// 2.用 carry 保存进位
// 3.遍历 l1 和 l2，逐位相加
// 4.最后判断是否有多余的进位，若有加一个节点

//判断非空
//整体相加
// 进位
//当前位
//更新tail
//指向下一个节点
//最后一位进位

var addTwoNumbers = function(l1, l2) {
    let dummy = new ListNode(-1);
    let tail = dummy;
    let carry=0;

    //判断非空
    while(l1 || l2){
        let x = l1?l1.val:0;
        let y = l2?l2.val:0;
        //整体相加
        let sum = x+y+carry;
        //进位
        carry = Math.floor(sum/10);
        //当前位
        tail.next = new ListNode(sum%10);
        //更新tail
        tail = tail.next;

        //指向下一个节点
        if(l1) l1 = l1.next;
        if(l2) l2 = l2.next;
    }
    //最后一位进位
    if(carry>0){
        tail.next = new ListNode(carry);
    }
    return dummy.next;
}