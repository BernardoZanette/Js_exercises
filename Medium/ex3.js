// solution for small numbers
/**
 * @param {number} n
 * @return {number}
 */
var trailingZeroes = function(n) {

    let factorial = BigInt(1)
    for (let i = n; i > 0; i--) {
        factorial *= BigInt(i)
    }

    factorial = factorial.toString()
    let cont_zeros = 0

    for (let j = factorial.length-1; j >= 0; j--) {
        if (factorial[j] == 0) cont_zeros++
        else break
    }

    return cont_zeros

};