function find3Numbers(A, arr_size, sum)
{
    let l, r;
  
    /* Sort the elements */
    A.sort((a,b) => a-b);
    let count = 0 ;
    let ans = [];
    /* Now fix the first element one 
    by one and find the
    other two elements */
    for (let i = 0; i < arr_size - 2; i++) {
  
        // To find the other two
        // elements, start two index
        // variables from two corners of 
        // the array and move
        // them toward each other
          
        // index of the first element in the
        l = i + 1; 
          
        // remaining elements
          
       // index of the last element
        r = arr_size - 1; 
        while (l < r) {
            if (A[i] + A[l] + A[r] == sum) 
            {
                
             return  ` ${count++}   ${ans.push(`${arr[i]} ${arr[l]} ${arr[r]}`)}`;
               // return true;
            }
            else if (A[i] + A[l] + A[r] < sum)
                l++;
            else // A[i] + A[l] + A[r] > sum
                r--;
        }
    }
  
    // If we reach here, then no triplet was found
//   console.log(count);
//   console.log(ans);
}
let str = '-1 0 1 2 -1 -4';
let arr = str.split(' ').map(Number);
let n = arr.length;
let sum = 0;
console.log(find3Numbers(arr,n,sum));;
/**
 * 1
6
-1 0 1 2 -1 -4
 */