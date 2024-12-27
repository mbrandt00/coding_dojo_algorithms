// Create a function that, given an input string str, 
// returns a boolean whether parentheses in str are valid. 
// Valid sets of parentheses always open before they close,
// for example. For "Y(3(p)p(3)r)s", return true. 
// Given "N(0(p)3", return false: not every parenthesis is closed.
// Given "N(0)t )0(k", return false, because the underlined ")"
//  is premature: there is nothing open for it to close.

function parensValid(string) {
    let strArr = string.split("")
    let stack = []
    for (let char of strArr){
        if (char === '('){
            stack.push(char)
        }else if (char === ')') {
            if (stack.pop() !== '('){
                return false
            }
        }
    }
    return stack.length === 0 
}

console.assert(parensValid("Y(3(p)p(3)r)s") === true);
console.assert(parensValid("N(0(p)3") === false);