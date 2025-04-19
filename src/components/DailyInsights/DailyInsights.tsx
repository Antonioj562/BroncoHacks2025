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
import { useAuth } from '@clerk/clerk-react'; // <-- AUTH hook

type MoodEntry = { date: string; mood: number };

const DailyInsight: React.FC = () => {
  const [entries, setEntries] = useState<MoodEntry[]>([]);
  const [loading, setLoading] = useState(true); // optional: add loading spinner
  const { getToken } = useAuth(); // <-- AUTH hook

  useEffect(() => {
    const fetchMoodEntries = async () => {
      try {
        const token = await getToken();
        const res = await fetch('http://localhost:5000/weekly-moods', {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
          },
        });
    
        if (!res.ok) throw new Error(res.statusText);
    
        const data = await res.json();
    
        // Ensure that `data.entries` exists and map over it
        if (!data.entries) {
          throw new Error('Entries data is missing');
        }
    
        const formattedEntries = data.entries.map((entry: MoodEntry, index: number) => ({
          index: index + 1,
          date: entry.date,
          mood: entry.mood,
        }));
    
        setEntries(formattedEntries);
      } catch (err) {
        console.error('Failed to load mood entries:', err);
      } finally {
        setLoading(false);
      }
    }; 

    fetchMoodEntries();
  }, [getToken]);

  return (
    <div className="daily-insight-container">
      <h2>Daily Insights</h2>

      <div className="insight-chart">
        {loading ? (
          <p>Loading chart...</p>
        ) : (
          <ResponsiveContainer width="100%" height={250}>
            <LineChart data={entries}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="date" /> {/* Use the date for X-Axis */}
              <YAxis domain={[0, 10]} />
              <Tooltip />
              <Line type="monotone" dataKey="mood" stroke="#8e44ad" strokeWidth={3} />
            </LineChart>
          </ResponsiveContainer>
        )}
      </div>
    </div>
  );
};

export default DailyInsight;
