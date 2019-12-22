/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
  let carry = 0;
  let final = new ListNode(0);
  let pointerf = final;
  let pointerl1 = l1;
  let pointerl2 = l2;
  let pval1 = 0;
  let pval2 = 0;
  while (pointerl1 !== null || pointerl2 !== null) {
    if (pointerl1 !== null) {
      pval1 = pointerl1.val;
    } else { pval1 = 0; }
    if (pointerl2 !== null) {
      pval2 = pointerl2.val;
    } else { pval2 = 0; }
    
    pointerf.next = new ListNode((pval1 + pval2 + carry) % 10);
    carry = Math.floor((pval1 + pval2 + carry) / 10.0);
    
    if (pointerl1 !== null) { 
      pointerl1 = pointerl1.next;
    }
    if (pointerl2 !== null) {
      pointerl2 = pointerl2.next;
    }
    pointerf = pointerf.next;
  }
  if (carry === 1) {
    pointerf.next = new ListNode(carry);
  }
  return final.next;
};

(function main() {
  console.log("This is the correct answer for this problem");
}())
