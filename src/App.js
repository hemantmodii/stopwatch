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
    <div className='py-8 flex flex-col items-center justify-center'>
      <h1 className='text-2xl font-semibold py-4'>01-Stopwatch</h1>
      <div className='text-xl font-semibold'>
        <span>{("0" + Math.floor((time / 60000) % 60)).slice(-2)}:</span>
        <span>{("0" + Math.floor((time / 1000) % 60)).slice(-2)}:</span>
        <span>{("0" + Math.floor((time / 10) % 100)).slice(-2)}</span>
      </div>
      <div className='w-1/3 flex flex-row justify-between'>
        {running ? (
          <button className='border rounded-lg px-2 py-2.5' 
          onClick={() => { setRunning(false) }}
          >
            Stop
          </button>
        ): (
          <button 
          className='border rounded-lg px-2 py-2.5'
          onClick={() => {
          setRunning(true)}}
          >
            Start
          </button>
        )
        }
        
        
        <button className='border rounded-lg px-2 py-2.5 bg-zinc-600 text-white' onClick={() => {
          setRunning(false);
          setTime(0);
        }}>Reset</button>
      </div>
    </div>
  );
}

export default App;
