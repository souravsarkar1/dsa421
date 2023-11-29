function subSet(arr,subsetTillNow,ind){
    if(arr.length === ind){
        console.log(subsetTillNow);
        return;
    } 
    subSet(arr,subsetTillNow,ind+1);
    subSet(arr,[...subsetTillNow,arr[ind]],ind+1);
}

subSet([1,2,3],[],0);