/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {

    const rn_to_n = {'I': 1, 'V': 5, 'X': 10, 'L': 50, 'C': 100, 'D': 500, 'M': 1000}
    let sum = 0

    for(let i = 0; i < s.length; i++) {
        
        currentNum = rn_to_n[s[i]]
        
        if (currentNum < rn_to_n[s[i+1]]) sum -= currentNum
        else sum += currentNum
    
    }  
    
    return sum
};