function decimalToBinary(n){
    if (n===1) {
        console.log(1);
        return;
    } else {
        decimalToBinary(Math.floor(n/2));
        console.log(n%2);
    }
}

decimalToBinary(14);