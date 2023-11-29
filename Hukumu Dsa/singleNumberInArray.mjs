function singleNumber(arr) {
    let n = arr.length;
    let obj = {};
    for (let i = 0; i < n; i++) {
        if (obj[arr[i]] === undefined) {
            obj[arr[i]] = 1;
        }
        else {
            obj[arr[i]]++;
        }
    }
    for (let key in obj) {
        if (obj[key] === 1) {
            console.log(key);
            return;
        }
    }
}

singleNumber([1, 2, 2, 3, 3, 4, 4, 5, 5]);
