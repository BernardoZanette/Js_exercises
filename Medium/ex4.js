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