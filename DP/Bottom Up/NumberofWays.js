function numberOfWays(n, arr) {
    if(n<0) return 0;
    if(n===0) return 1;
    else if(arr[n] !== -1) return arr[n];
    else return (arr[n] = (numberOfWays(n-1,arr) + numberOfWays(n-2,arr) + numberOfWays(n-3,arr)));
}

let n = 4;
let arr = new Array(n + 1).fill(-1);
let ans = numberOfWays(n, arr);
console.log(ans);