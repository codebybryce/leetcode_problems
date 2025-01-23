/**
 * @param {string} s
 * @return {boolean}
 */
const isValid = (s) => {

    if(s % 2 === 1 || s === "") return false;
    const symbolMap = {
        "{":"}",
        "[":"]",
        "(":")"
    }

    const stack = [];

    for(let char of s){
        if(char in symbolMap){
            stack.push(char);
        } else if(stack.length > 0 && char === symbolMap[stack.pop()]){
            continue
        } else {
            return false
        }
    }
    return stack.length === 0;

    }
