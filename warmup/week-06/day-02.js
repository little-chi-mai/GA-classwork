// ## Arrays - Flatten and Reverse
//
// The goal of this exercise is to manipulate arrays by creating a function that can reverse an array and by creating a function that can flatten an array. Do not use any libraries to complete this task - write this stuff from scratch using standard JS methods and objects.
//
// - Make two functions
//   - reverse
//   - flatten
//
// ```js
// reverse( [1, 2, 3, 4] );
// // => [ 4, 3, 2, 1 ]
// flatten( ["Hello", ["World", 42] ] );
// // => [ "Hello", "World", 42 ]
// ```
//
// You only need to make flatten work to one level deep! You should be able to flatten this - ` ["Hello", ["World"]] ` - but not this - ` ["Hello", [[["World"]]]] `
//
// ## Bonus
//
// Make one that flattens any array that you pass into it: ` ["Hello", [[["World"], 42]]] ` -> `[ "Hello", "World", 42 ]`

const reverse = function (array) {
  let result = [];
  for (let i = 0; i < array.length; i++) {
    result.unshift(array[i]);
  };
  console.log(result);
}

// reverse( [1, 2, 3, 4] );

const flatten = function (array) {
  let result = [];
  for (let i = 0; i < array.length; i++) {
    if (Array.isArray(array[i])) {
      result = result.concat(array[i])
    } else {
      result.push(array[i]);
    }
    console.log(result);
  };
}

// flatten( ["Hello", ["World", 42] ] );

const flatten_all = function (array) {
  let result = [];

  array.forEach(function(element) {
    if(Array.isArray(element)){
      result = flatten_all(element);
    } else {
      result.push(element);
    }
  })

  console.log(result);

}

flatten_all(["Hello", [[["World"]]]]);
