function rotateArray(arr, n, k) {
    k = k % n;
    reverseTheArray(arr, 0, n - 1);
    reverseTheArray(arr, 0, k);
    reverseTheArray(arr, k, n - 1);
    return arr;
}

function reverseTheArray(arr, l, r) {
    while (l < r) {
        [arr[l], arr[r]] = [arr[r], arr[l]];
        l++;
        r--;
    }
    return arr;
}

console.log(rotateArray([1,2,3,4,5,6,7], 7, 3));