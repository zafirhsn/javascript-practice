/* 
  This page will cover some array methods, topics, and leetcode questions in JavaScript

  https://dev.to/lukocastillo/time-complexity-big-0-for-javascript-array-methods-and-examples-mlg

  * Add an element to the front of an array
  ^ O(n)
  array.unshift(elem)

  * Add an element to the end of an array
  ^ O(1)
  array.push(elem)
  
  * Delete the last element and return it
  ^ O(1)
  array.pop()
  
  * Delete the first element of the array
  ^ O(n)
  array.shift()

  * Add, remove, or replace items at a specified index
  ^ O(n)
  array.splice(start, deleteCount, item)

  * Sort elements in an array
  ^ O(nlogn)
  array.sort()

  * Concatenate arrays
  ^ O(n)
  array.concat(arr2, ... arrN) -> [...arr, ...arr2, ...arrN]

  * Get copy of sub array between start and end indicies [start, end)
  ^ O(n)
  array.slice(start, end)

  * Return the first index of the element that exists in the array, return -1 if it doesn't exist
  ^ O(n)
  array.indexOf(elem)

  * Returns true if element exists in array
  ^ O(n)
  array.includes(elem, start = 0)

  * Run a function for each element of the array
  ^ O(n)
  array.forEach((elem) => {});

  * Create a new array with elements returned from callback function, run on all elements
  ^ O(n)
  array.map((elem) => return elem + 1)

  * Create a new array that contains the elements that pass a filter condition (returns true)
  ^ O(n)
  array.filter((elem) => return elem % 2);

  * Return a single value after running the reduction function for each element
  ^ O(n)
  array.reduce((arregator, item) => { aggregator + item.age }, startAggregator)
  if startAggregator is 0, then we loop through items and add item.age to current aggregator, then return final number
*/




