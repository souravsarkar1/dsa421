function numberofWaysToClimbStairs(n){
    if(n===0) return 1;
    if(n<0) return 0;
    return numberofWaysToClimbStairs(n-1) +numberofWaysToClimbStairs(n-3) +numberofWaysToClimbStairs(n-5);
}
let a = numberofWaysToClimbStairs(5);
console.log(a);