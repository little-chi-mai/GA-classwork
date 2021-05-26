// recreate `cat` in JS

// Javascript Standard Library
// Node Standard Library: Built-in

// fs: file system
const fs = require('fs'); // No need to install: this is builtin Node.js standard library

// import React from 'react'; // modern JS, doesn't work in node

// Synchronously- this is wrong way: 
// const fileData = fs.readFileSync('flintstones.txt', 'utf-8'); // Wait until the above code done // Blocking
//
// console.log(fileData);

// Asynchronous: callbacks
// Many asynchronous Node.js functions implement the Error First Pattern
// Error First Pattern
fs.readFile('flintstones.txxt', 'utf-8', function(error, data) {
  if (error) {
    return console.error(error); // a bit wanky console.warn
  }
  console.log(data);
  console.log('Thanks'); //First
})
