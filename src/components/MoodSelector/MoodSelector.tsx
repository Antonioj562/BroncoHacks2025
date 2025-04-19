import React from 'react';
import './MoodSelector.css'; 
import { useState } from 'react';
import { useAuth } from '@clerk/clerk-react';


const MoodSelector: React.FC = () => {
    const { getToken } = useAuth();  

    const [selectedMood, setSelectedMood] = useState<number | null>(null);

    const handleMoodClick = async (moodValue: number) => {
        setSelectedMood(moodValue);

        try {
            const token = await getToken();
            const response = await fetch('http://localhost:5000/add-mood', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`,
                },
                body: JSON.stringify({
                    mood: moodValue,
                    date: new Date().toISOString().slice(0, 10),
                }),
            });

            const data = await response.json();
            console.log('Mood submitted:', data);

        } catch (error) {
            console.error('Error submitting mood:', error);
        }
    };

return (
    <div className="MoodSelector-container">
        <h2>How are you feeling today?</h2>
        <div className="mood-buttons">
            <button onClick={() => handleMoodClick(10)}>Energetic</button>
            <button onClick={() => handleMoodClick(9)}>Happy</button>
            <button onClick={() => handleMoodClick(8)}>Calm</button>
            <button onClick={() => handleMoodClick(7)}>Alright</button>
            <button onClick={() => handleMoodClick(6)}>Low Energy</button>
            <button onClick={() => handleMoodClick(5)}>Moody</button>
            <button onClick={() => handleMoodClick(4)}>Nervous</button>
            <button onClick={() => handleMoodClick(3)}>Anxious</button>
            <button onClick={() => handleMoodClick(2)}>Self-Critical</button>
            <button onClick={() => handleMoodClick(1)}>Depressed</button>
        </div>
    </div>
    );
};

export default MoodSelector;