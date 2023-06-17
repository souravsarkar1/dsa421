function howmanyTimesArrayisRoted(arr, n) {
    let start = 0;
    let end = n - 1;

    while (start <= end) {
        let mid = Math.floor((start + end) / 2);
        
        if (arr[start] <= arr[mid] && arr[mid] <= arr[end]) {
            return start;
        }
        
        if (arr[mid] <= arr[mid - 1] && arr[mid] <= arr[mid + 1]) {
            return mid;
        }
        
        if (arr[mid] <= arr[start]) {
            start = mid + 1;
        } else {
            end = mid - 1;
        }
    }
}

let arr = [4, 5, 6, 7, 1, 2, 3];
let n = arr.length;
let ans = howmanyTimesArrayisRoted(arr, n);

console.log(ans);
