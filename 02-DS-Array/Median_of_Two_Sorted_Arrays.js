var findMedianSortedArrays = function(nums1, nums2) {
    let x = 0;
    let y = 0;
    let z = 0;
    
    let finalArray = [];
    
    while( x < nums1.length && y < nums2.length ) {
        finalArray[z++] = nums1[x] < nums2[y] ? nums1[x++] : nums2[y++]
    }
    
    while(x < nums1.length) {
        finalArray[z++] = nums1[x++]
    }
    
    while(y < nums2.length) {
        finalArray[z++] = nums2[y++]
    }
    
    const isArrayMidOne = finalArray.length % 2

    const midPoint = Math.round(finalArray.length / 2) - 1

    
    if ( isArrayMidOne ) {
        return finalArray[midPoint]
    } else {
        return (finalArray[midPoint] + finalArray[midPoint + 1]) / 2
    }
};