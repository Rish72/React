import { useState } from "react";


function TimerComponent() {
  let [timer , setTimer] = useState(0)
  let [clear , setClear] = useState(null)

  const startTimer = () => {
    setClear(setInterval(() => {
      setTimer(timer++)
    }, 1000))
  }

  const stopTimer = () => {
    if(clear != null){
      clearInterval(clear)
      setClear(null);
    }
  }

    return (
      <>
        <div>
         <h1>{timer}</h1>
         <button onClick={startTimer}>Start</button>
         <button onClick={stopTimer}>Stop</button>
        </div>
      </>
    );
}


  export default TimerComponent;
  