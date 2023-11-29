function productsofArrayElelmentExceptItSelf(arr,n){
    let left = [];
    let right = [];
    let ans = [];
    left[0] = 1;
    for(let i =1;i<n;i++){
        left[i] = left[i-1] * arr[i-1];
    }
    right[n-1] = 1;
    for(let i = n-2;i>=0;i--){
        right[i] = right[i+1] * arr[i+1];
    }
    for(let i =0;i<n;i++){
        ans[i] = left[i] * right[i];
    }
    console.log(ans);
}

productsofArrayElelmentExceptItSelf([1,2,3,4,],4);