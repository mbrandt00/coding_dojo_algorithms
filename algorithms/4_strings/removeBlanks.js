// Create a function that, given a string, returns all of that string’s 
// contents, but without blanks. If given the string 
// " Pl   ayTha  tF   u  nkyM  usi    c  ", 
// return "PlayThatFunkyMusic".”

function removeBlanks(string){
    arr = string.split("")
    newStr = ""
    for (let char of arr){
        if (char !== ' '){
            newStr += char
        }
    }
    return newStr
};
console.assert(removeBlanks(" Pl ayTha tF u nkyM usi c ") === "PlayThatFunkyMusic");