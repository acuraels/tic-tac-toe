/**
 * Проверяет, есть ли победитель на доске.
 * @param {Array<'X'|'O'|null>} squares — массив из 9 элементов
 * @returns {'X'|'O'|null} — кто выиграл, или null
 */
export function calculateWinner(squares) {
    const lines = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8],
        [0, 3, 6], [1, 4, 7], [2, 5, 8],
        [0, 4, 8], [2, 4, 6]
    ];

    for (let [a, b, c] of lines) {
        if (
            squares[a] &&
            squares[a] === squares[b] &&
            squares[a] === squares[c]
        ) {
            return squares[a];
        }
    }
    return null;
}

/**
 * Проверяет, заполнена ли доска полностью.
 * @param {Array<'X'|'O'|null>} squares
 * @returns {boolean}
 */
export function isBoardFull(squares) {
    return squares.every(cell => cell !== null);
}
