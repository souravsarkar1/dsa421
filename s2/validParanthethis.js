function validParantechis(str) {
    let n = str.length;
    let stack = [];
    for (let i = 0; i < n; i++) {
        let top = stack[stack.length - 1];
        if (str[i] === '(' || str[i] === '{' || str[i] === '[') {
            stack.push(str[i]);
        }
        else if (str[i] === ')' && top === '(' && stack.length !== 0) {
            stack.pop();
        }
        else if (str[i] === '}' && top === '{' && stack.length !== 0) {
            stack.pop();
        }
        else if (str[i] === ']' && top === '[' && stack.length !== 0) {
            stack.pop();
        }
        else {
            return false;
        }

    }
    return stack.length === 0;
}
let a = validParantechis("()[]{}");
console.log(a);