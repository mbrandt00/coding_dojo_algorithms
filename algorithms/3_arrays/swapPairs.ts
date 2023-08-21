export function swapPairs<T>(arr: T[]){
  for(let i = 0; i < arr.length - 1; i+=2) {
    let tmp = arr[i]
    arr[i] = arr[i+1];
    arr[i+1] = tmp;
  }
  console.log(arr)
}

swapPairs([1,2,3,4])
swapPairs(["Brendan", true, 42])