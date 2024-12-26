// Implement removeNegatives() that accepts an array, 
// removes negative values, and returns the same array 
// (not a copy), preserving non negatives order as always
// do not use built in array functions. Don’t use nested loop

function removeNegatives(arr){
    var posIndex = 0;
    for (let i = 0; i < arr.length; i ++){
        if (arr[i] >= 0) {
            arr[posIndex] = arr[i]
            posIndex ++;
        }
    }
    arr.length = posIndex
    return arr
}
removeNegatives([-5, 1, 2, 3, -4, 4])
console.assert(JSON.stringify(removeNegatives([1, -1, 2, -2, 3, -3])) === JSON.stringify([1, 2, 3]));
console.assert(JSON.stringify(removeNegatives([0, -1, 2, -2, 3, -3])) === JSON.stringify([0, 2, 3]));
console.assert(JSON.stringify(removeNegatives([5, 4, 3, 2, 1])) === JSON.stringify([5, 4, 3, 2, 1]));
console.assert(JSON.stringify(removeNegatives([1, 0, -1, -2, 3])) === JSON.stringify([1, 0, 3]));
console.assert(JSON.stringify(removeNegatives([0])) === JSON.stringify([0]));
console.assert(JSON.stringify(removeNegatives([-1, -2, -3])) === JSON.stringify([]));