import React from 'react';
import Modal from 'react-modal';
import "../css/timer.css";

let chrono;

const customStyles = {
    content : {
      top                   : '50%',
      left                  : '50%',
      right                 : 'auto',
      bottom                : 'auto',
      marginRight           : '-50%',
      transform             : 'translate(-50%, -50%)'
    }
  };

class Timer extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            minutes: 25,
            seconds: 0,
            started: false,
            chosenTime: "",
            modalIsOpen: false,
        }
        this.afterOpenModal = this.afterOpenModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
    };

    addMinute() {
        if (!this.state.started) {
            this.setState({
                minutes : this.state.minutes + 1,
            });
        }
    };

    removeMinute() {
        if (!this.state.started && this.state.minutes>0) {
            this.setState({
                minutes : this.state.minutes - 1,
            });
        }
    };

    startedTimer() {
        this.setState({
            started : !this.state.started,
            chosenTime : this.state.minutes,
        })
        
        
        if (!this.state.started) {
            
            chrono = setInterval(() => {
                
                if(this.state.minutes>0 && this.state.seconds==0) {
                    this.setState({
                        seconds: 59,
                        minutes: this.state.minutes -1,
                    });
                } else if(this.state.minutes>=0 && this.state.seconds>10) {
                    this.setState({
                        seconds: this.state.seconds -1,
                    });
                } else if (this.state.seconds>0) {
                    this.setState({
                        seconds: this.state.seconds -1,
                    });
                } else if (this.state.minutes==0 && this.state.seconds==0) {
                    this.setState({
                        modalIsOpen: true
                    });
                }
            }, 
            100);
        } else {
            clearInterval(chrono);
            this.setState({
                minutes : this.state.chosenTime,
                seconds : 0,
            })
        }
    };

    afterOpenModal() {
    // references are now sync'd and can be accessed.
    this.subtitle.style.color = '#f00';
    }

    closeModal() {
        this.setState({
            modalIsOpen: false,
            minutes : this.state.chosenTime,
            seconds : 0,
        });
    }

    render() {
        const seconds = (this.state.seconds < 10) ? "0" + this.state.seconds : this.state.seconds ;
        const minutes = (this.state.minutes < 10) ? "0" + this.state.minutes : this.state.minutes ;

        const started = this.state.started;
        let status;
        if (!started) {
            status = "Start";
        } else {
            status = "Reset";
        };

        return (
            <div>
                
                <div className="timer">
                    <div className="timer-time">
                        <h2>
                            <span id="minutes">{minutes}</span>
                            :
                            <span id="seconds">{seconds}</span>
                        </h2>
                    </div>
                    <div className="timer-buttons">
                        <div className="button">
                            <button 
                                className="top-corner" 
                                onClick={() => this.addMinute()}
                            >
                                <h3>+</h3>
                            </button>
                        </div>
                        <div className="button">
                            <button 
                                onClick={() => this.startedTimer()}
                            >
                                <h3 id="start">{status}</h3>
                            </button>
                        </div>
                        <div className="button">
                            <button 
                                className="bottom-corner" 
                                onClick={() => this.removeMinute()}
                            >
                                <h3>-</h3>
                            </button>
                        </div>   
                    </div>
                </div>

                <Modal
                isOpen={this.state.modalIsOpen}
                onAfterOpen={this.afterOpenModal}
                onRequestClose={this.closeModal}
                style={customStyles}
                contentLabel="Example Modal"
                >
                    <h2 ref={subtitle => this.subtitle = subtitle}>Good job!</h2>
                    <button onClick={this.closeModal}>Restart</button>
                    <button onClick={() => location.reload()}>Discard</button>

                </Modal>

            </div>
        )
    }
}


export default Timer;