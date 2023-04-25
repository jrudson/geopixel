import React, { useState } from 'react';
import './ball.css';

function Ball() {

    // Estado para armazenar a posição da bola
    const [position, setPosition] = useState({ x: 0, y: 0 });

    // Lógica para gerar a posição da bola aleatóriamente e que ela não possa sair do campo estimado
    const handleMouseOver = () => {
        const ball = document.querySelector('.ball');
        const maxX = ball.parentElement.clientWidth - ball.clientWidth;
        const maxY = ball.parentElement.clientHeight - ball.clientHeight;
        const randomX = Math.floor(Math.random() * maxX);
        const randomY = Math.floor(Math.random() * maxY);
        setPosition({ x: randomX, y: randomY });
    };

    return (
        <div className='containerBall'>
            <div
                className="ball"
                onMouseOver={handleMouseOver}
                style={{ top: `${position.y}px`, left: `${position.x}px` }}
            />
        </div>
    );
}

export default Ball;