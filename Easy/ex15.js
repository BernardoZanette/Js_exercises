// Given two strings ransomNote and magazine, return true if ransomNote can be constructed by using the letters from magazine and false otherwise.

// Each letter in magazine can only be used once in ransomNote.
/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
    
    // let intersection_array = []
    // for (element_note of magazine) {
    //     for (element_magazine of ransomNote) {
    //         if (element_note == element_magazine) {
    //             intersection_array.push(element_magazine)
    //             break;
    //         }
    //     }
    // }

    const intersection_array = magazine.split('').filter(value => ransomNote.includes(value));

    ransomNote = ransomNote.split('')

    for (let i = 0; i < intersection_array.length; i++) {
        for (let j = 0; j < ransomNote.length; j++) {
            if (intersection_array[i] == ransomNote[j]) ransomNote.splice(j, 1)
        }
    }
    return ransomNote.length == 0
    
};
