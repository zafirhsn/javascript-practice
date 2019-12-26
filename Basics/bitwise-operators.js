// ! BITWISE OPERATIONS
//* https://www.w3schools.com/js/js_bitwise.asp
// Bitwise operations are performed on the binary representation of the number
// It's important to know that in JS, numbers are stored as 64 bit floating points. However, when performing a bitwise operation, JS will turn convert the number(s) to 32 bit signed ints. Then the number is converted back to 64 bit float after the operation. For a review on 2s complement and how most modern languages handle binary operations, look at this. 
//* https://stackoverflow.com/questions/1049722/what-is-2s-complement

// & AND, sets each bit to 1 if both bits are 1
console.log();

// | OR, sets each bit to 1 if one of the bits are 1

//* ^ XOR, sets each bit to 1 if only one of the two bits are 1

// ~ NOT, negates each bit

// << LEFT SHIFT, pushes in a 0 from the right and moves each bit over one to the left, dropping the left most bit

// >> RIGHT SHIFT, copies the left most bit over one to the right, along with the rest of the bits, the right most bit falls off