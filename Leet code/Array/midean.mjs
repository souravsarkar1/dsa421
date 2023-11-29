var findMedianSortedArrays = function(nums1, nums2) {
    const num = [...nums1,...nums2].sort((a,b)=>a-b);
    let len = num.length;
    if(len % 2 !== 0){
      let mid = Math.floor(len/2);
      return num[mid];
    }
};

let answer =  findMedianSortedArrays([1,3], [2]);
console.log(answer);