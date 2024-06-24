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
      <h1 className='text-5xl font-semibold py-4'>Stopwatch</h1>
      <div className='w-[200px] text-3xl font-semibold my-8 bg-[#073207] text-white text-center rounded-xl justify-center align-center py-4'>
        <span className='mx-1'>{("0" + Math.floor((time / 60000) % 60)).slice(-2)}</span>
        <span className='justify-center align-top'>:</span>        
        <span className='mx-1'>{("0" + Math.floor((time / 1000) % 60)).slice(-2)}</span>
          <span className='justify-center align-top'>:</span>
        <span className='mx-1'>{("0" + Math.floor((time / 10) % 100)).slice(-2)}</span>
      </div>
      <div className='w-[200px] flex flex-row justify-between px-4 mt-10'>
        {running ? (
          <button className='border rounded-lg px-2 py-2.5 shadow-lg bg-red-600 text-white' 
          onClick={() => { setRunning(false) }}
          >
            Stop
          </button>
        ): (
          <button 
          className='border rounded-lg px-2 py-2.5 shadow-lg bg-green-100'
          onClick={() => {
          setRunning(true)}}
          >
            Start
          </button>
        )
        }
        
        
        <button className='border rounded-lg px-2 py-2.5 bg-blue-100 text-gray-600 shadow-lg' onClick={() => {
          setRunning(false);
          setTime(0);
        }}>Reset</button>
      </div>
    </div>
  );
}

export default App;
