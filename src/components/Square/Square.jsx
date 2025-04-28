// src/components/Square.jsx
import React from 'react'
import './Square.css'

export function Square({ value, onClick, disabled }) {
    return (
        <button
            className="square"
            onClick={onClick}
            disabled={disabled}
        >
            {value}
        </button>
    )
}
