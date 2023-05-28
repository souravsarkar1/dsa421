sealsByMatch = (n, arr) => {
    arr = arr.sort((a, b) => a - b);
    let cou = 0;
    for (let i = 0; i < n - 1; i++) {
        if (arr[i] === arr[i + 1]) {
            console.log(arr[i]);
            cou++;
            i++;
        }
    }
    console.log(cou);
}

let input = `9
10 20 20 10 10 30 50 10 20`

input = input.split('\n');
let tc = +input[0];
let arr = input[1].split(' ').map(Number);

sealsByMatch(tc, arr);