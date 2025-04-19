import React from 'react';
import './MoodSelector.css'; // or use a CSS module if preferred

const MoodSelector: React.FC = () => {
  return (
    <div className="MoodSelector-container">
      <h2>How are you feeling today?</h2>
      <div className="mood-buttons">
        <button>Moody</button>
        <button>Calm</button>
        <button>Nervous</button>
        <button>Anxious</button>
        <button>Irritated</button>
        <button>Happy</button>
        <button>Depressed</button>
        <button>Energetic</button>
        <button>Self-critical</button>
        <button>Sad</button>
        <button>Low energy</button>
      </div>
    </div>
  );
};

export default MoodSelector;