// ! FILE I/O IN NODE.js

/* File I/O is a basic function that is helpful to know for any programming languages. For Javascript, we will look at reading and writing to different types of files, including csv, txt, html, and images (png, jpg). */

// The module required to work with Node.js filesystem
var fs = require("fs");

fs.readFile("input.txt", (err, data)=> {
  if (err) {
    return console.log(err);
  }
  console.log("Asynchronous read: " + data.toString());
  console.log(typeof data);
  console.log(data);
})