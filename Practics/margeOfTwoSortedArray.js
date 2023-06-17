(function margeOfTwoSortdArray(n, arr1, m, arr2) {
    let arr = new Array(m + n).fill(0);
    let i = 0, j = 0, k = 0;
    while (i < n && j < m) {
        if (arr1[i] < arr2[j]) arr[k++] = arr1[i++];
        else arr[k++] = arr2[j++];
    }
    while (i < n) arr[k++] = arr1[i++];
    while (j < m) arr[k++] = arr2[j++];
    console.log(arr);
})(4, [1, 3, 4, 5], 4, [2, 4, 6, 8])