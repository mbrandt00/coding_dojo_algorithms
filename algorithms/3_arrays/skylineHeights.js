//“Lovely Burbank has a breathtaking view of the Los Angeles skyline. 
// Let’s say you are given an array with heights 
// of consecutive buildings, starting closest to 
// you and extending away. Array [-1,7,3] 
// would represent three buildings: first 
// is actually out of view below street level,
//  behind it is second at 7 stories high, 
// third is 3 stories high (hidden behind the 7-story). 
// You are situated at street level. 
// Return array containing heights of buildings you can see, in order.
//  Given [-1,1,1,7,3] return [1,7]. Given [0,4] return [4]. 
// As always with challenges, do not use built-in array functions such as unshift().”


function skylineHeights(arr){
    var heights = []
    for (let i = 0; i < arr.length; i ++) {
        if(arr[i] > 0 && (heights.length === 0 || arr[i] > heights[heights.length-1])){
            heights.push(arr[i]);
        }
    }
    return heights;
}
console.assert(skylineHeights([-1, 7, 3]).toString() === [7].toString())
console.assert(skylineHeights([1, 7, 3]).toString() === [1, 7].toString())
console.assert(skylineHeights([0, 4]).toString() === [4].toString())
