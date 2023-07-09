function stockSpan(n, arr) {
    let stack = [];
    let ans = [];
    ans[0] = 1;
    for (let i = 1; i < n; i++) {
        while (stack.length != 0 && arr[stack[stack.length - 1]] <= arr[i])
            stack.pop();
        ans[i] = (stack.length === 0) ? (i + 1) : (i - stack[stack.length - 1]);
        stack.push(i);
    }
   console.log(ans.join(' '));

}

let arr = `100 60 70 65 80 85`.split(' ').map(Number);
stockSpan(6, arr);

