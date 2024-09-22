/**
 * @param {number[]} nums
 * @return {number[]}
 */

/** Solution
 *  Pattern: Array
 *  Time Complexity: O(n)
 *  Space Complexity: O(1)
 */

let productExceptSelf = function (nums) {
    let prefixProduct = 1;
    let suffixProduct = 1;

    const result = Array(nums.length).fill(1);


    for (let i = 0; i < nums.length; i++) {
        result[i] *= prefixProduct;
        prefixProduct *= nums[i];
    }

    for (let i = nums.length - 1; i > -1; i--) {
        result[i] *= suffixProduct;
        suffixProduct *= nums[i];
    }

    return result;
};
