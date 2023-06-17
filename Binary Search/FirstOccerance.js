function firstOccurrence(arr, target) {
    let n = arr.length;
    let start = 0;
    let end = n - 1;
    let res = -1;
    while (start <= end) {
        let mid = Math.floor((start + end) / 2);
        if (arr[mid] === target) {
            res = mid;
            end = mid - 1;
        } else if (arr[mid] < target) {
            start = mid + 1;
        } else {
            end = mid - 1;
        }
    }
    return res;
}

let arr = [4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4];
let target = 4;

let ans = firstOccurrence(arr, target);

console.log(ans);
