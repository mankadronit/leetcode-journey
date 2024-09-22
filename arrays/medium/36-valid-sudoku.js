/**
 * @param {character[][]} board
 * @return {boolean}
 */

/** Solution
 *  Pattern: Array
 *  Time Complexity: O(1)
 *  Space Complexity: O(1)
 */
function isValidSudoku(board) {
    const rmap = new Map();
    const cmap = new Map();
    const boxes = new Map();

    for (let row = 0; row < 9; row++) {
        for (let column = 0; column < 9; column++) {
            const char = board[row][column];

            if (!isNaN(char) && char !== ".") {
                const num = parseInt(char);

                // Check row
                if (!rmap.has(row)) rmap.set(row, new Set());
                const rowSet = rmap.get(row);
                if (rowSet.has(num)) return false;
                rowSet.add(num);

                // Check column
                if (!cmap.has(column)) cmap.set(column, new Set());
                const colSet = cmap.get(column);
                if (colSet.has(num)) return false;
                colSet.add(num);

                const boxIndex =
                    Math.floor(row / 3) * 3 + Math.floor(column / 3);
                if (!boxes.has(boxIndex)) boxes.set(boxIndex, new Set());
                const boxSet = boxes.get(boxIndex);
                if (boxSet.has(num)) return false;
                boxSet.add(num);
            }
        }
    }

    return true;
}
