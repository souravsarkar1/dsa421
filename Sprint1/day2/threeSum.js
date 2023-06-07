
function threeSum(arr, n) {
    let obj = {};
    let op = 0;
    arr.sort((a, b) => a - b);
    let l, r;
    for (let i = 0; i < n; i++) {
        l = i + 1;
        r = n - 1;
        arr.sort((a,b)=>a-b);
        while (l < r) {
            let sum = arr[i] + arr[l] + arr[r];
            if(sum===0){
                let res = [arr[i],arr[l],arr[r]].sort((a,b)=>a-b);
                let key = res.join(' ');
                if(!obj[key]){
                    obj[key]= res;
                    op++;
                }
            }
            if(sum<0){
                l++;
            }
            else{
                r--;
            }
        }
    }
    console.log(op);
    for(let key in obj){
        console.log(obj[key].join(' '));
    }

}

let input = `1
6
-1 0 1 2 -1 -4`

input = input.split('\n');
let line = 0;
let tc = +input[line++];
for(let i =0;i<tc;i++){
    let n = +input[line++];
    let arr = input[line++].split(' ').map(Number);
    threeSum(arr,n);
}