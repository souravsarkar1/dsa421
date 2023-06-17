function floorValue(arr, key) {
    let n = arr.length;
    let start = 0;
    let end = n - 1;
    let floor = -1;
  
    while (start <= end) {
      let mid = Math.floor((start + end) / 2);
  
      if (arr[mid] === key) {
        // Found an exact match, return the index
        return mid;
      } else if (arr[mid] < key) {
        // Update floor and search the right half
        floor = mid;
        start = mid + 1;
      } else {
        // Search the left half
        end = mid - 1;
      }
    }
  
    return floor; // Return the index of the floor value
  }
  
  let arr = [1, 4, 6, 8, 10];
  let key = 7;
  
  let floorIndex = floorValue(arr, key);
  
  if (floorIndex !== -1) {
    let floorValue = arr[floorIndex];
    console.log("Floor value:", floorValue);
  } else {
    console.log("No floor value found.");
  }
  