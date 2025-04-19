import React, { useEffect, useState } from 'react';
import { useAuth } from '@clerk/clerk-react';
import './streak.css';


const Streak: React.FC = () => {
  const { getToken } = useAuth();          
  const [highest, setHighest] = useState<number>(0);
  const [current, setCurrent] = useState<number>(0);

  useEffect(() => {
    const fetchStreak = async () => {
      try {
        const token = await getToken();      // grab Clerk session JWT
        const res = await fetch('http://localhost:5000/streak', {
          headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'
          }
        });
        if (!res.ok) throw new Error(res.statusText);
        const { highestStreak, currentStreak } = await res.json();
        setHighest(highestStreak);
        setCurrent(currentStreak);
      } catch (err) {
        console.error('Failed to fetch streak:', err);
      }
    };
    fetchStreak();
  }, [getToken]);

  return (
    <div className="streak">
      <span className="emoji">🔥</span>
      <span className="text">
        Highest Streak: {highest} day{highest !== 1 ? 's' : ''}
      </span>
      <span>
        Current Streak: {current}
      </span>
    </div>
  );
};

export default Streak;
