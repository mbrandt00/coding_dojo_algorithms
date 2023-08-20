export function removeAt(arr: Array<number>, index: number){
  let val = arr[index]
  for(let i = index; i < arr.length ; i ++){
    arr[i] = arr[i+1]
  }
  arr[arr.length - 1] = val
  return arr.pop()
}

// console.log(removeAt([1,2,4,3,4],2))