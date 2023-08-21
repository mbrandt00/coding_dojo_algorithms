export function removeDuplicates<T>(arr: T[]):T[]{
  let noDuplicate:  T[] = []
  for (let i = 0; i < arr.length; i ++){
    if (arr[i] !== noDuplicate[noDuplicate.length - 1]){
      noDuplicate.push(arr[i])
    }
  }
  return noDuplicate
}

let testArray = ['apple', 'apple', 'banana', 'cherry', 'cherry', 'cherry', 'date']
// removeDuplicates(testArray) // [ 'apple', 'banana', 'cherry', 'date' ]