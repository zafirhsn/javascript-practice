// ! RECURSION 

function countDown(n) {
  if (n < 1) {
    return;
  }
  console.log(n)
  countDown(n-1);
}

countDown(8.56);

function fib(n) {
  if (n <= 2) { 
    return 1;
  }
  return fib(n-1) + fib(n-2);
}
console.log();
console.log(fib(7));

function flattenArr(arr) {
  if (arr.length === 0) {
    return arr;
  } else {
    helper(arr, []);
  }
}


function helper(arr, newArr) {
  console.log("Arr", arr);
  for(let i = 0; i < arr.length; i++) {
    let cur = arr[i];

    if(Array.isArray(cur)) {
      flattenArr(cur, newArr);
    }
    else {
      newArr.push(cur);
    }

  }
  return newArr;
}
console.log("flattenArr",flattenArr([1, 2,[3, 4, 5], [6, 7, 8, 9]]));

function productOfArray(arr) {
  if (arr.length === 0) {
    return 1;
  }
  return arr[0] * productOfArray(arr.slice(1, arr.length));
}

console.log(productOfArray([2,4,7]));




