// Write an algorithm to determine if a number n is happy.

// A happy number is a number defined by the following process:

// Starting with any positive integer, replace the number by the sum of the squares of its digits.
// Repeat the process until the number equals 1 (where it will stay), or it loops endlessly in a cycle which does not include 1.
// Those numbers for which this process ends in 1 are happy.
// Return true if n is a happy number, and false if not.
/**
 * @param {number} n
 * @return {boolean}
 */

const check_duplicate_in_array=(input_array)=>{
    const duplicates =input_array.filter((item, index) =>input_array.indexOf(item) !== index);
    return Array.from(new Set(duplicates));
}

var isHappy = function(n) {

    let square_value = 0
    let values_keeper = []

    while (square_value !== 1) {

        square_value = 0
        n = n.toString()
        
        for (let index_nums = 0; index_nums < n.length; index_nums++) {
            square_value += parseInt(n[index_nums])**2
        }

        values_keeper.push(square_value)
        n = square_value

        if (check_duplicate_in_array(values_keeper).length > 0) return false ;
    }

    return true

};


// better solution: 

/*var isHappy = function(n) {
    const visited = new Set();
    while (n != 1) {
        let sum = 0;
        while (n != 0) {
            const digit = (n % 10);
            sum += digit * digit; 
            n = Math.floor(n / 10);
        }
        if (visited.has(sum)) {
            return false;
        }
        visited.add(sum);
        n = sum;
    }
    return true;
};*/