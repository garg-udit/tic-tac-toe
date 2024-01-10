import React, { useState, useRef } from 'react'
import './Board.css'
import circle_icon from '../Assets/circle.png'
import cross_icon from '../Assets/cross.png'


const Board = () => {

    let [count, setCount] = useState(0);
    let [lock, setLock] = useState(false);
    const [data, setData] = useState(["", "", "", "", "", "", "", "", ""])
    let titleRef = useRef(null);
    const [title, setTitle] = useState('Tic Tac Toe');


    const toggle = (e, num) => {
        if (lock) {
            return 0;
        }
        if (count % 2 === 0) {
            let test = data
            test[num] = 'x';
            setData(test)
            setCount(++count);
        }
        else {
            let test = data
            test[num] = 'o';
            setData(test)
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
        else if (data[2] === data[4] && data[4] === data[6] && data[6] !== "") {
            wins(data[6]);
        } else if (data.every(d => d !== "")) {
            setTitle("It's Tie")
        }
    }
    const wins = (winner) => {
        setLock(true);
        if (winner === 'x') {
            setTitle('Team A Won');
        }
        else if (winner === 'o') {
            setTitle('Team B Won');
        }
    }
    return (
        <div className='container'>
            <h1 className='title' ref={titleRef}> {title}</h1>
            <div className="board">
                <div className="row">
                    <div className="boxes" onClick={(e) => { data[0] === "" && toggle(e, 0) }}>
                        <img src={data[0] === "x" ? cross_icon : data[0] === 'o' ? circle_icon : ""} />

                    </div>
                    <div className="boxes" onClick={(e) => { data[1] === "" && toggle(e, 1) }}> <img src={data[1] === "x" ? cross_icon : data[1] === 'o' ? circle_icon : ""} /></div>
                    <div className="boxes" onClick={(e) => { data[2] === "" && toggle(e, 2) }}> <img src={data[2] === "x" ? cross_icon : data[2] === 'o' ? circle_icon : ""} /></div>
                </div>
                <div className="row">
                    <div className="boxes" onClick={(e) => { data[3] === "" && toggle(e, 3) }}> <img src={data[3] === "x" ? cross_icon : data[3] === 'o' ? circle_icon : ""} /></div>
                    <div className="boxes" onClick={(e) => { data[4] === "" && toggle(e, 4) }}> <img src={data[4] === "x" ? cross_icon : data[4] === 'o' ? circle_icon : ""} /></div>
                    <div className="boxes" onClick={(e) => { data[5] === "" && toggle(e, 5) }}> <img src={data[5] === "x" ? cross_icon : data[5] === 'o' ? circle_icon : ""} /></div>
                </div>
                <div className="row">
                    <div className="boxes" onClick={(e) => { data[6] === "" && toggle(e, 6) }}> <img src={data[6] === "x" ? cross_icon : data[6] === 'o' ? circle_icon : ""} /></div>
                    <div className="boxes" onClick={(e) => { data[7] === "" && toggle(e, 7) }}> <img src={data[7] === "x" ? cross_icon : data[7] === 'o' ? circle_icon : ""} /></div>
                    <div className="boxes" onClick={(e) => { data[8] === "" && toggle(e, 8) }}> <img src={data[8] === "x" ? cross_icon : data[8] === 'o' ? circle_icon : ""} /></div>
                </div>
            </div>
        </div>
    )
}

export default Board