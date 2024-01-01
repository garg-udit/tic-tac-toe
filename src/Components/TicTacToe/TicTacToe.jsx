import React, { useState, useRef } from 'react'
import './TicTacToe.css'
import circle_icon from '../Assets/circle.png'
import cross_icon from '../Assets/cross.png'

let data = ["", "", "", "", "", "", "", "", ""]

const TicTacToe = () => {

    let [count, setCount] = useState(0);
    let [lock, setLock] = useState(false);
    let titleRef = useRef(null);

    const toggle = (e, num) => {
        if (lock) {
            return 0;
        }
        if (count % 2 === 0) {
            e.target.innerHTML = `<img src = '${cross_icon}'>`;
            data[num] = 'x';
            setCount(++count);
        }
        else {
            e.target.innerHTML = `<img src = '${circle_icon}'>`;
            data[num] = 'o';
            setCount(++count);
        }
        check();
    }
    const check = () => {
        if (data[0] === data[1] && data[1] === data[2] && data[2] !== "") {
            wins(data[2]);
        }
        else if (data[3] === data[4] && data[4] === data[5] && data[5] !== "") {
            wins(data[5]);
        }
        else if (data[6] === data[7] && data[7] === data[8] && data[8] !== "") {
            wins(data[8]);
        }
        else if (data[0] === data[3] && data[3] === data[6] && data[6] !== "") {
            wins(data[6]);
        }
        else if (data[1] === data[4] && data[4] === data[7] && data[7] !== "") {
            wins(data[7]);
        }
        else if (data[2] === data[5] && data[5] === data[8] && data[8] !== "") {
            wins(data[8]);
        }
        else if (data[0] === data[4] && data[4] === data[8] && data[8] !== "") {
            wins(data[8]);
        }
        else if (data[2] === data[4] && data[4] === data[4] && data[6] !== "") {
            wins(data[6]);
        }
    }
    const wins = (winner) => {
        setLock(true);
        if (winner === 'x') {
            titleRef.current.innerHTML = `Team A Won`
        }
        else if (winner === 'o') {
            titleRef.current.innerHTML = `Team B Won`
        }
    }
    return (
        <div className='container'>
            <h1 className='title' ref={titleRef}> Tic Tac Toe</h1>
            <div className="board">
                <div className="row">
                    <div className="boxes" onClick={(e) => { toggle(e, 0) }}></div>
                    <div className="boxes" onClick={(e) => { toggle(e, 1) }}></div>
                    <div className="boxes" onClick={(e) => { toggle(e, 2) }}></div>
                </div>
                <div className="row">
                    <div className="boxes" onClick={(e) => { toggle(e, 3) }}></div>
                    <div className="boxes" onClick={(e) => { toggle(e, 4) }}></div>
                    <div className="boxes" onClick={(e) => { toggle(e, 5) }}></div>
                </div>
                <div className="row">
                    <div className="boxes" onClick={(e) => { toggle(e, 6) }}></div>
                    <div className="boxes" onClick={(e) => { toggle(e, 7) }}></div>
                    <div className="boxes" onClick={(e) => { toggle(e, 8) }}></div>
                </div>
            </div>
        </div>
    )
}

export default TicTacToe