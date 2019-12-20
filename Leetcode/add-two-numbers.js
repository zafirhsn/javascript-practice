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

function ListNode(val) {
    this.val = val;
    this.next = null;
}

function addTwoNumbers(l1, l2) {
  let carry = 0;
  let final = [];
  for (let i = 0; i < l1.length; i++) {
    if (l1[i] + l2[i] >= 10) {
      carry = 1;
      final.push((l1[i] + l2[i]) % 10)
    }
    else {
      final.push(l1[i] + l2[i] + carry)
    }
  }
  return final;
};


(function main() {

}());