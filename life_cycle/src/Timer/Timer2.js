import { Component } from "react"


class Timer2 extends Component{

    constructor(){
        super();

        this.state = {
            isRunning : false,
            time: 0
        }
        this.timerInterval = null;
    }

    componentDidMount(){
        if(this.state.isRunning)
         this.startTimer()
    }

    componentDidUpdate(prevProps , prevState){
        if( prevState.isRunning != this.state.isRunning){
            if(this.state.isRunning){
                this.startTimer()
            }
        }
    }

    startTimer(){
        this.timerInterval = setInterval(() => {
            this.setState((prevState) => ({time : prevState.time+1}));
        }, 1000);
    }

    handleStart = () => {
        this.setState( {
            isRunning : true
        })
    }

    handleStop = () => {
        clearInterval(this.timerInterval);
    }

    render () {
        return(
            <>
                <h1>Timer : {this.state.time} </h1>
                <button onClick={this.handleStart}>Start</button>
                <button onClick={this.handleStop}>Stop</button>
            </>
        )
    }
}


export default Timer2;