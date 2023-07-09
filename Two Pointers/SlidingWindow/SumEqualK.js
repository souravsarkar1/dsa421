const sumEqualToK = (array, k) => {

    let windowSum = 0, high = 0;
    for (let low = 0; low < array.length; low++) {

        while (windowSum < k && high < array.length) {
            windowSum = windowSum + arr[high];
            high++;
        }
        if (windowSum === k) {
            return true;
        }
        windowSum = windowSum - arr[low];

    }
    return false;
}

let arr = [1, 4, 20, 3, 10, 5];
let k = 33;

let ans = sumEqualToK(arr, k);
console.log(ans);

document.querySelector('body').innerText = ans;