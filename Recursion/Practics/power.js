function powerRecursion(a,b){
    if(b===0) return 1;
    else return a * powerRecursion(a,b-1);
}

let ans = powerRecursion(2,3);
console.log(ans);