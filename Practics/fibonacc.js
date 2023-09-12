function fibonacci(n) {
    let a = 0, b = 1;
    let c;
    for (let i = 1; i < n; i++) {
        c = a + b;
        a = b;
        b = c;
    }
    console.log(c);
}

fibonacci(4);