import React, { useEffect, useState } from 'react';
import { useAuth } from '@clerk/clerk-react';
import './streak.css';


const Streak: React.FC = () => {
  const { getToken } = useAuth();            // getToken() from Clerk :contentReference[oaicite:1]{index=1}
  const [highest, setHighest] = useState<number>(0);

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
        const { highestStreak } = await res.json();
        setHighest(highestStreak);
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
    </div>
  );
};

export default Streak;
