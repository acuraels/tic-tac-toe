import React, { useState, useEffect } from 'react'
import { Board } from '../Board/Board'
import { calculateWinner, isBoardFull } from '../../utils/gameHelpers'
import { getComputerMove } from '../../utils/ai'
import { AnimationOverlay } from '../AnimationOverlay/AnimationOverlay'
import './Game.css'

import crossAni from '../../assets/cross.json'
import ovalAni from '../../assets/oval.json'
import gameAni from '../../assets/game.json'

export function Game() {
    const [board, setBoard] = useState(Array(9).fill(null))
    const [turn, setTurn] = useState('X')
    const [winner, setWinner] = useState(null)

    const handleClick = idx => {
        if (board[idx] || winner) return
        const b = [...board]; b[idx] = turn
        setBoard(b)
        setTurn(turn === 'X' ? 'O' : 'X')
    }

    useEffect(() => {
        if (winner || turn !== 'O') return
        const mv = getComputerMove(board)
        setTimeout(() => {
            const b = [...board]; b[mv] = 'O'
            setBoard(b); setTurn('X')
        }, 300)
    }, [board, turn, winner])

    useEffect(() => {
        const w = calculateWinner(board)
        if (w) setWinner(w)
        else if (isBoardFull(board)) setWinner('Draw')
    }, [board])

    const resetGame = () => {
        setBoard(Array(9).fill(null))
        setTurn('X')
        setWinner(null)
    }

    const animationData = winner === 'X' ? crossAni
        : winner === 'O' ? ovalAni
            : gameAni

    const message = winner === 'X' ? 'Ты выиграл!'
        : winner === 'O' ? 'Компьютер победил'
            : 'Ничья'

    return (
        <div className='bg'>
            <div className="game">
                <header className="game__header">
                    <a href="https://github.com/acuraels"
                        target="_blank" rel="noopener">
                        GitHub репозиторий автора
                    </a>
                </header>

                <h1 className="game__title">Крестики-нолики</h1>

                <Board
                    squares={board}
                    onClick={handleClick}
                    disabled={!!winner}
                />

                {!winner && (
                    <p className="game__status">
                        Ход: <span
                            className={turn === 'X'
                                ? 'status__player status__player--x'
                                : 'status__player status__player--o'
                            }
                        >
                            {turn === 'X' ? 'Игрок (X)' : 'Компьютер (O)'}
                        </span>
                    </p>
                )}

                {winner && (
                    <AnimationOverlay
                        animationData={animationData}
                        message={message}
                        onReset={resetGame}
                    />
                )}

                <footer className="game__footer">
                    Выполнил: Устинов Даниил Николаевич. Апрель 2025
                </footer>
            </div>
        </div>
    )
}
