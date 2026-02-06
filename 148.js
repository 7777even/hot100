//1.快慢指针找中点
//记录slow位置
// 2.断开链表
// 3.左右两部分递归排序
// 4.复用合并链表
var sortList = function(head) {
    //如果是空链表或者链表只有一个节点 则有序 直接返回
    if(!head||!head.next) return head;
    //快慢指针找中点;
    let slow = head;
    let fast = head;
    let prev = null;

    while(fast&&fast.next){
        //记录slow位置
        prev = slow;
        slow = slow.next;
        fast = fast.next.next;
    }
    //断开链表;
    prev.next = null;

    //左右两部分递归排序

    let left = sortList(head);
    let right = sortList(slow);

    return mergeList(left,right)
}

function mergeList(l1,l2){
    //初始化 dummy
    const dummy = new ListNode(0);
    //初始化一个指针
    let curr = dummy;

    //用一个指针，不断从l1和l2里 选更小的节点接到后面
    while(l1&&l2){
        if(l1.val<l2.val){
            curr.next = l1;
            l1 = l1.next;
        }else{
            curr.next = l2;
            l2 = l2.next;
        }
        curr = curr.next;
    }

    //不为空的链表直接接上
    curr.next = l1||l2;
    //返回新链表节点
    return dummy.next;
} 