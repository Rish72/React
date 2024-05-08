import { Component } from "react";

export default class Timer1 extends Component {
  constructor() {
    super();

    this.state = {
      time: 0,
    }

    this.timer = null;

  }
  static getDerivedStateFromProps() {
    console.log("GEt Derived Component");
    return null;
  }
  shouldComponentUpdate() {
    console.log("SHOULD COMPONENET UPDATE");
    console.log("------------------------------------------");
    return true;
  }


  render() {
    console.log("Render");

    return (
      <>
        <h1>timer : {new Date(this.state.time * 1000).toISOString().slice(11,19)}</h1>
        
      </>
    );
  }

  componentDidMount() {
    this.timer =setInterval(() => {
        this.setState((prev) => {
            return {
                time : prev.time+1,
            }
        })
    }, 1000);
  }

  componentDidUpdate() {
    console.log("Component did update");
    console.log("------------------------------------------");
  }
  getSnapshotBeforeUpdate() {
    console.log("snap shot before update");
    console.log("------------------------------------------");
    return null;
  }
}
