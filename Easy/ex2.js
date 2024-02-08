/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {

    if (x < 0) {
        return false
    }

    let x_str = x.toString()
    let x_reverse = x_str.split("").reverse().join("");
    return x_str === x_reversez
};