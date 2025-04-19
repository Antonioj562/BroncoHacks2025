import React, { useEffect, useState } from 'react';
import './DailyInsights.css';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from 'recharts';

type MoodEntry = { date: string; mood: number };

const DailyInsight: React.FC = () => {
  const [entries, setEntries] = useState<MoodEntry[]>([]);

  // FOR TESTING: use dummy mood data instead of fetching from API
  useEffect(() => {
    setEntries([
      { date: 'Mon', mood: 7 },
      { date: 'Tue', mood: 6 },
      { date: 'Wed', mood: 8 },
      { date: 'Thu', mood: 5 },
      { date: 'Fri', mood: 9 },
      { date: 'Sat', mood: 4 },
      { date: 'Sun', mood: 6 },
    ]);
  }, []);

  return (
    <div className="daily-insight-container">
      <h2>Daily Insights</h2>

      <div className="insight-chart">
        <ResponsiveContainer width="100%" height={250}>
          <LineChart data={entries}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="date" />
            <YAxis domain={[0, 10]} />
            <Tooltip />
            <Line type="monotone" dataKey="mood" stroke="#8e44ad" strokeWidth={3} />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* <ul className="insight-list">
        {entries.map(({ date, mood }) => (
          <li key={date} className="insight-item">
            <span className="insight-date">{date}</span> –{' '}
            <span className="insight-value">{mood}/10</span>
          </li>
        ))}
      </ul> */}
    </div>
  );
};

export default DailyInsight;