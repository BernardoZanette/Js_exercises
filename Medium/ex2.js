/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {

    let low = 0
    let high = (numbers.length - 1)
    console.log('a: ' + high)
    
    while (low <= high) {
        console.log(high)
        let sum = numbers[low] + numbers[high]

        if (sum == target) return [(low+1), (high+1)];

        else if (sum < target) low++

        else high--

    }

    return {}

};

x = twoSum([2,7,11,15], 9)
console.log(x)