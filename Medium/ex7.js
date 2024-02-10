// Given an integer array nums, return true if there exists a triple of indices 
// (i, j, k) such that i < j < k and nums[i] < nums[j] < nums[k]. If no such 
// indices exists, return false.
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var increasingTriplet = function(nums) {

    // best solution
    let firstNum = Infinity;
    let secoundNum = Infinity;

    for(let currentNum of nums){

        if(currentNum > secoundNum){
            return true;
        }

        if(currentNum > firstNum){
            secoundNum = currentNum;
        }else{
            firstNum = currentNum
        }
    }

    return false;

    // Ogre solution:
    // let uniqueNums = nums.filter((c, index) => {
    //     return nums.indexOf(c) === index;
    // });

    // if (uniqueNums.length < 3) return false

    // if (nums.length < 3) return false
    
    // for (let i = 0; i < nums.length-1; i++) {
        
    //     for (let j = i+1; j < nums.length-1; j++) {
            
    //         if (nums[i] < nums[j]) {
    //             let middle_num = nums[j]
    //             for (let k = j; k < nums.length; k++) {
    //                 if(middle_num < nums[k]) return true
    //             }
    //         }
                
    //     }
    // }

    // return false

};