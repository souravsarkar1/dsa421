function containerWithMostWater(arr) {
    let n = arr.length;
    let water = -Infinity;
    let l = 0;
    let r = n - 1;
    while (r > l) {
        let w = Math.abs(l-r);
        let h = Math.max(arr[l], arr[r]);
        let currentWater = w * h;
        water = Math.max(water, currentWater);
        if(arr[l]> arr[r]) r--;
        else l++;
    }
    console.log(water);
}

containerWithMostWater([5,5,5,5,5,5,5]);