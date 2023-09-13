function simulateKadaneAlgorithm(arr) {
    let maxEndingHere = arr[0];
    let minEndingHere = arr[0];
    let maxProduct = arr[0];

    console.log("Initialization:");
    console.log(`maxEndingHere = ${maxEndingHere}`);
    console.log(`minEndingHere = ${minEndingHere}`);
    console.log(`maxProduct = ${maxProduct}`);
    console.log();

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < 0) {
            // Swap maxEndingHere and minEndingHere if the current number is negative
            [maxEndingHere, minEndingHere] = [minEndingHere, maxEndingHere];
        }

        maxEndingHere = Math.max(arr[i], maxEndingHere * arr[i]);
        minEndingHere = Math.min(arr[i], minEndingHere * arr[i]);

        maxProduct = Math.max(maxProduct, maxEndingHere);

        console.log(`Iteration ${i + 1} (Index ${i}, Element ${arr[i]}):`);
        console.log(`maxEndingHere = ${maxEndingHere}`);
        console.log(`minEndingHere = ${minEndingHere}`);
        console.log(`maxProduct = ${maxProduct}`);
        console.log();
    }

    console.log("End of Loop:");
    console.log(`maxProduct = ${maxProduct} (Final maximum product)`);
}

// Example usage:
simulateKadaneAlgorithm([-2, 3, -4]);
