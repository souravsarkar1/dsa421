function factiorial(n) {
    let res = [];
    res[0] = 1;
    for (let i = 1; i <= n; i++) {
        res[i] = (i * res[i - 1]);
    }
    return res[n];
}

console.log(factiorial(5));