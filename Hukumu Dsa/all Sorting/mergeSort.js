function mergeSort(arr) {
    if (arr.length === 1) return arr;
    let mid = Math.floor(arr.length / 2);
    let left = arr.slice(0, mid);
    let right = arr.slice(mid, arr.length);
    return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
    let i = 0, j = 0;
    let n = left.length;
    let m = right.length;
    let res = [];
    while (i < n && j < m) {
        if (left[i] < right[j]) res.push(left[i++]);
        else res.push(right[j++]);
    }
    while (i < n) res.push(left[i++]);
    while (j < n) res.push(right[j++]);
    return res;
}

let ans = mergeSort([3, 2, 1]);
console.log(ans);