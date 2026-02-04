var getIntersectionNode = function (headA, headB) {
    //边界判断
    if (!headA || !headB) return null;

    //初始化路线
    let pA = headA;
    let pB = headB;

    //循环
    while (pA !== pB) {
        pA = pA ? pA.next : headB;
        pB = pB ? pB.next : headA;
    }

    return pA;
}