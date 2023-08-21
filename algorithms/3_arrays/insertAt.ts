export function insertAt<T>(arr: T[], index: number, value: T) {
  // Copy until index, and then insert and shift
  for (let i = arr.length; i >= index; i --) {
    arr[i] = arr[i - 1];
  }
  arr[index] = value
  return(arr)
}

// console.log(insertAt([1,2,4], 2, 3))