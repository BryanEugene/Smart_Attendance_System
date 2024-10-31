import React, { useState, useEffect } from 'react';
import './App.css';

function Clock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    // Clear the interval on component unmount
    return () => clearInterval(timer);
  }, []);

  return (
    <h1 className="time">
      {time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' })}
    </h1>
  );
}
function App() {
  const scrollToBottom = () => {
    window.scrollTo({ top: document.documentElement.scrollHeight, behavior: 'smooth' });
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Smart Attendance</h1>
        <p>Hi, welcome!</p>
        <button className="scroll-btn" onClick={scrollToBottom}>Start Attendance</button>
      </header>

      <main className="App-main">
        <div className="date-time">
          <h2>{new Date().toLocaleDateString()}</h2>
          <Clock />
        </div>

        <div className="attendance-type-buttons">
          <button className="btn attendance-in">Entry Attendance</button>
          <button className="btn attendance-out">Exit Attendance</button>
        </div>
        
        <div className="attendance-buttons">
          <button className="btn check-in">Check-In</button>
          <button className="btn check-out">Check-Out</button>
          <button className="btn break">Break</button>
          <button className="btn apply-leave">Apply Leave</button>
          <p>Choose one of them if you want to go but for a short time</p>

        </div>
      </main>

      <footer className="App-footer">
      <p>Simple UI By Bryan Eugene</p>
      </footer>
    </div>
  );
}

export default App;
