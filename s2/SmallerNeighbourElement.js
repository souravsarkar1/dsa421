function ngl(n,arr){
    let ans = [];
    let stack = [];
    for(let i =0;i<n;i++){
        while(stack.length!==0 && stack[stack.length-1]>=arr[i]){
            stack.pop();
        }
        if(stack.length===0){
            ans.push(-1);
        }
        else{
            ans.push(stack[stack.length-1]);
        }
        stack.push(arr[i]);
    }
    console.log(ans.join(' '));
}

let input = `5
5 4 1 3 2`
input = input.split('\n');
let n = +input[0];
let arr = input[1].trim().split(' ').map(Number);
ngl(n,arr);