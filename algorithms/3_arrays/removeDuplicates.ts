export function removeDuplicates(arr: Array<string>):Array<string>{
  let noDuplicate:  string[] = []
  for (let i = 0; i < arr.length; i ++){
    if (arr[i] !== noDuplicate[noDuplicate.length - 1]){
      noDuplicate.push(arr[i])
    }
  }
  return noDuplicate
}

let testArray = ['apple', 'apple', 'banana', 'cherry', 'cherry', 'cherry', 'date']
console.log(removeDuplicates(testArray))