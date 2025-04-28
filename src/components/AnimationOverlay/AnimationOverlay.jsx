import React from 'react'
import Lottie from 'lottie-react'
import './AnimationOverlay.css'

export function AnimationOverlay({ animationData, message, onReset }) {
    return (
        <div className="overlay">
            <div className="overlay__content">
                <div className="overlay__animation">
                    <Lottie
                        animationData={animationData}
                        loop={false}
                    />
                </div>
                <p className="overlay__message">{message}</p>
                <button
                    className="overlay__button"
                    onClick={onReset}
                >
                    Заново
                </button>
            </div>
        </div>
    )
}
