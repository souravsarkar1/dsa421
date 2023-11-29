function secondLargestElelment(arr = []) {
    let n = arr.length;
    let firstLargest = arr[0];
    let secondLlargest = -Infinity;
    for (let i = 1; i < n; i++) {
        if (arr[i] > firstLargest) {
            secondLlargest = firstLargest;
            firstLargest = arr[i];
        }
    }
    console.log(secondLlargest);
}

secondLargestElelment([1, 2, 3, 4, 5, 5]);