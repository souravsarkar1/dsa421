function bubbleSort(arr){
    let n = arr.length;
    for(let i =0;i< n-1;i++){
        for(let j = 0;j< n-1-i;j++){
            if(arr[j]>arr[j+1]){
                [arr[j], arr[j+1]] = [arr[j+1], arr[j]];
            }
        }
    }
    console.log(arr);
}

bubbleSort([3,2,1,0,9,10,])