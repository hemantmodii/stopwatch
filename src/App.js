import './App.css';
import { useState, useEffect } from 'react';

function App() {

  const [time, setTime] = useState(0);
  const [running, setRunning] = useState(false);

  useEffect((e) => {
    let interval;
    if(running) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 10);
      }, 10);
    } else if(!running) 
      {
        clearInterval(interval);
      }

      return () => clearInterval(interval);
  }, [running])



  return (
    <>
      <h1 className='px-10 '>01-Stopwatch</h1>
      <div>
        <span>{("0" + Math.floor((time / 60000) % 60)).slice(-2)}:</span>
        <span>{("0" + Math.floor((time / 1000) % 60)).slice(-2)}:</span>
        <span>{("0" + Math.floor((time / 10) % 100)).slice(-2)}</span>
      </div>
      <div>
        {running ? (<button onClick={() => { setRunning(false) }}>Stop</button>): (<button onClick={() => {
          setRunning(true)
        }}>Start</button>)}
        
        
        <button onClick={() => {
          setRunning(false);
          setTime(0);
        }}>Reset</button>
      </div>
    </>
  );
}

export default App;
