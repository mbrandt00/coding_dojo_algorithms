// Created on iPad.

function concat(array1, array2) {
    var newArray = []
    for(let i = 0; i< array1.length; i ++){
        newArray.push(array1[i])
    }
    for(let i = 0; i< array2.length; i ++){
        newArray.push(array2[i])
    }
    console.log(newArray)
    return newArray

}

concat([1,2,3], [5,6,7])