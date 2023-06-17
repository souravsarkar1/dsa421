function sumOfNumber(num) {
    let sum = 0;
    while (num > 0) {
      sum += num % 10;
      num = Math.floor(num / 10);
    }
    return sum;
  }
  
  function sumAccoringToSum(arr) {
    arr.sort((a, b) => {
      let sumA = sumOfNumber(a);
      let sumB = sumOfNumber(b);
      if (sumA === sumB) {
        return a - b;
      }
      return sumA - sumB;
    });
    return arr;
  }
  
  let input = `2
  5
  1 2 10 4 11
  2
  7 24`;
  
  input = input.trim().split('\n');
  let tc = +input[0];
  let line = 1;
  for (let i = 0; i < tc; i++) {
    let n = +input[line++];
    let arr = input[line++].trim().split(' ').map(Number);
    let ans = sumAccoringToSum(arr);
    console.log(ans);
  }
  