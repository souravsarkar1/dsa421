(function histogramMax(n, arr) {
    let left = [];
    let right = [];
    for (let i = 0; i < n; i++) {
        left[i] = i;
        while (left[i] > 0 && arr[i] <= arr[left[i] - 1])
            left[i] = left[left[i] - 1];
    }
    for(let i = n-1;i>= 0;i--){
        right[i] = i;
        while(right[i] < n && arr[i]>=arr[right[i] +1])
            right[i] = right[right[i] +1];
    }
    let max = 0;
    for(let i =0;i<n;i++){
        let area = arr[i] * (right[i] - left[i] +1);
        max = Math.max(max,area);
    }
    console.log(max);
})(4,[2, 3, 4, 5])