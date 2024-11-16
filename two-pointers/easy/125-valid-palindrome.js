/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
    let filteredS = s.split("").filter((c) => c.match(/^[0-9a-zA-Z]+$/));
    let a = 0;
    let b = filteredS.length - 1;

    while (a <= b) {
        if (filteredS[a].toLowerCase() === filteredS[b].toLowerCase()) {
            a += 1;
            b -= 1;
        } else {
            return false;
        }
    }

    return true;
};
