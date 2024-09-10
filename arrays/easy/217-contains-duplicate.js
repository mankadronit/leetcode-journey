/**
 * @param {number[]} nums
 * @return {boolean}
 */

/** Solution
 *  Pattern: HashSet
 *  Time Complexity: O(n)
 *  Space Complexity: O(n)
 */

let containsDuplicate = function (nums) {
    let set = new Set();

    for (let i = 0; i < nums.length; i++) {
        if (set.has(nums[i])) {
            return true;
        }
        set.add(nums[i]);
    }

    return false;
};
