function moveAllZeorsEndOfTheArray(arr) {
    let n = arr.length;
    let nonZeroCount = 0;
    for (let i = 0; i < n; i++) {
        if (arr[i] !== 0) {
            arr[nonZeroCount++] = arr[i];
        }
    }
    while(nonZeroCount < n){
        arr[nonZeroCount++] = 0;
    }
    console.log(arr);
}

moveAllZeorsEndOfTheArray([1,2,0,0,0,0,0,0,0,0,0,3,4,0])