function waysToClimStairs(n, arr) {
    if (n === 0) {
      return 1;
    }
    if (n < 0) {
      return 0;
    }
    if (arr[n] !== -1) {
      return arr[n];
    }
    arr[n] = waysToClimStairs(n - 1, arr) + waysToClimStairs(n - 2, arr) + waysToClimStairs(n - 3, arr);
    return arr[n];
  }

const n = 4;
const arr = new Array(n+1).fill(-1);
let ans = waysToClimStairs(n,arr);
console.log(ans);