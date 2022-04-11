var longestPalindrome = function(s) {
    var savedData = {}
    var longestPalindrome = 0
    var singlenumber = 0
    
    for (i in s) {
        if ( savedData[s[i]] ) {
            savedData[s[i]] = savedData[s[i]] + 1
        } else {
            savedData[s[i]] = 1
        }
    }
    
    for (i in savedData) {
        if ( savedData[i] % 2 == 0 ) {
            longestPalindrome = longestPalindrome + savedData[i]
        } else {
            if ( savedData[i] > 1 ) {
                longestPalindrome = longestPalindrome + savedData[i] - 1
                singlenumber = 1
            } else {
                singlenumber = 1
            }
        }
    }
    
    return longestPalindrome + singlenumber
};