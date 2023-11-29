
// zero one knapsack
function ks(p, wt, n, c) {
    if (n === 0 || c === 0) return 0;
    if (wt[n - 1] > c) return ks(p, wt, n - 1, c);
    else return (Math.max(ks(p, wt, n - 1, c), ks(p, wt, n - 1, c - wt[n - 1]) + p[n - 1]));
}
const values = [10, 2, 1, 3];
const weights = [10, 5, 10, 10];
const capacity = 20;

console.log(ks(values, weights, values.length, capacity)); // Output: 220
`4 

10 5 10 10`