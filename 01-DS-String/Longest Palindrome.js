// find leargest palindrome length
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




// find leargeest palindrome
var longgest = ''

var isPalindromeCheck = function( str, low, high ) {
    return low >= high || ((str[low] == str[high]) && isPalindromeCheck(str, low + 1, high - 1) )
}

var isPalindrome = function( str ) {
    low = 0
    high = str.length - 1
    return isPalindromeCheck( str, low, high )
}

var checklength = function(str) {
    if ( longgest.length < str.length ) {
        longgest = str
    }
}


var longestPalindrome = function(s) {
    
    for (var i = 0; i < s.length; i++) {
        for (var j = 1; j <= s.length; j++) {
            if ( isPalindrome( s.slice(i,j) )) {
                checklength(s.slice(i,j))
            }
        }
        
        for (var j = s.length; j > 0; j--) {
             if ( isPalindrome( s.slice(i,j)) ) {
                checklength(s.slice(i,j))
            }
        }
    }
    
    return longgest
    // console.log(isPalindrome('AAA', 0, 2))
};