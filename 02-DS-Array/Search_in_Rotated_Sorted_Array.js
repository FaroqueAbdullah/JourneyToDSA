// There is an integer array nums sorted in ascending order (with distinct values).

// Prior to being passed to your function, 
// nums is possibly rotated at an unknown pivot index k (1 <= k < nums.length) 
// such that the resulting array is [nums[k], nums[k+1], ..., nums[n-1], nums[0], nums[1], ..., nums[k-1]] (0-indexed). 
// For example, [0,1,2,4,5,6,7] might be rotated at pivot index 3 and become [4,5,6,7,0,1,2].


var search = function(nums, target) {
  let low = 0;
  let high = nums.length - 1;
  
  while(low <= high) {
      let midPoint = Math.floor((low + high) / 2);
      
      if (nums[midPoint] == target) {
          return midPoint
      }
        
      if (nums[low] <= nums[midPoint]) {
          if ( nums[low] <= target && target <= nums[midPoint] ) {
              high = midPoint - 1
          } else {
              low = midPoint + 1
          }
      } else {
          if ( nums[high] >= target && target >= nums[midPoint] ) {
              low = midPoint + 1
          } else {
              high = midPoint - 1
          }
      }
      
      
      
  }
  
  return -1
};