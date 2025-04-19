import React from 'react';
import './TopBar.css';

const TopBar: React.FC = () => {
  return (
    <div className="topbar">
      <div className="topbar-left">
        <h1 className="logo">Mentie</h1>
      </div>

      <div className="topbar-center">
        <p className="tagline">Track your mind, understand your mood!</p>
      </div>
    </div>
  );
};

export default TopBar;