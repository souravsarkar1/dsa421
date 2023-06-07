function maximumConsecutiveOnes(arr){
    let maxCount = 0;
    let currCount = 0;
    for(let i =0;i<arr.length;i++){
        if(arr[i]===1){
            currCount++;
        }
        else{
            maxCount = Math.max(maxCount,currCount);
            currCount = 0;
        }
    }
    maxCount = Math.max(maxCount,currCount);
    return maxCount;
}

let arr = [1,1,0,1,1,1];
let ans = maximumConsecutiveOnes(arr);
console.log(ans);