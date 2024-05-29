import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [clear , setClear] = useState(null)
  const startCount = () =>{
  setClear(setInterval(() => {
      setCount((count) => count+1);
    }, 1000))
  }

  const stopCounter = () => {
    console.log(clear);

    clearInterval(clear);
  }
  return (
    <>
      <h1>Counter With React</h1>
      <h4>Count : {count}</h4>
      <button onClick={startCount}>Start</button>
      <br />
      <button onClick={stopCounter}>Stop</button>
    </>
  )
}

export default App
