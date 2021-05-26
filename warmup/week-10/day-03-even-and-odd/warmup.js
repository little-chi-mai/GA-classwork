// # Even and Odd sums
// Take in an array and return an array of the sums of even and odd numbers
// ```js
// evenOddSums([50, 60, 60, 45, 71]);
// => [170, 116]
// ```
//

const evenOddSums = (array) => {
  let evenSum = 0;
  let oddSum = 0;

  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 === 0) {
      evenSum += array[i];
    } else {
      oddSum += array[i];
    }
  }
  return [evenSum, oddSum];
}

// console.log(evenOddSums([50, 60, 60, 45, 71]));


// # Steve Yegge's Code Test Question
// - Print out the primary school multiplication table up to 12x12
//
// **Bonus:** Output the table using `console.table()`

const mulTable = () => {
  // let table = {
  //   1: [1, 2, 3],
  //   2: [1, 2, 3],
  //   3: [1, 2, 3]
  // }
  //
  //
  // // function Column(num) => {
  // //   [1, num].forEach((item, i) => {
  // //     this.item = item;
  // //   });
  // //
  // // }
  //
  // let array1 = [1, num1]; // [1, 2, 3, 4]
  // let array2 = [1, num2]; // [1, 2, 3]
  // let array3 = [];
  //
  // let table2 = {};
  //
  // for (let i = 0; i < array1.length; i++) {
  //   console.log(array1[i]);
  //   for (let j = 0; j < array2.length; j++) {
  //     array3.push([array1[i] * array2[j]]);
  //   }
  // }
  // console.log(array3);

  // let table = [];
  //
  // for (i = 0; i <= 12; i++) {
  //   let row = []
  //
  //   for (j = 0; j <= 12; j++) {
  //     let result = i * j;
  //     row.push(result);
  //   }
  //   table.push(row);
  // }

  const genNums = () => console.log([...Array(13).keys()]);
    // return genNums().map((row) => genNums().map((num) => num * keys)
  return genNums();
}

// console.table(mulTable())
console.log(mulTable())
