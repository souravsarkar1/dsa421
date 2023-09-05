function momo(fun) {
    let data = [];
    return (input) => {
        return data[input] || (data[input] = fun(input))
    }
}



const fibonacci = momo((n) => {
    let a = 0, b = 1, c;
    for (let i = 2; i <= n; i++) {
        c = a + b;
        a = b;
        b = c;
    }
    return b;
})

const a = fibonacci(433);
console.log(a);