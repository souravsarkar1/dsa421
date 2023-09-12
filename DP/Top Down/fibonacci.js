function fibonacci(n) {
    let res = [];
    res[0] = 0;
    res[1] = 1;
    for (let i = 2; i <= n; i++) {
        res[i] = (res[i - 1] + res[i - 2]);
    }
    return res[n];
}

let ans = fibonacci(4);
console.log(ans);