// ! HASH TABLES 

// function hash(key, arrayLen) {
//   let total = 0;
//   for (let i = 0; i < key.length; i++) {
//     let char = key[i];
//     let value = char.charCodeAt(0) - 96 // alphabetic position of char
//     total = (total + value) % arrayLen; // % keeps it within arrayLen
//   }
//   return total
// }

function hash(key, arrayLen) {
  let total = 0;
  let weirdPrime = 31; // hash functions take advantage of prime #s to reduce collisions
  for (let i = 0; i < Math.min (key.length, 100); i++) {
    let char = key[i];
    let value = char.charCodeAt(0) - 96
    total = (total * weirdPrime + value) % arrayLen;
  }
  return total
}

class HashTable {
  constructor(size) {
    this.keyMap = new Array(size);
  }

  set(key, value) {
    let newKey = hash(key, this.keyMap.length);
    if (this.keyMap[newKey]) {
      this.keyMap[newKey].push([key, value]);
    } else {
      this.keyMap[newKey] = ([[key, value]]);
    }
  }

  get(key) {
    let newKey = hash(key, this.keyMap.length);
    if (!this.keyMap[newKey]) {
      return false;
    }
    for (let i = 0; i < this.keyMap[newKey].length; i++) {
      if (this.keyMap[newKey][i][0] === key) {
        return this.keyMap[newKey][i][1];
      }
    }
  }

  keys() {
    let keyArr = [];
    for (let i = 0; i < this.keyMap.length; i++) {
      if (!this.keyMap[i]) {
        continue;
      }
      else {
        for (let j = 0; j < this.keyMap[i].length; j++) {
          keyArr.push(this.keyMap[i][j][0]);
        }
      }
    }
    return keyArr;
  }

  values() {
    let keyArr = [];
    for (let i = 0; i < this.keyMap.length; i++) {
      if (!this.keyMap[i]) {
        continue;
      }
      else {
        for (let j = 0; j < this.keyMap[i].length; j++) {
          keyArr.push(this.keyMap[i][j][1]);
        }
      }
    }
    return keyArr;
  }
}

let white = "#ffffff";
let yellow = "#fff000"

console.log(hash(white, 10));
console.log(hash(yellow, 10));

let hashT = new HashTable(10);
hashT.set("white", "#ffffff");
hashT.set("yellow", "#fff000");
console.log(hashT.keyMap);
console.log(hashT.get("white"));
console.log(hashT.keys());
console.log(hashT.values());