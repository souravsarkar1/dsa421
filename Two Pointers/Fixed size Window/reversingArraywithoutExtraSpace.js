const reverseArr = (arr,n)=>{
   let l = 0,r = n-1;
   while(l<r){
    swap(arr,l,r);
    l++;
    r--;
   }
   return arr;
}

function swap(arr,l,r){
    let temp = arr[l];
    arr[l] = arr[r];
    arr[r] = temp;
}

let ans = reverseArr([1,2,3,4,5,6],6);
console.log(ans);