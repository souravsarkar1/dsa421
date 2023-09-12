function fibonacci(n, arr) {
    if (n === 0 || n === 1) return n;
    else if (arr[n] !== -1) return arr[n];
    else return (arr[n] = fibonacci(n - 1, arr) + fibonacci(n - 2, arr));
}
let n = 4;
let arr = new Array(n + 1).fill(-1);

let ans = fibonacci(n, arr);
console.log(ans);