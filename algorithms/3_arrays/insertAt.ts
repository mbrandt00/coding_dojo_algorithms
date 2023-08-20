export function insertAt(arr: Array<number>, index: number, value: number) {
  // Copy until index, and then insert and shift
  for (let i = arr.length; i >= index; i --) {
    arr[i] = arr[i - 1];
  }
  arr[index] = value
  return(arr)
}

console.log(insertAt([1,2,4], 2, 3))