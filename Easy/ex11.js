// Write a function to find the longest common prefix string amongst an array of strings.

// If there is no common prefix, return an empty string "".
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    
    var prefix = strs[0].split('')

    for (let i = 0; i < strs.length; i++) {

        if (strs[i].indexOf(prefix.join('')) != 0) {
            prefix.pop()
            i = 0
        }
        
    }
    prefix = prefix.join('')

    return prefix.length == 0 ? "" : prefix

};

x = longestCommonPrefix(["flower","flow","flight"])
console.log(x)