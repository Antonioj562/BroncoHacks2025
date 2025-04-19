import React from 'react';
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer
  } from 'recharts';

const data = [
    { day: 'Mon', mood: 3 },
    { day: 'Tue', mood: 4 },
    { day: 'Wed', mood: 2 },
    { day: 'Thu', mood: 5 },
    { day: 'Fri', mood: 3 },
    { day: 'Sat', mood: 4 },
    { day: 'Sun', mood: 1 },
  ];

const Graphs: React.FC = () => {
    return (
      <div className="line-graph-wrapper">
      <h2>Mood Tracker</h2>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="day" />
          <YAxis domain={[0, 5]} />
          <Tooltip />
          <Line
            type="monotone"
            dataKey="mood"
            stroke="#8884d8"
            strokeWidth={3}
            dot={{ r: 6 }}
            activeDot={{ r: 8 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
    );
};

export default Graphs;