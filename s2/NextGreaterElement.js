function nel(n,arr){
    let ans = [];
    let stack = [];
    for(let i = n-1;i>=0;i--){
        while(stack.length !== 0 && stack[stack.length-1]<=arr[i]){
            stack.pop();
        }
        if(stack.length===0) ans.push(-1);
        else ans.push(stack[stack.length-1]);
        stack.push(arr[i]);
    }
    console.log(ans.reverse().join(' '));
}

let a = `5
5 4 1 3 2`

a = a.split('\n');
let n = +a[0];
let arr = a[1].split(' ').map(Number);

nel(n,arr);