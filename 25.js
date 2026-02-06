// 1.用 dummy 头 统一处理链表头节点。
// 2.每次先检查剩余节点是否够 k 个。
// 3.反转当前 k 个节点，然后移动指针到下一组。
// 4.重复直到链表末尾。
var reverseKGroup = function(head, k) {
    //初始化dummy
      const dummy = new ListNode(0,head);
      let prevGroup = dummy;
    
      while (true) {
        // 找到当前组的尾节点
        let end = prevGroup;
    //检查剩余节点是否够 k 个。
        for (let i = 0; i < k && end != null; i++) {
          end = end.next;
        }
    // 不足 k 个，结束
        if (!end) break; 
    
        let start = prevGroup.next;
        let nextGroup = end.next;
    
        // 断开链表，反转当前组
        end.next = null;
    // 翻转后返回新头
        prevGroup.next = reverseList(start); 
    // start 变成尾部，连接下一组
        start.next = nextGroup; 
    
        // 移动 prevGroup 到本组尾部
        prevGroup = start;
      }
    
      return dummy.next;
    };
    
    // 复用反转链表
    function reverseList(head){
        let prev = null;
        let curr = head;
        while(curr){
            let next = curr.next;
            curr.next = prev;
            prev = curr;
            curr = next;
        }
        return prev;
    }
    