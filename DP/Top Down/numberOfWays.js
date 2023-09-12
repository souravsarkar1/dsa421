function numberOfWays(n) {
    let res = [];
    res[0] = 1;
    res[1] = 1;
    res[2] = 2;
    for (let i = 3; i <= n; i++) {
        res[i] = (res[i - 1] + res[i - 2] + res[i - 3]);
    }
    return res[n];

}

console.log(numberOfWays(4));