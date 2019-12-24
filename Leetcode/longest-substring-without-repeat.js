/**
 * @param {string}
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
  let max = 0; 
  let i = 0; 
  let j = 0;
  hashT = {};
  while (i < s.length && j < s.length) {
    if (!hashT.hasOwnProperty(s[j])) {
      hashT[s[j]] = j;
      j++;
      max = Math.max(max, j - i);
    }
    else { 
      if (!(hashT[s[j]] < i)) {
        i = hashT[s[j]] + 1;
      }
    }
  }
};



(function main(){
  console.log("LeetCode problem 3 -- Longest Substring Without Repeating Characters");
}())

let hashT = {};
console.log(hashT[" "] === undefined);
console.log(hashT[" "])
