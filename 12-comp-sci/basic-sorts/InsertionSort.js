function insertionSort (items) {
  // Loop through each element

  // store the current item value so it can be placed correctly
  // in the sorted portion of the array

  // Loop backward through the sorted portion of the array
  // and scoot everything over until you find the right place to
  // insert the value you're working with

  // Copy each item to the next slot over, as long as the value is smaller
  // than the item in the sorted array we're looking at (items[j] > value)

  // We can now insert the item in its sorted location

  // Remember to return the list!
  // let currentItem;
  // for (let i = 0; i < items.length; i++) {
  //   currentItem = items[i];
  //   for (let j = 0; j < items[0, i].length; j++) {
  //     if (currentItem < items[j]) {
  //       if (currentItem >= items[j - 1])
  //     }
  //   }
  // }
  for (let i = 0; i < items.length; i++) {
    const item = items[i];

    // preserve j in scope after the for loop block.
    for (var j = i-1; j >= 0 && items[j] > item; j--) {
      items[j+1] = items[j]
    }
    items[j+1] = item; //insertion
  }
  return items;
}

insertionSort([ 12, 6, 3, 7, 13, 8 ]);

module.exports = insertionSort;
