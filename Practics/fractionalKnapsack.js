function fractionalKnapsack(capacity, n, values, weights) {
    let ratios = [];
    for (let i = 0; i < n; i++) {
        ratios.push({ index: i, ratio: values[i] / weights[i] });
    }
    //console.log(ratios);
    ratios.sort((a, b) => b.ratio - a.ratio);
    //console.log(ratios);\
    let ans = 0;
    for (let i = 0; i < n; i++) {
        let index = ratios[i].index;
        if (weights[index] <= capacity) {
            ans += values[index];
            capacity -= weights[index];
        }
        else {
            ans += capacity * ratios[i].ratio;
            break;
        }
    }
    console.log(Math.round(ans));
}