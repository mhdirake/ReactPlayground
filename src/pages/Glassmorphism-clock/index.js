import React, { useState, useEffect } from 'react';
import './style.css'; 

const GlassmorphismClock = () => {
  const [time, setTime] = useState({
    hours: '00',
    minutes: '00',
    seconds: '00',
    ampm: 'AM',
  });

  const updateClock = () => {
    const now = new Date();
    let h = now.getHours();
    let m = now.getMinutes();
    let s = now.getSeconds();
    let am = 'AM';

    if (h > 12) {
      h -= 12;
      am = 'PM';
    }

    h = h < 10 ? '0' + h : h;
    m = m < 10 ? '0' + m : m;
    s = s < 10 ? '0' + s : s;

    setTime({
      hours: h,
      minutes: m,
      seconds: s,
      ampm: am,
    });
  };

  useEffect(() => {
    const interval = setInterval(updateClock, 1000);

    // Cleanup the interval on component unmount
    return () => clearInterval(interval);
  }, []);

  return (
    <div className='glassmorphism-clock'>

    <section>
      <div className="clock">
        <div className="container">
          <h2 id="hour">{time.hours}</h2>
          <h2 className="dot">:</h2>
          <h2 id="minute">{time.minutes}</h2>
          <h2 className="dot">:</h2>
          <h2 id="seconds">{time.seconds}</h2>
          <span id="ampm">{time.ampm}</span>
        </div>
      </div>
    </section>
    </div>
  );
};

export default GlassmorphismClock;
