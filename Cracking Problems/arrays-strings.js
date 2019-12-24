// ! CHAPTER 1, ARRAYS AND STRINGS
// Code for problems from chapter

// This function will take an array of arguments, each argument being a single test case. For functions that take multiple arguments, this function will take a two-dimensional array. It will console log the test paramters and the status of the test (pass/fail)
function tester(arr, func) {
  for (let test of arr) {
    console.log(`${func.toString()}(${test.args}) should be ${test.ans}`);
    console.log(func(test.args) === test.ans);
  }  
}

// 1.1 
// Time - O(n)
// Space - O(1), or O(c), where c is the size of the character set
let isUnique = function(s) {
  let hashT = {};
  for (let letter of s) {
    if (!hashT.hasOwnProperty(letter)) {
      hashT[letter] = true;
    }
    else { 
      return false;
    }
  }
  return true;
}

// 1.2
// Time - O(n)
// Space - O(1) or O(c), where c is the size of the character set
function isPerm(s, t) {
  let hashT = {};
  for (let letter of s) {
    if (!hashT.hasOwnProperty(letter)) {
      hashT[letter] = [1];
    } else {
      hashT[letter][0]++;
    }
  }
  for (let letter of t) {
    if (!hashT.hasOwnProperty(letter)) {
      return false;
    } else {
      if (hashT[letter][1] === undefined) {
        hashT[letter].push(1);
      } else {
        hashT[letter][1]++; 
      }
    }
  }
  for (let letter in hashT) {
    if (hashT[letter][0] !== hashT[letter][1]) {
      return false;
    }
  }
  return true;
}

(function main() {
  console.log("===1.1===")
  console.log(isUnique("zafir"));
  console.log(isUnique("hasan"));
  console.log(isUnique(" "));
  console.log(isUnique(""));

  console.log("===1.2===");
  console.log(isPerm("zafir", "rfzai"));
  console.log(isPerm("zaafirr", "zfairra"));
  console.log(isPerm("zafirre", "fazrrrri"));
  console.log(isPerm("zafirre", "fazrrrri"));
  console.log(isPerm("zafirre", " "));
}())

console.log(7 >> 1);
console.log(10 >> 1);
console.log(13 >> 1);
console.log(21 >> 1);

