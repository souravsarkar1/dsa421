function insertionSort(arr) {
    let n = arr.length;

    for (let i = 1; i < n; i++) {
        let currentElement = arr[i];
        let j = i - 1;

        // Move elements of arr[0..i-1] that are greater than currentElement to one position ahead of their current position
        while (j >= 0 && arr[j] > currentElement) {
            arr[j + 1] = arr[j];
            j--;
        }

        arr[j + 1] = currentElement;
    }

    return arr;
}

// Example usage:
let arrayToSort = [3, 2, 1];
let sortedArray = insertionSort(arrayToSort);
console.log(sortedArray);
