function findThreeSum(arr, target) {
    arr.sort((a, b) => a - b);
    let l, r;
    let obj = {};
    // let ans = 0;
    for (let i = 0; i < arr.length - 1; i++) {
        l = i + 1;
        r = arr.length - 1;
        while (l < r) {
            let sum = arr[i] + arr[r] + arr[l];
            if (sum === target) {
                let triplate = [arr[i], arr[r], arr[l]].sort((a, b) => a - b).join(" ");
                if (!obj[target]) {
                    obj[triplate] = 1;
                    // ans++;
                }

            }
            if (sum <= target) {
                l++;
            }
            else {
                r--;
            }
        }
    }
    let ans = Object.keys(obj);
    console.log(ans.length);
    for(let a of ans) {
        console.log(a.toString());
    }
}

findThreeSum([-1, 0, 1, 2, -1, -4], 0)