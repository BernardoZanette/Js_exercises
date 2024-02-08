/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {

    let subsequence = 0

    if (s.length > t.length) return false;
    for (let i = 0; i < t.length; i++) {

        if (t[i] == s[subsequence]) subsequence++
    
    }

    return subsequence === s.length

    console.log(t)
};

isSubsequence('ace', 'abcde');
// isSubsequence("axc", "ahbgdc");