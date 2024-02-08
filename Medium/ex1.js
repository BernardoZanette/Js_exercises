/*
Given an input string s, reverse the order of the words.

A word is defined as a sequence of non-space characters. The words in s will be separated by at least one space.

Return a string of the words in reverse order concatenated by a single space.

Note that s may contain leading or trailing spaces or multiple spaces between two words. The returned string should only have a single space separating the words. Do not include any extra spaces.
*/ 
/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {

    // let words = []

    // for (let i = 0; i < s.length; i++) {
    //     words[i] = ''
    // }
    // let j = 0

    // for (let i = 0; i < s.length; i++) {
    //     if (s[i] == ' ') {
    //         j++
    //         continue;
    //     }
    //     words[j] += s[i]
    // }
    // words = words.filter(a => a != '');
    // words = words.reverse().join(' ')

    // return words

    //  -- OR JUST: --
     return s.split(' ').reverse().filter(Boolean).join(' ');

};
