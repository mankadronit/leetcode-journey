/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */

/** Solution
 *  Pattern: Two Pointer
 *  Time Complexity: O(n)
 *  Space Complexity: O(n)
 */

let isAnagram = function (s, t) {
    // If length not equal, return false
    if (s.length !== t.length) {
        return false;
    }

    // Generate a word map for a string
    function generateMap(str) {
        let map = {};

        str.split("").forEach(function (c) {
            if (!(c in map)) {
                map[c] = 1;
            } else {
                map[c] += 1;
            }
        });

        return map;
    }

    let s_tokenized = generateMap(s);
    let t_tokenized = generateMap(t);

    // Return false if frequencies don't match
    for (let key in s_tokenized) {
        if (s_tokenized[key] != t_tokenized[key]) {
            return false;
        }
    }

    // Else, return true
    return true;
};
