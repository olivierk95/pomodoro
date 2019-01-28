import React from 'react';
import "../css/timer.css";

const Timer = () => (
    <div className="timer">
        <div className="timer-time">
            <h2 id="timer_default">25:00</h2>
        </div>
        <div className="timer-buttons">
            <div className="button">
                <button className="top-corner"><h3>+</h3></button>
            </div>
            <div className="button">
                <button><h3>Start</h3></button>
            </div>
            <div className="button">
                <button className="bottom-corner"><h3>-</h3></button>
            </div>   
        </div>
    </div>
);

export default Timer;