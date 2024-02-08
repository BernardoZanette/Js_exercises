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

    //  OU SOMENTE:
     return s.split(' ').reverse().filter(Boolean).join(' ');

};
