
function nextGratterElement2(n, arr) {

    let stack = [];
    let ans = [];
    for (let i = 2 * n - 1; i >= 0; i--) {
        while (stack.length !== 0 && arr[i % n] >= stack[stack.length - 1]) {
            stack.pop();
        }
        if (i < n) {
            if (stack.length > 0) {
                ans[i] = stack[stack.length - 1];
            }
            else {
                ans[i] = -1;
            }
        }
        stack.push(arr[i % n]);
    }
    console.log(ans.join(' '));

}
let input = `2
3
1 2 1
5
1 2 3 4 3`;

input = input.split('\n');
let line = 0;
let tc = +input[line++];
for(let i =0;i<tc;i++){
    let n = +input[line++];
    let arr = input[line++].split(' ').map(Number);
    nextGratterElement2(n,arr);
}