// You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.

// You may assume the two numbers do not contain any leading zero, except the number 0 itself.
var addTwoNumbers = function(l1, l2) {

    let result = []

    let big_vector = l1.length >= l2.length ? l1 : l2
    let minor_vector = l1.length < l2.length ? l1 : l2

    for (let index = 0; index < big_vector.length; index++) {

        if (minor_vector[index] == undefined) minor_vector[index] = 0

        result[index] = minor_vector[index] + big_vector[index]

        if (result[index] >= 10) {
            result[index] = result[index]%10
            minor_vector[index+1] = 1
        } 
    }
    
    return result
};

addTwoNumbers([3,2,9,4], [3,4,5])