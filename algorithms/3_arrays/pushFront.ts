export function pushFront(arr: Array<number>, number: number) {
  for (let i = arr.length; i > 0; i--) {
    arr[i] = arr[i - 1];
  }
  arr[0] = number;
  console.log(arr);
}

pushFront([0, 1, 2], 3);
