/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    
    let k = 0
    for (let i = 0; i < (nums.length-1); i++) {
        
        if (nums[i] == nums[i+1]) {
            nums[i] = ""
            k--
        }
        if (nums[i] == "") {
            let auxiliar = nums[i+1]
            nums[i+1] = nums[i]
            nums[i] = auxiliar
            i = -1
            k--
        }
        k++

    }

    return (nums, k)

};

removeDuplicates([1,1,2])