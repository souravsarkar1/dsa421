const stockSpan = (n,arr)=>{
let stack = [];
let ans = [];
for(let i =0;i<n;i++){
    while (stack.length!==0 && arr[stack[stack.length-1]]<=arr[i]) {
        stack.pop();
    }
    ans[i] = stack.length===0 ? i+1 : i - stack[stack.length-1];
    stack.push(i);
}
console.log(ans.join(" "));
}

let a = `1
6
100 60 70 65 80 85`
let line = 0;
a = a.split('\n');
let tc = +a[line++];

for (let i = 0; i < tc; i++) {
   let n = +a[line++];
   let arr = a[line++].split(" ").map(Number);
   stockSpan(n,arr);
    
}