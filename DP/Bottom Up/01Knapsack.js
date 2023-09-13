function knapsack(p,wt,n,c,memo){
    if(n=== 0 || c === 0) return 0;
    if(wt[n-1]>c) return knapsack(p,wt,n-1,c,memo);
    if(memo[n][c] !== undefined) return memo[n][c];
    else {
        memo[n][c] = Math.max(knapsack(p,wt,n-1,c,memo),p[n-1] + knapsack(p,wt,n-1,c-wt[n-1],memo));
        return memo[n][c];
    }
}

  const values = [10, 2, 1, 3];
  const weights = [10, 5, 10, 10];
  const capacity = 20;
  const memo = new Array(values.length + 1)
    .fill(undefined)
    .map(() => new Array(capacity + 1).fill(undefined));
  
  console.log(knapsack(values, weights, values.length, capacity, memo)); // Output: 13









// function knapsack(p, wt, n, c, memo) {
//     if (n === 0 || c === 0) return 0;
  
//     if (memo[n][c] !== undefined) return memo[n][c];
  
//     if (wt[n - 1] > c) {
//       memo[n][c] = knapsack(p, wt, n - 1, c, memo);
//     } else {
//       memo[n][c] = Math.max(
//         knapsack(p, wt, n - 1, c, memo),
//         p[n - 1] + knapsack(p, wt, n - 1, c - wt[n - 1], memo)
//       );
//     }
  
//     return memo[n][c];
//   }
  
//   const values = [10, 2, 1, 3];
//   const weights = [10, 5, 10, 10];
//   const capacity = 20;
//   const memo = new Array(values.length + 1)
//     .fill(undefined)
//     .map(() => new Array(capacity + 1).fill(undefined));
  
//   console.log(knapsack(values, weights, values.length, capacity, memo)); // Output: 13
  
