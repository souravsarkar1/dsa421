function superDigit(n) {
    if (n.length === 1) return n;
    let sum = 0;
    for (let i = 0; i < n.length; i++) {
        sum += (+n[i]);
    }
    return superDigit(sum + "");
}

let ans = superDigit(45 + "");
console.log(ans);