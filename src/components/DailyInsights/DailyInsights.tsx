import React from 'react';
import './DailyInsights.css';

const DailyInsight: React.FC = () => {
  return (
    <div className="daily-insight-container">
      <h2>Daily Insights</h2>
      <div className="insight-item">
        <span className="insight-icon">😊</span>
        <span className="insight-text">Mood from last week</span>
      </div>
    </div>
  );
};

export default DailyInsight;
