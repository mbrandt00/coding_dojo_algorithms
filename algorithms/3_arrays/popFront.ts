export function popFront(arr: Array<number>) {
  let value = arr[0]
  for(let i = 0; i < arr.length; i ++){
    arr[i] = arr[i+1]
  }
  arr[arr.length -1 ] = value;
  return arr.pop()
}

console.log(popFront([1,2,3]))