function threeSum(arr, n, k) {
    let l, r;
    let triplate = {};
    let ans = 0;
    for (let i = 0; i < n - 1; i++) {
        l = i + 1;
        r = n - 1;
        while (l < r) {
            let sum = arr[i] + arr[l] + arr[r];
            if (sum === k) {
                let trip = [arr[i], arr[l], arr[r]].sort((a, b) => a - b).join(" ");
                if (triplate[trip] === undefined) {
                    triplate[trip] = 1;
                    ans++;
                }
            }
            if (arr[l] > arr[r]) r--;
            else l++;
        }
    }
    console.log(ans);
    for(let key in triplate){
        console.log(key);
    }
}

threeSum([1, 2, 3, 4, 4, 4, 4], 7, 10);