function fibonacci(n){
    let a = 0 ,b = 1 ,c;
    for(let i = 2 ;i<=n;i++){
        c = a+b;
        a = b;
        b = c;
    }
   return b;
}

const a = fibonacci(4);
console.log(a);