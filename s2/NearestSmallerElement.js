function NearestSmallerElement(n, arr) {
    let left = leftIndex(n, arr);
    let right = rightIndex(n, arr);
    let ans = [];
    for (let i = 0; i < n; i++) {
      if (left[i] === -1 && right[i] === -1) {
        ans.push(-1);
      } else if (right[i] === -1) {
        ans.push(arr[left[i]]);
      } else if (left[i] === -1) {
        ans.push(arr[right[i]]);
      } else {
        let l = Math.abs(i - left[i]);
        let r = Math.abs(i - right[i]);
        if (l < r) {
          ans.push(arr[left[i]]);
        } else {
          ans.push(arr[right[i]]);
        }
      }
    }
    return ans.join(' ');
  }
  
  function leftIndex(n, arr) {
    let stack = [];
    let ans = [];
    for (let i = 0; i < n; i++) {
      while (stack.length !== 0 && arr[i] <= arr[stack[stack.length - 1]]) {
        stack.pop();
      }
      if (stack.length === 0) {
        ans[i] = -1;
      } else {
        ans[i] = stack[stack.length - 1];
      }
      stack.push(i);
    }
    return ans;
  }
  
  function rightIndex(n, arr) {
    let stack = [];
    let ans = [];
    for (let i = n - 1; i >= 0; i--) {
      while (stack.length !== 0 && arr[i] <= arr[stack[stack.length - 1]]) {
        stack.pop();
      }
      if (stack.length === 0) {
        ans[i] = -1;
      } else {
        ans[i] = stack[stack.length - 1];
      }
      stack.push(i);
    }
    return ans;
  }
  
  let ip = `1
  8
  39 27 11 4 24 32 32 1`;
  ip = ip.split('\n');
  let line = 0;
  let tc = +ip[line++];
  for (let i = 0; i < tc; i++) {
    let n = +ip[line++];
    let arr = ip[line++].split(' ').map(Number);
    console.log(NearestSmallerElement(n, arr));
  }
  