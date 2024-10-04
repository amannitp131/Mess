import React, { useEffect, useState } from 'react';
import './Predictor.css'; // Import the CSS file

const Predictor = () => {
  const [timeLeft, setTimeLeft] = useState(30 * 24 * 60 * 60 * 1000); // 30 days in milliseconds

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prevTime) => {
        if (prevTime <= 0) {
          clearInterval(timer);
          return 0; // Stop at 0
        }
        return prevTime - 1000; // Decrease time by 1 second
      });
    }, 1000);

    return () => clearInterval(timer); // Cleanup interval on component unmount
  }, []);

  // Calculate days, hours, minutes, and seconds
  const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

  return (
    <div className="coming-soon-container">
      <h1 className="coming-soon-title">Coming Soon</h1>
      <p className="coming-soon-subtitle">We are working hard to make this Model</p>
      <div className="countdown">
        <div className="countdown-item">
          <span className="countdown-number">{String(days).padStart(2, '0')}</span>
          <span className="countdown-label">Days</span>
        </div>
        <div className="countdown-item">
          <span className="countdown-number">{String(hours).padStart(2, '0')}</span>
          <span className="countdown-label">Hours</span>
        </div>
        <div className="countdown-item">
          <span className="countdown-number">{String(minutes).padStart(2, '0')}</span>
          <span className="countdown-label">Minutes</span>
        </div>
        <div className="countdown-item">
          <span className="countdown-number">{String(seconds).padStart(2, '0')}</span>
          <span className="countdown-label">Seconds</span>
        </div>
      </div>
      <p className="coming-soon-footer">Stay tuned for updates!</p>
    </div>
  );
};

export default Predictor;