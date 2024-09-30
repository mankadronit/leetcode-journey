/**
 * @param {number[]} nums
 * @return {number}
 */

/** Solution
 *  Pattern: Array
 *  Time Complexity: O(n)
 *  Space Complexity: O(n)
 */

let longestConsecutive = function (nums) {
    const num_set = new Set(nums);
    let longest = 0;

    nums.forEach((num) => {
        if (!num_set.has(num - 1)) {
            let length = 1;

            while (num_set.has(num + length)) {
                length += 1;
            }

            longest = Math.max(longest, length);
        }
    });

    return longest;
};
