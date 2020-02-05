var isPalindrome = function(x) {
  if (x < 0) {
    return false;
  }
  let str = x.toString();
  let rev = str.split("").reverse().join("");
  console.log(str, rev);
  return (str === rev);
}

let y = 10
console.log(y.toString().split("").join(""));
console.log(isPalindrome(10));
