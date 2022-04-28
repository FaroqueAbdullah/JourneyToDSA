// You are given an integer array height of length n. There are n vertical lines drawn such that the two endpoints of the ith line are (i, 0) and (i, height[i]).

// Find two lines that together with the x-axis form a container, such that the container contains the most water.

// Return the maximum amount of water a container can store.


var maxArea = function(height) {
    totalMaxArea = 0;
    startPoint = 0;
    endPoint = height.length -1
    
    while ( startPoint < endPoint ) {
        totalMaxArea = Math.max(totalMaxArea, ( Math.min(height[startPoint], height[endPoint]) * (endPoint - startPoint) ) )
        
        if (height[startPoint] < height[endPoint]) {
            startPoint = startPoint + 1
        } else {
            endPoint = endPoint - 1
        }
    }
    
    return totalMaxArea;
};