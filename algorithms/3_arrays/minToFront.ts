import {removeAt} from './removeAt'
import {insertAt} from './insertAt'
export function minToFront(arr: Array<number>):Array<number>{
  let min: number = arr[0]
  let minIndex: number = 0;
  for(let i = 0; i < arr.length; i ++) {
    if (arr[i] < min){
      min = arr[i]
      minIndex = i
    }
  }
  removeAt(arr, minIndex)
  insertAt(arr, 0, min)
  return arr
}

// console.log(minToFront([4,7,2,8]))
