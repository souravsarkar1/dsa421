(function maximumAreaOfHistogram(arr = []) {
    let n = arr.length;
    let left = [];
    let right = [];
    for (let i = 0; i < n; i++) {
        left[i] = i;
        while (left[i] > 0 && arr[i] <= arr[left[i] - 1]) {
            left[i] = left[left[i] - 1];
        }
    }
    for (let i = n - 1; i >= 0; i--) {
        right[i] = i;
        while (right[i] < n - 1 && arr[i] <= arr[right[i] + 1]) {
            right[i] = right[right[i] + 1];
        }
    }
    let ans = 0;
    for (let i = 0; i < n; i++) {
        const area = arr[i] * (right[i] - left[i] + 1);
        ans = Math.max(ans, area);
    }
    console.log(ans);
}
)([2, 1, 5, 6, 2, 3])