import React from "react";
import ReactDOM from "react-dom";
import Header from './components/Header';
import Timer from './components/Timer';
import './scss/app.scss';

class Application extends React.Component {
    render() {
        return <div>
            <Header/>
            <div className="container">
                <Timer/>
            </div>
        </div>
    }
}

let App = document.getElementById("app");

ReactDOM.render(<Application/>, App);