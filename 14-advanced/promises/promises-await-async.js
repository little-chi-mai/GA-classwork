// Promises are an evolution of callbacks.
// a way to handle or process data from an asynchronous process, whenever that process finishes.

//
// // callback:
// ajax('http://numbersapi.com/random/trivia', function(result) {
//   console.log(result);
// })
//
// // promises:
// const promise = ajax('http://numbersapi.com/random/trivia');
//
//
// // 1000 liens of code
//
//
// promise.then(function(result) {
//   console.log(result);
// })

const fs = require('fs');

// fs.readFile is asynchronous and uses callbacks.

// fs.readFile('flintstones.txt', 'utf-8', (err, content) => { //error first pattern
//   if (err) {
//     throw err; // dramatic return
//   }
//
//   console.log(content);
//   // console.log('thanks for using this program');
// });

// A promise wrapper around fs.readFile
const readFile = (filename) => {
  return new Promise((resolve, reject) => {
    fs.readFile(filename, 'utf-8', (err, content) => {
      if (err) {
        return reject(err); //boo
      }

      resolve(content); //yay
    })
  });
}


//
// readFile('flintstones.txt').then((fileContent) => {
//   console.log('yes it was successful', fileContent);
// }).catch((err) => {
//   console.error('wow something bad happened', err);
// })

const flintstonesPromise = readFile('flintstones.txt'); //returns a promise

// flintstonesPromise.then
// flintstonesPromise.catch

// 1000 lines of code
//
// flintstonesPromise.then((c) => {
//   console.log(c);
// })
//
//
// // 1000 lines of code
//
// flintstonesPromise.then((c) => {
//   console.log(c.toUpperCase());
// })

// 1000 lines of code

setTimeout(() => {
  flintstonesPromise.then((moreFlintstones) => {
    // console.log('here they are again (a bit later)', moreFlintstones);
  })
}, 7000)


///// async / await /////////////
console.log('Async / await example');
// readFile('flintstones.txt').then((data) => {
//   console.log(data);
// })

// await: have to use in a function

const printFlintstones = async () => { // to use await
  const data =  await readFile('flintstones.txt'); // Thennable (Promise)
  // console.log(data);
}

printFlintstones();


// axios returns a Promise (.then)
const axios = require('axios');
// axios.get('http://numbersapi.com/random/trivia').then((result) => {
//   console.log(result.data);
// })

const numberFact = async () => {
  const result = await axios.get('http://numbersapi.com/random/trivia');
  console.log('Number trivia:', result.data);
}
numberFact();
