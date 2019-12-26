/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
  let num = x;
  let digArr = [];
  while (num !== 0) {
    let digit = num % 10;
    num = (x < 0) ? Math.ceil(num / 10) : Math.floor(num / 10);
    digArr.push(digit);
  }
  let fin = 0; 
  digArr.forEach((digit, i)=> {
    fin += digit * Math.pow(10, digArr.length - 1 - i);
  })
  if (fin < -(Math.pow(2, 31)) || fin > (Math.pow(2,31))) {
    return 0;
  }
  return fin;
};


console.log(reverse(-123));