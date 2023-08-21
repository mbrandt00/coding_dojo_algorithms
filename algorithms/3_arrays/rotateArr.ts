export function rotateArr<T>(arr: T[], offset: number){
  const rotations = offset % arr.length;
  for (let i =0; i < rotations; i ++ ){
    let tmp = arr[arr.length - 1]
    for (let j = arr.length - 1; j > 0; j--){
      arr[j] = arr[j-1]
    }
    arr[0] = tmp
  }
  return arr
}

// rotateArr([1,2,3,4], 101)) == [ 4, 1, 2, 3 ]