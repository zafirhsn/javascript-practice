// ! DATA STRUCTURES 

// For any language, there are certain abstract data structures that can help in various situations. Some of the most common ones that are helpful to know (and necessary in interviews) are:

/* 
1. Hash tables
2. Linked Lists
3. Binary search trees
4. Dynamic Arrays
5. Stacks and Queues
6. Heaps

Hash tables are most important. We'll see how to implement each one of these structures in javasript. First, we will start with some basic methods for our built-in types. 
 */

// ^ STRING METHODS
// Remember strings in javascript are immutable, but their characters are accessible like arrays
let str = "zafir hasan";
console.log(str.length);
console.log(str[2]);
// ^ .split()
console.log("===SPLIT===")
// Split the string on the space character, creating an array of substrings
// If split is called with no arguments, the whole string will become the one and only element in the array
// If you split on a character or substring, it's important to remember that that character or substring will be missing from the final array, it is removed.
let strArr = str.split(" ");
let oneArr = str.split();
let twoArr = str.split("f");
let charArr = str.split(""); 
console.log(strArr);
console.log(oneArr);
console.log(twoArr);
console.log(charArr);

// ^ .charAt(index)
console.log("===CHARAT===")
// return the character at position index
// If empty argument, then returns char at first index
console.log(str.charAt(8));
console.log(str.charAt());

// ^ .charCodeAt(index)
console.log("===CHARCODEAT===")
// returns unicode of the character at the specified index
console.log(str.charCodeAt(2));

// ^ .indexOf(str)
console.log("===INDEXOF===")
// Returns position of the first occurence of a specified value in a string
// If not found, returns -1
console.log(str.indexOf("fir"));
console.log(str.indexOf(""));
console.log(str.indexOf("x"));

// ^ .substring
console.log("===SUBSTRING===")
// Returns substring given starting index and ending index of original string [start, end)
console.log(str.substring(1, 7));
console.log(str.substring());

// ^ slice()
console.log("===SLICE===")
// Just like substring in many ways, for differences, look at this link https://stackoverflow.com/questions/2243824/what-is-the-difference-between-string-slice-and-string-substring
console.log(str.slice(1,3));

// ^  toString()
console.log("===TOSTRING===")
// Converts a different type to a string type. Read about type coercion to see what happens on different types
let num = 245;
console.log(num.toString());

// ^ toLowerCase(), toUpperCase()
// Returns a string either all lowercase or all uppercase




// ^ ARRAY METHODS 
let arr = ["apple", "orange", "banana", "lemon", "mango", "papaya"];

// ^ .join()
console.log("===JOIN===")
// Join all the elements in an array to form one string. The elements of the array are separated by commas, if no arguments are given
let strJoin = arr.join();
console.log(strJoin)
console.log(arr.join("hello")); // "hello" becomes the separator


// ^ pop()
console.log("===POP===")
// Remove the last element in the array, does not return anything. Actually modifies the array
arr.pop();
console.log(arr);

// ^ push(element)
console.log("===PUSH===")
// Will add element to array at end
arr.push("blueberry");
console.log(arr);

// ^ shift()
console.log("===SHIFT===")
// removes the first array element and moves the rest of the elements over one space to the front (lower index). It's like pop but for first element
arr.shift();
console.log(arr);

// ^ delete
console.log("===DELETE===")
// To delete an element from the array do this. It will set the item to be deleted to "undefined"
delete arr[3];
console.log(arr);
console.log(typeof arr[3] === "undefined");

// ^ splice()
// Splice can be used to 

// ! ARRAYS
console.log("===ARRAYS===")
// Arrays are dynamic in JS. There's no such thing as static arrays. When an array is full and you add another element, JS will automatically create a new array that is twice the size of the current array and copy each element over. 
// There are two ways to initiate an array in JavaScript, using the constructor or literal. When we use the class constructor for primitives, that is different that creating a primitive literal. However, it is the same for arrays; they're objects anyway. 

let numArr = new Array(3);
console.log(numArr instanceof Object); // true
console.log(numArr.length); // 3
let numArr2 = [];
console.log(numArr2 instanceof Object); // true
console.log(numArr2.length) // 0

// Arrays are passed by reference 
let numArr3 = numArr2; 
numArr3.push("zafir");
console.log(numArr2); // ["zafir"]

numArr2[3] = "hasan";
console.log(numArr2);
console.log(typeof numArr2[1])



// ! LINKED LISTS
console.log("===LINKED LISTS===");
// A linked list is made up of nodes. Each node contains two pieces: some piece of data and a link to the next node. You string nodes along in this way using that second attribute. 

class LinkedList {
  constructor(data, next) {
    this.data = data;
    this.next = next;
  }
}

class Node {
  constructor() {

  }
}

function zafir() {
  this.age = 23; 
}

var z = new zafir();
console.log(z.age);
var x = new zafir();
console.log(x.age);

