// Given a list of non-negative integers nums, arrange them such that they form the largest number and return it.

// Since the result may be very large, so you need to return a string instead of an integer.

 

var largestNumber = function(nums) {
  var numTOString = []
  var finalNum = ""
  
  for (x of nums) {
      numTOString.push(x.toString())
  }
  
  var sortedArray = numTOString.sort(function(x, y){
      return x + y > y + x ? -1 : 1
  })
  
  sortedArray.forEach(function(num) {
      finalNum = finalNum + num
  })
  
  finalNum = finalNum[0] == "0" ? "0" : finalNum;
  
  return finalNum
};