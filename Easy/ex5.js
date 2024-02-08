/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {

    let nums_length = nums.length 
    let cont = 0
    nums.forEach((num,index) => {
        if (num == val) {
            nums.splice(index,1)
            cont++
        }
    })

    k = nums_length-cont

    return k
    
};
