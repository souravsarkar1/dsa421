function binarySearch(arr , target) {
    const n = arr.length;
    let start = 0;
    let end = n-1;
    while (start<=end) {
        let mid = Math.floor((start+end));
        if(arr[mid] === target) return mid+1;
        else if(arr[mid]<target) start = mid+1;
        else end = mid-1;
    }
    return -1;
}
function lenearSearch(arr,k){
    let n = arr.length;
    for(let i =0;i<n;i++){
        if(arr[i]===k) return i+1;
    }
    return -1;
}
let arr = [1,2,3,4,5];
let target = 5;
console.log(binarySearch(arr,target));