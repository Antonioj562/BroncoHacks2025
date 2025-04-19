import React from 'react';
import './GreetUser.css'; // or use a CSS module if preferred
import { useUser } from '@clerk/clerk-react';  

const GreetUser: React.FC = () => {
    const { isLoaded, isSignedIn, user } = useUser();

    if (!isLoaded) {
      return <div>Loading...</div>;
    }
    if (!isSignedIn || !user) {
      return <div>Please sign in.</div>;
    }
    const name = user.firstName || user.fullName || 'there';
    const avatarUrl = user.imageUrl; 

    return (
      <div className="greet-user-container">
        <img
          src={avatarUrl}
          alt={`${name}'s avatar`}
          className="greet-user-avatar"
        />
        <p>Hello, {name}! Don&apos;t forget to log your mood today!</p>
      </div>
    );
};

export default GreetUser;
