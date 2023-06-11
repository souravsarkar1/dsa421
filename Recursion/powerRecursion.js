function power(a, b) {
    if (b === 0) {
        return a;
    } else {
        return a * power(a, b - 1);
    }
}

const a = power(3, 4);

console.log(a);

