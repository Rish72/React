import { Component } from "react";
import Timer2 from "./Timer/Timer2";
import Timer1 from "./Timer/Timer1";

class App extends Component {
  constructor(props) {
    super();
    this.state = {
      timerOn: false,
    };
  }

  handleTimerOn = () => {
    this.setState((prev) => ({ timerOn: !prev.timerOn }));
  };

  render() {
    return (
      <>
        <Timer1  timerOn={this.state.timerOn} />

        <button onClick={this.handleTimerOn}> {this.state.timerOn ? "STOP" : "Start"}</button> 
      </>
    );
  }
}
export default App;
