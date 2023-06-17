let input = `6
1 15
1 20
2
3
2
3`
input = input.split('\n');

let line = 0;

let n = +input[line++];


let arr = [];

for (let i = 0; i < n; i++) {
    let el = input[line++].split(" ").map(Number);
    arr.push(el);
}
pushPopTop(arr, n)
function pushPopTop(arr, n) {
    let stack = [];
    for (let i = 0; i < n; i++) {
        if (arr[i][0] == 1) {
            stack.push(arr[i][1]);
        }
        else if (arr[i] == 2) {
            if (stack.length) {
                stack.pop();
            }
        }
        else if (arr[i] == 3) {
            if (stack.length > 0) {
                console.log(stack[stack.length - 1]);
            }
            else {
                console.log('Empty!');
            }

        }
    }
}