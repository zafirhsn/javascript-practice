/**
 * @param {string[]} strs
 * @return {string}
 */

// SUBMITTED AND WORKS 
// EASY
var longestCommonPrefix = function(strs) {
  let prefix = "";
  if (_.isEmpty(strs)) {
    return prefix;
  }
  for (let i = 0; i < strs[0].length; i++) {
    for (let word of strs) {
      if (word[i] !== strs[0][i] || i >= word.length) {
        return prefix;
      }
    }
    prefix += strs[0][i];
  }
  return prefix;
};