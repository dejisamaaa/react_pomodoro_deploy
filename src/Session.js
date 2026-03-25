import { useRef, useState } from 'react';

const Session = ({ sessTimer, setSessTimer, brTime, setBrTime }) => {
  const [count, setCount] = useState('00');
  const [sessionEnd, setSessionEnd] = useState(false);
  const [startStop, setStartStop] = useState(true);
  const clearId = useRef(null);

  const handleStartStop = () => {
    if (startStop && sessTimer) {
      setStartStop(false);
      setCount(59);
      clearId.current = setInterval(() => {
        setCount(c => c - 1);
      }, 1000);
    } else {
      clearInterval(clearId.current);
      setStartStop(true);
    }
  }

  const handleReset = () => {
    clearInterval(clearId.current);
    console.log(startStop);
    setStartStop(true);
    setSessTimer(25);
    setBrTime(5);
    setCount(59);
    setSessionEnd(false)
  }

  const countLog = () => {
    if (!count) {
      redSess();
      resetCount()
      sessLog();
      if (sessionEnd) {
        redBr();
        brLog()
      }
    }
  }

  const resetCount = () => {
    setCount(59);
  }

  const redSess = () => {
    setSessTimer(s => s - 1)
  }

  const redBr = () => {
    setBrTime(b => b - 1);
  }

  const brLog = () => {
    console.log(brTime);
    if (!brTime) {
      setBrTime(0)
      setCount('00');
      setSessionEnd(false);
      clearInterval(clearId.current)
    }
  }

  const sessLog = () => {
    if (!sessTimer && !count) {
      setSessTimer(0);
      setSessionEnd(true);
    }
  }

  countLog();


  return (
    <section className="session_sec">
        <section className="session_sec_timer">
            <h2>Session</h2>
            <p className="session_sec_time" style={{color: sessTimer === 1 ? 'red' : brTime < 1 ? 'red' : 'black'}}>{`${sessionEnd ? brTime : sessTimer}:${count}`}</p>
        </section>
        <article className="play">
            <p onClick={handleStartStop}>⏯️</p>
            <p onClick={handleReset}>🔁</p>
        </article>
    </section>
  )
}

export default Session
