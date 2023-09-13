function fracationalKnapsack(capcity, n, values, weights) {
  let ratios = [];
  for (let i = 0; i < n; i++) {
    ratios.push({ index: i, value: (values[i] / weights[i]) });
  }
  ratios.sort((a, b) => b.value - a.value);
  let sum = 0;
  for (let i = 0; i < n; i++) {
    let index = ratios[i].index;
    if (weights[index] <= capcity) {
      sum += values[index];
      capcity -= weights[index];
    } else {
      sum += (capcity * ratios[i].value);
      break;
    }
  }
  console.log(sum);
}

fracationalKnapsack(10, 4, [60, 100, 120, 140], [10, 20, 30, 50])