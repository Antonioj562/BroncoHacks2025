import React, { useEffect, useState } from 'react';
import './TipsCard.css';

const motivationalTips = [
  "You’ve survived 100% of your bad days — you’re doing great.",
  "You don’t have to be perfect to be proud.",
  "Take a deep breath. You’re doing better than you think.",
  "Small progress is still progress.",
];

const TipsCard: React.FC = () => {
  const [tip, setTip] = useState("");

  useEffect(() => {
    const randomTip = motivationalTips[Math.floor(Math.random() * motivationalTips.length)];
    setTip(randomTip);
  }, []);

  return (
    <div className="tips-card">
      <h2 className="tips-title">From Mentie 💜</h2>
      <p className="tip-item">💡 {tip}</p>
    </div>
  );
};

export default TipsCard;
