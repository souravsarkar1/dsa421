function maximiseRobbing(n, arr) {
    if (n === 0) return 0;
    if (n === 1) return arr[0];
    let dp = new Array(n + 1).fill(0);
    for (let i = 2; i <= n; i++) {
        dp[i] = Math.max(arr[i - 2] + arr[i - 1], arr[i - 1]);
    }
    console.log(dp[n]);
}

maximiseRobbing([1, 2, 3, 1].length, [1, 2, 3, 1])