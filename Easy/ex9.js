// Given a string s consisting of words and spaces, return the length of the last word in the string.

// A word is a maximal 
// substring
//  consisting of non-space characters only.
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    
    let vector_s = s.split(' ')
    vector_s = vector_s.filter(a => a != '')

    return (vector_s[vector_s.length-1].length)

};