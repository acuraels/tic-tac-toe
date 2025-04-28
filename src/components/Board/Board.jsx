import React from 'react'
import { Square } from '../Square/Square.jsx'
import './Board.css'

export function Board({ squares, onClick, disabled }) {
    return (
        <div className="board">
            {squares.map((value, idx) => (
                <Square
                    key={idx}
                    value={value}
                    onClick={() => onClick(idx)}
                    disabled={disabled || value !== null}
                />
            ))}
        </div>
    )
}
