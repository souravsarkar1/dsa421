function knapsackBottomUp(p, wt, n, c) {
    const dp = new Array(n + 1).fill(null).map(() => new Array(c + 1).fill(0));
  
    for (let i = 0; i <= n; i++) {
      for (let w = 0; w <= c; w++) {
        if (i === 0 || w === 0) {
          dp[i][w] = 0;
        } else if (wt[i - 1] <= w) {
          dp[i][w] = Math.max(dp[i - 1][w], dp[i - 1][w - wt[i - 1]] + p[i - 1]);
        } else {
          dp[i][w] = dp[i - 1][w];
        }
      }
    }
  
    return dp[n][c];
  }
  
  // Test the bottom-up approach
  console.log(knapsackBottomUp(values, weights, n, capacity)); // Output: 220
  