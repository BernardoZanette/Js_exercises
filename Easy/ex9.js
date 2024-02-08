/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    
    let vector_s = s.split(' ')
    vector_s = vector_s.filter(a => a != '')

    return (vector_s[vector_s.length-1].length)

};