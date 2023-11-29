function quirckSort(arr){
    if(arr.length <= 1) return arr;
    let left = [];
    let right = [];
    let pivot = arr[0];
    for(let i =1;i<arr.length;i++){
        arr[i]<pivot ? left.push(arr[i]) : right.push(arr[i]); 
    }
    return [...quirckSort(left), pivot, ...quirckSort(right)];
}

let ans = quirckSort([3,2,1]);
console.log(ans);