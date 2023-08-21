export function reverse(arr: Array<number>):Array<number>{
  for(let i = 0; i < arr.length/2; i ++){
    let tmp = arr[i]
    arr[i] = arr[arr.length -i - 1]
    arr[arr.length -i - 1] = tmp
  }
  return arr
}

// console.log(reverse([1, 5, 7, 2, 1]))