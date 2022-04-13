var checkStringInArray = function(alf, i, strs) {
    
    for (str of strs) {
        
        if ( str[i] != alf ) {
            return false
        }
    }
    
    return true
}

var longestCommonPrefix = function(strs) {
    
    var smallest = ''
    var common = ''
    
    for (i in strs) {
        if (!smallest || smallest.length > strs[i].length) {
            smallest = strs[i]
        } 
    }
    
    for (i in smallest) {
        
        var subStr = smallest[i]
        
        if ( !checkStringInArray(subStr, i, strs) ) {
            break
        }
        
        common = common + subStr;
    }
    
    return common
};