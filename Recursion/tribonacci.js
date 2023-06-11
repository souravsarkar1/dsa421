function nthTribonacci(n){
    let a = 0,b=1,c=1,d;
    for (let i = 3; i <= n; i++) {
        d = a+b+c;
        a=b;
        b=c;
        c=d;
        
    }
    return c;
}


const a = nthTribonacci(5);
console.log(a);