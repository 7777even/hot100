function mergeKList(lists){
    //如果链表数组为空 直接返回null
    if(!lists.length) return null;
    //一旦数组长度变成1 就停止循环
    while(lists.length>1){
        const mergedLists = [];
        //两两合并循环
        for(let i =0;i<lists.length;i+=2){
            //第一个链表
            const l1 = lists[i]
            //如果数组长度为奇数，最后一个链表没有配对，直接作为单独链表合并
            const l2 = i+1<lists.length?lists[i+1]:null;
            mergedLists.push(mergeList(l1,l2));
        }
        //新一轮合并结果
        lists = mergedLists;
    }
    return lists[0];
}



function mergeList(l1,l2){
    //初始化dummy
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