function ceilValue(arr, key) {
    let n = arr.length;
    let start = 0;
    let end = n - 1;
    let ceal = -1;

    while (start <= end) {
        let mid = Math.floor((start + end) / 2);

        if (arr[mid] === key) {
            // Found an exact match, return the index
            return mid;
        } else if (arr[mid] < key) {
            // Update ceal and search the right half

            start = mid + 1;
        } else {
            // Search the left half
            ceal = mid;
            end = mid - 1;
        }
    }

    return ceal; // Return the index of the floor value
}

let arr = [1, 4, 6, 8, 10];
let key = 8;

let floorIndex = ceilValue(arr, key);

if (floorIndex !== -1) {
    let ceilValue = arr[floorIndex];
    console.log("Ceal value:", ceilValue);
} else {
    console.log("No Ceal value found.");
}
