/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

/** Solution
 *  Pattern: HashMap
 *  Time Complexity: O(n)
 *  Space Complexity: O(n)
 */

let twoSum = function (nums, target) {
    let map = {};

    for (let i = 0; i < nums.length; i++) {
        if (target - nums[i] in map) {
            return [map[target - nums[i]], i];
        }
        map[nums[i]] = i;
    }
};
