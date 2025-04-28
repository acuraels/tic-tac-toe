import { calculateWinner } from './gameHelpers'

/**
 * Оценка позиции для компьютера ('O'):
 * +10, если O выиграл; -10, если X выиграл; 0 — ничья или ещё нет результата.
 */
function evaluate(board) {
    const winner = calculateWinner(board)
    if (winner === 'O') return +10
    if (winner === 'X') return -10
    return 0
}

/**
 * Minimax-алгоритм (без учёта глубины, для простоты).
 * @param {Array<'X'|'O'|null>} board
 * @param {boolean} isMaximizing — true, когда ход O.
 * @returns {number} — лучший счёт для текущего игрока.
 */
function minimax(board, isMaximizing) {
    const score = evaluate(board)
    // Если конец игры — возвращаем оценку
    if (score === 10 || score === -10 || board.every(cell => cell !== null)) {
        return score
    }

    if (isMaximizing) {
        let best = -Infinity
        board.forEach((cell, i) => {
            if (!cell) {
                board[i] = 'O'
                best = Math.max(best, minimax(board, false))
                board[i] = null
            }
        })
        return best
    } else {
        let best = +Infinity
        board.forEach((cell, i) => {
            if (!cell) {
                board[i] = 'X'
                best = Math.min(best, minimax(board, true))
                board[i] = null
            }
        })
        return best
    }
}

/**
 * Возвращает индекс хода компьютера.
 * С вероятностью 20% сделает случайный ход (чтобы его можно было обыграть),
 * иначе — оптимальный по Minimax.
 */
export function getComputerMove(board) {
    const empties = board
        .map((v, i) => (v === null ? i : -1))
        .filter(i => i !== -1)

    // шанс «ошибиться»
    if (Math.random() < 0.2) {
        return empties[Math.floor(Math.random() * empties.length)]
    }

    // ищем оптимальный ход
    let bestMove = empties[0]
    let bestScore = -Infinity
    empties.forEach(i => {
        board[i] = 'O'
        const score = minimax(board, false)
        board[i] = null
        if (score > bestScore) {
            bestScore = score
            bestMove = i
        }
    })

    return bestMove
}
