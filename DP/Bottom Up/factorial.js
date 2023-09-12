function factorial(n, arr) {
    if (n === 0) return 1;
    else if (arr[n] !== -1) return arr[n];
    else return (arr[n] = n * factorial(n - 1, arr));
}

let n = 5;
let arr = new Array(n + 1).fill(-1);
let ans = factorial(n, arr);
console.log(ans);
