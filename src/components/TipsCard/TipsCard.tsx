import React, { useEffect, useState } from 'react';
import './TipsCard.css';<a href=""></a>
import { useAuth } from '@clerk/clerk-react';


  const TipsCard: React.FC = () => {
    const [tip, setTip] = useState<string>('');
    const [loading, setLoading] = useState(true);
    const { getToken } = useAuth(); 
  
    useEffect(() => {
      const fetchGeminiTip = async () => {
        try {
          const token = await getToken(); // Get the authentication token
          
          const res = await fetch('http://localhost:5000/gemini-insight', {
            headers: { 
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${token}` // Include the authentication token
            }
          });
          
          if (!res.ok) throw new Error(res.statusText);
          const data = await res.json();
          setTip(data.response);
        } catch (err) {
          console.error('Failed to load Gemini tip:', err);
          setTip('Take a deep breath. You are doing better than you think.'); // fallback tip
        } finally {
          setLoading(false);
        }
      };
  
      fetchGeminiTip();
    }, [getToken]);
  return (
    <div className="tips-card">
      <h2 className="tips-title">From Mentie 💜</h2>
      <p className="tip-item">💡 {tip}</p>
    </div>
  );
};

export default TipsCard;