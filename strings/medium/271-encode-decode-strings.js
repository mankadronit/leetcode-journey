/**
 * Encodes a list of strings to a single string.
 *
 * @param {string[]} strs
 * @return {string}
 */

/** Solution
 *  Pattern: String Manipulation
 *  Time Complexity: O(k)
 *  Space Complexity: O(k+n)
 */

let encode = function (strs) {
    return strs.join("|:)|");
};

/**
 * Decodes a single string to a list of strings.
 *
 * @param {string} s
 * @return {string[]}
 */
let decode = function (s) {
    return s.split("|:)|");
};
