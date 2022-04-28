// Given an array of integers nums sorted in non-decreasing order, find the starting and ending position of a given target value.

// If target is not found in the array, return [-1, -1].

// You must write an algorithm with O(log n) runtime complexity.

 var findLowestHeight = function(midPoint, nums) {
  lowPoint = midPoint
  highPoint = midPoint
  
  while ( nums[lowPoint] == nums[midPoint]  ) {
      lowPoint = lowPoint - 1
  }
  
  while ( nums[highPoint] == nums[midPoint]  ) {
      
      highPoint = highPoint + 1
  }
  
  return [lowPoint + 1, highPoint - 1]
}


var searchRange = function(nums, target) {
  low = 0
  high = nums.length - 1
  
  fisrtPoint = -1
  lastPoint = -1
  
  while ( low <= high ) {
      
      midPoint = Math.round((low + high) / 2)
      
      if (nums[midPoint] == target) {
          return findLowestHeight( midPoint, nums )
      }
      
      if ( nums[midPoint] > target ) {
          high = midPoint - 1
      } else {
          low = midPoint + 1
      }
  }
  
  return [-1, -1]
};