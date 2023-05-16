import { useState, useEffect } from 'react';
import '../../App.css';

const Clock = () => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [displayFormat, setDisplayFormat] = useState('12'); 

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const formatTime = (date) => {
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();

    let ampm;
    if (displayFormat === '12') {
      ampm = hours >= 12 ? 'pm' : 'am';
      const formattedHours = hours % 12 || 12;
      return `${formattedHours}:${padZero(minutes)}:${padZero(seconds)}${ampm}`;
    } else {
      return `${padZero(hours)}:${padZero(minutes)}:${padZero(seconds)}`;
    }
  };

  const padZero = (value) => {
    return value.toString().padStart(2, '0');
  };

  function displayTwentyFourHours() {
    setDisplayFormat('24');
  }

  function displayTwelveHours() {
    setDisplayFormat('12');
  }

  return (
    <div className="clock">
      <div className='buttons'>
        <center>
          <button className='twelveHours' onClick={displayTwelveHours}>12 hours</button>
          <button className='twentyFourHours' onClick={displayTwentyFourHours}>24 hours</button>
        </center>
      </div>
      <center>
        <div className="time">{formatTime(currentTime)}</div>
      </center>
    </div>
  );
};

export default Clock;
