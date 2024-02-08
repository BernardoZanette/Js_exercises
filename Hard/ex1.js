// Given an array of strings words and a width maxWidth, format the text such that each line has exactly maxWidth characters and is fully (left and right) justified.

// You should pack your words in a greedy approach; that is, pack as many words as you can in each line. Pad extra spaces ' ' when necessary so that each line has exactly maxWidth characters.

// Extra spaces between words should be distributed as evenly as possible. If the number of spaces on a line does not divide evenly between words, the empty slots on the left will be assigned more spaces than the slots on the right.

// For the last line of text, it should be left-justified, and no extra space is inserted between words.
/**
 * @param {string[]} words
 * @param {number} maxWidth
 * @return {string[]}
 */
var fullJustify = function(words, maxWidth) {
    
    // connecting the words into phrases  
    for (let i = 0; i < words.length-1; i++) {
        if (words[i].length+words[i+1].length < maxWidth) {
            words[i] = words[i] + ' ' + words[i+1]
            words.splice(i+1, 1)
            i = -1
        }   
    }

    // Spacing

    for (let j = 0; j < words.length; j++) {

        // Already justified
        if (words[j].length == maxWidth) continue;

        // Last word and one word spacing
        if (words[j].split(' ').length == 1 || j == (words.length-1)) {
            while (words[j].length < maxWidth) {
                words[j] += ' '
            }
        }

        // Space between words
        else {
            
            let letters = words[j].split('')
            while (letters.length < maxWidth) {
                for (let letter_index = 0; letter_index < letters.length-1; letter_index++) {
                    if (letters[letter_index] == ' ' && letters.length < maxWidth && letters[letter_index+1] != ' ') {
                        letters[letter_index] += ' '
                        letters = letters.join('').split('')
                        letter_index++
                    }
                }
            }

            words[j] = letters.join('')
        }
    }
    
    return words

};
