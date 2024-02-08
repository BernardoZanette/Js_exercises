/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    
    nums.sort((a,b) => a-b)

    for (let i = 0; i < nums.length; i++) {
        
        if (nums[i] !== nums[i + 1]) {
            count = 0;
        } else {
            count++;
        }
        if (count >= (nums.length / 2)) {
            return nums[i];
        }

    }

};