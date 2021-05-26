function binarySearch(haystack, needle){
    //  search through the array non-recursively for the element
    //  if the element is not found, return -1
    //  if the element is found, return the index at which it was found
    // let result = -1;
    // const middleIndex = (array) => Math.ceil((array.length / 2 - 1));
    //
    // if (arr[middleIndex(arr)] === element) {
    //   result = middleIndex(arr);
    //   return result
    // }
    //
    //
    // if (arr[middleIndex(arr)] > element) {
    //   newArray = arr.slice(0, middleIndex(arr));
    //   let middlePoint = middleIndex(newArray);
    //
    // }

  let start = 0;
  let end = haystack.length - 1;
  let midpoint = Math.floor((start + end)/2);

  // while not found AND still have elements to search through
  while (haystack[midpoint] !==  needle && start < end) {
    // ignore left
    if (needle < haystack[midpoint]) {
      end = midpoint - 1;
    } else {   // ignore right
      start = midpoint + 1;
    }

    midpoint = Math.floor((start + end)/2); // Bug
  }

  return (haystack[midpoint] === needle) ? midpoint : -1;
}
console.log(binarySearch([0, 1, 2, 3, 4], 5));


function recursiveBinarySearch(haystack,
                               needle,
                               start = 0,
                               end = haystack.length - 1,
                               midpoint = Math.floor((start + end)/2)){

  // base case: success
  if (haystack[midpoint] === needle) {
    return midpoint; // success base case
  }

  // base case: failure - 1
  if (start >= end) {
    return -1; // failure base case
  }

  // recursion
  if (needle > haystack[midpoint]) {
    start = midpoint + 1;
  } else {
    end = midpoint - 1;
  }

  return recursiveBinarySearch(haystack, needle, start, end);
}

module.exports = {
    binarySearch,
    recursiveBinarySearch
}
