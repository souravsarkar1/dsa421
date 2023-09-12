function numberOfWays(n) {
    let a = 0, b = 1, c = 1, d;
    for (let i = 2; i <= n; i++) {
        d = a + b + c;
        a = b;
        b = c;
        c = d;
    }
    console.log(d);
}
numberOfWays(4);