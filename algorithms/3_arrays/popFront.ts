export function popFront<T>(arr: T[]) {
  let value = arr[0];
  for(let i = 0; i < arr.length-1; i ++) {
    arr[i] = arr[i+1];
  }
  arr[arr.length-1] = value;
  return arr.pop();
}

// console.log(popFront([1, 2, 3]));  // Output: 1
// console.log(popFront([1, 2, 'hi', 'yes']));  // Output: 1