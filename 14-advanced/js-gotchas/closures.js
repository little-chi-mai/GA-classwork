// closures: why?
// let id = 0; // global: bad
// const nextID = function() {
//   return id++; //Post increment.
// }

// closures: demo
// Higher Order Function: function that is returned from another function

const helloMaker = () => {
  const greeting = 'Hello'; // greeting persists through a closure

  return function () {
    console.log(greeting);
  }
}

// const returnedFunction = helloMaker();
// returnedFunction();
//
// console.log(greeting); // undefined

// closures: solution
const nextIDMaker = function() {
  let id = 0;             // greeting persists through a closure
  return function() {
    return id++;
  }
}

const nextID = nextIDMaker();

//
console.log(nextID());
console.log(nextID());
console.log(nextID());
console.log(nextID());

// $.(document).ready(function() {
//   const message = 'This is a secret message';
//
//   $('button').on('click', function() {
//     console.log(message);
//   })
// })

// HTML Tags (200 or so)
// const p = function (content) {
//   return '<p>' + content + '</p>';
// }

const tagMaker = function (theTag, content) {
  return function (content) {
    return `<${theTag}>${content}</${theTag}>`
  }
}


const p = tagMaker('h1');
console.log(p('Hello Aron'));
