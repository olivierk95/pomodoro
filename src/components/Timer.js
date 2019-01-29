import React from 'react';
import "../css/timer.css";

const Timer = () => (
    <div className="timer">
        <div className="timer-time">
            <h2><span id="minutes">25</span>:<span id="seconds">00</span></h2>
        </div>
        <div className="timer-buttons">
            <div className="button">
                <button className="top-corner" id="add"><h3>+</h3></button>
            </div>
            <div className="button">
                <button><h3 id="start">Start</h3></button>
            </div>
            <div className="button">
                <button className="bottom-corner" id="remove"><h3>-</h3></button>
            </div>   
        </div>
    </div>
);


export default Timer;