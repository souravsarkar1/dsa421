
function sumOfNaturalNumberes(n) {

    if (n === 0 || n < 0) return 0;
    else {
        return n + sumOfNaturalNumberes(n - 1);
    }

}

let a = sumOfNaturalNumberes(4);
console.log(a);