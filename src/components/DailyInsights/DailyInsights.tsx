import React, { useEffect, useState } from 'react';
import { useAuth } from '@clerk/clerk-react';
import './DailyInsights.css';

type MoodEntry = { date: string; mood: number };

const DailyInsight: React.FC = () => {
  const { getToken } = useAuth();
  const [entries, setEntries] = useState<MoodEntry[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadWeekly = async () => {
      try {
        const token = await getToken();
        const res = await fetch('http://localhost:5000/weekly-moods', {
          headers: { 
            'Authorization': `Bearer ${token}`, 
            'Content-Type': 'application/json' 
          }
        });
        if (!res.ok) throw new Error(res.statusText);
        const json = await res.json();
        setEntries(json.lastSeven);
      } catch (err) {
        console.error('Failed to load weekly moods:', err);
      } finally {
        setLoading(false);
      }
    };
    loadWeekly();
  }, [getToken]);

  if (loading) {
    return <div>Loading insights…</div>;
  }

  return (
    <div className="daily-insight-container">
      <h2>Daily Insights</h2>
      {entries.length === 0 ? (
        <p>No moods logged yet.</p>
      ) : (
        <ul className="insight-list">
          {entries.map(({ date, mood }) => (
            <li key={date} className="insight-item">
              <span className="insight-date">{date}</span> –{' '}
              <span className="insight-value">{mood}/10</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default DailyInsight;

