var addTwoNumbers = function (l1, l2) {
  let dummyHead = new ListNode(0);
  let p = l1,
    q = l2,
    curr = dummyHead;
  let carry = 0;
  while (p != null || q != null) {
    let x = p.val != null ? p.val : 0;
    let y = q.val != null ? q.val : 0;
    let sum = carry + x + y;
    carry = Math.floor(sum / 10);
    curr.next = new ListNode(sum % 10);
    curr = curr.next;
    if (p != null) p = p.next;
    if (p != null) q = q.next;
  }
  if (carry > 0) {
    curr.next = new ListNode(carry);
  }
  return dummyHead.next;
};
