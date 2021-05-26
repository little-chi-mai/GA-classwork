// # Google Interview Question

// This question was asked in an interview at Google, for a Junior Engineer role.

// Given an unordered array of integers and a value named sum, `return true` if any two items can be added and equal the value of sum. Otherwise, `return false`.

// So, if we were given the array ``[3, 5, 1, 4]`` and the value `9`, our function should `return true`, because `4 + 5 = 9`.

// const canBeSum = (array, sum) => {
//     for (let i = 0; i < array.length - 1; i++) {
//         for (let j = i + 1 ; j < array.length; j++) {
//             if (array[i] + array[j] === sum) {
//                 console.log(array[i], array[j]);
//                 return true
//             }
//         }
//     }
//     return false
// }

// console.log(canBeSum([3, 7, 1, 2], 9));

// Recursive

const recursiveCanBeSum = (array, sum, subArray = [], baseNum = null, addedNum = null) => {
    if (baseNum + addedNum === sum) {
        return true
    } else if (baseNum === array[array.length - 1]) {
        return false
    }
    
    if (subArray === )
    baseNum = array[0];
    subArray = subArray.slice(1);
    addedNum = subArray[0];

    if (baseNum + addedNum !== sum) {
        if (subArray == []) {
            array = array.slice(1);
        }
        console.log(baseNum, subArray, addedNum);
        recursiveCanBeSum(array, sum, subArray, baseNum, addedNum);
    }
    
}

console.log(recursiveCanBeSum([3, 7, 1, 2], 9));