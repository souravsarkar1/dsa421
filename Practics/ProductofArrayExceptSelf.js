function  ProductofArrayExceptSelf(n,arr){
    let arr1 = new Array(n).fill(1);
    let arr2 = new Array(n).fill(1);
    for(let i =1;i<n;i++){
        arr1[i] = arr1[i-1] * arr[i-1]
    }
    for(let i = n-2;i>=0;i--){
        arr2[i] = arr2[i+1] * arr[i+1];
    }
    // console.log(arr1);
    // console.log(arr2);
    let res  = [];
    for(let i =0;i<n;i++){
        res[i] = arr1[i] * arr2[i];
    }
    console.log(res.join(" "));
}

ProductofArrayExceptSelf([1,2,3,4].length,[1,2,3,4])