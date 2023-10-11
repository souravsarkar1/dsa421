function topKFrequntElement(arr, n,k) {
    let obj = {};
    for (let i = 0; i < n; i++) {
        obj[arr[i]] === undefined ? obj[arr[i]] = 1 : obj[arr[i]]++;
    }
    // console.log(obj);
    let bucket = [];
    for(let i = 0; i < n; i++) {
        bucket.push([]);
    }
    for(let key in obj) {
        bucket[obj[key]].push(key);
    }

    let sol = [];
    for(let i = bucket.length-1; i >=0; i--) {
        sol = [...sol, bucket[i]];
        if(sol.length === k ){
            console.log(sol.sort((a,b)=>a-b).join(" "));
            return;
        }
    }

}
let arr = [1, 1, 1, 2, 2, 3];
topKFrequntElement(arr, arr.length,2);