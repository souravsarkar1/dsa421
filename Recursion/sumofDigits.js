function sum(n){
    if (n===0) {
        return 0;
    } else {
        return (n%10) + sum(Math.floor(n/10));
    }
}

const a = sum(12345);
console.log(a);