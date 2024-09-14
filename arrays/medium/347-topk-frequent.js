/* parram { number[] } nums
 * @param { number } k
 * * @return { number[]}
 * */

let topKFrequent = function (nums, k) {
    let map = {};
    let rmap = {};
    let freqArr = Array(nums.length).fill([]);
    let ans = [];

    nums.forEach((num) => {
        map[num] = map[num] || 0;
        map[num] += 1;
    });

    for (let key in map) {
        rmap[map[key]] = rmap[map[key]] || [];
        rmap[map[key]].push(Number(key));
    }

    for (let key in rmap) {
        freqArr[Number(key)] = rmap[key];
    }

    let count = k;
    let i = freqArr.length - 1;

    while (count > 0) {
        ans.push(...freqArr[i]);
        count -= freqArr[i].length;
        i -= 1;
    }
    return ans;
};
