// brut force
function sumArraayWithLargestSum(arr = []) {
    let n = arr.length;
    let largestSum = -Infinity;
    for (let i = 0; i < n; i++) {
        let sumArr = [];
        for (let j = i; j < n; j++) {
            sumArr.push(arr[j]);
            // console.log(sumArr);

            let sum = findSum(sumArr);
            if (sum > largestSum) largestSum = sum;
            // console.log(sum);         
        }
    }
    console.log(largestSum);
}

function findSum(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}

sumArraayWithLargestSum([1, 2, 3])


// optimistic solution

function findLargestSubArrSum(arr = []) {
    if (arr.length === 0) {
        return 0; // Handle the case where the array is empty
    }

    let largestSum = arr[0]; // Initialize with the first element
    let currentSum = arr[0];

    for (let i = 1; i < arr.length; i++) {
        // Update the current sum by either continuing the subarray or starting a new subarray
        currentSum = Math.max(arr[i], currentSum + arr[i]);

        // Update the largest sum if the current sum becomes larger
        largestSum = Math.max(largestSum, currentSum);
    }

    return largestSum;
}

// Example usage:
const arr = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
const result = findLargestSubArrSum(arr);
console.log("Maximum Subarray Sum:", result);
