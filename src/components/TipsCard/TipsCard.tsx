import React, { useEffect, useState } from 'react';
import './TipsCard.css';

const motivationalTips = [
    "You’ve survived 100% of your bad days — you’re doing great.",
    "You don’t have to be perfect to be proud.",
    "Take a deep breath. You’re doing better than you think.",
    "Small progress is still progress.",
    "One step at a time. You’ve got this 💪",
    "Progress, not perfection.",
    "You’re allowed to rest. That’s also productive.",
    "Your feelings are valid.",
    "You've come so far — don't stop now.",
    "Be kind to yourself today.",
    "Your pace is perfect for your journey.",
    "Every day is a fresh start.",
    "Rest is part of the process, not a pause from it.",
    "Even the smallest step forward is movement.",
    "You don’t need to have all the answers today.",
    "You’re not behind — you’re on your path.",
    "Growth isn't linear, and that's okay.",
    "Self-care is productive.",
    "Your energy is precious — spend it wisely.",
    "Keep going, even if it's slow.",
    "You’re building something beautiful — keep going.",
    "The struggle means you're trying.",
    "Believe in the work you’re doing, even if it’s invisible.",
    "Take it hour by hour if you need to.",
    "You are more than your to-do list.",
    "Choose grace over guilt today.",
    "You are doing better than you realize.",
    "You can do hard things — you already have.",
    "It’s okay to take up space.",
    "You’re enough. Full stop.",
    "You’ve made it through 100% of your worst days.",
    "Healing is messy — let it be.",
    "Some days, surviving is thriving.",
    "You are worthy of rest and joy.",
    "Celebrate the small wins.",
    "You don't need to rush to matter.",
    "Your best today might look different than yesterday — that’s okay.",
    "Courage isn't loud — it's showing up anyway.",
    "Your progress counts, even if no one sees it.",
    "You're not starting over, you're starting wiser.",
    "You’re allowed to feel tired. Rest is resistance too.",
    "Showing up for yourself is powerful.",
    "The only way out is through — and you're getting there.",
    "It's okay to go at your own pace.",
    "Breathe in peace. Breathe out pressure.",
    "The world needs your softness too.",
    "You’re creating a life, not a checklist.",
    "Slow growth is still growth.",
    "Give yourself the same kindness you'd give a friend.",
    "You're doing beautifully — even when it doesn't feel like it.",
    "Nothing blooms all year — take your season of rest.",
  ];
  

const getTodayKey = () => {
  const today = new Date().toISOString().slice(0, 10); // format: YYYY-MM-DD
  return `tips-${today}`;
};

const TipsCard: React.FC = () => {
  const [tips, setTips] = useState<string[]>([]);

  useEffect(() => {
    const storageKey = getTodayKey();
    const savedTips = localStorage.getItem(storageKey);

    if (savedTips) {
      setTips(JSON.parse(savedTips));
    } else {
      // Select 3–5 random tips
      const shuffled = motivationalTips.sort(() => 0.5 - Math.random());
      const randomCount = Math.floor(Math.random() * 3) + 3; // 3 to 5 tips
      const selected = shuffled.slice(0, randomCount);
      setTips(selected);
      localStorage.setItem(storageKey, JSON.stringify(selected));
    }
  }, []);

  return (
    <div className="tips-card">
      <h2 className="tips-title">From Mentie 💜</h2>
      <ul className="tips-list">
        {tips.map((tip, index) => (
          <li key={index} className="tip-item">💡 {tip}</li>
        ))}
      </ul>
    </div>
  );
};

export default TipsCard;
