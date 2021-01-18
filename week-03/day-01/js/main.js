// # Sum of arrays
//
// Write a function that receives two arguments, both of which are Arrays and sums them. These arrays contain only numbers.
// You don't know their length and they can contain both integers and floating point numbers.
//
// ## Example
//
// [2, 6.4, 3] + [3, 3.6, 2] = 20
// sum([2, 6.4, 3], [3, 3.6, 2]) => 20

const a1 = [2, 6.4, 3];
const a2 = [3, 3.6, 2];

const sum = function (array) {
  let result = 0;

  for (let i = 0; i < array.length; i++) {
    result += Number(array[i]);
  }
  return result;
}

sum(a1);

const sumArrays = function (a1, a2) {
  let result = 0;
  result = sum(a1) + sum(a2);
  console.log(result);
  return result;
}

sumArrays(a1, a2);

const multipleArrays = function () {
  let result = 0;

  for (let i = 0; i < arguments.length; i++) {
    for (let j = 0; j < arguments[i].length; j++) {
      result += arguments[i][j];
    }
  }
  console.log(result);
  return result;
}

multipleArrays(a1, a2);
