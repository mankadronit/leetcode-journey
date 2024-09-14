/**
 * @param {string[]} strs
 * @return {string[][]}
 */

/** Solution
 *  Pattern: HashMap
 *  Time Complexity: O(n * klogk)
 *  Space Complexity: O(n * k)
 */

let groupAnagrams = function (strs) {
    const hmap = {};

    for (let index = 0; index < strs.length; index++) {
        const word = strs[index];

        const sortedWord = word.split("").sort().join("");

        if (hmap[sortedWord]) {
            hmap[sortedWord].push(index);
        } else {
            hmap[sortedWord] = [index];
        }
    }

    const ans = [];

    for (const indexes of Object.values(hmap)) {
        ans.push(indexes.map((index) => strs[index]));
    }

    return ans;
};
