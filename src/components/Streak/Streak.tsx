import React, { useEffect, useState } from 'react';
import './Streak.css';

const Streak = () => {
  const [streak, setStreak] = useState<number>(0);

  useEffect(() => {
    const lastVisit = localStorage.getItem('lastVisit');
    const storedStreak = parseInt(localStorage.getItem('streak') || '0');

    const today = new Date().toDateString();
    const yesterday = new Date(Date.now() - 86400000).toDateString();

    if (lastVisit === today) {
      // Already visited today — do nothing
      setStreak(storedStreak);
    } else if (lastVisit === yesterday) {
      // Continue streak
      localStorage.setItem('streak', String(storedStreak + 1));
      setStreak(storedStreak + 1);
    } else {
      // Missed a day — reset
      localStorage.setItem('streak', '1');
      setStreak(1);
    }

    localStorage.setItem('lastVisit', today);
  }, []);

  return (
    <div className="streak">
      🔥 Streak: {streak} day{streak !== 1 ? 's' : ''}
    </div>
  );
};

export default Streak;