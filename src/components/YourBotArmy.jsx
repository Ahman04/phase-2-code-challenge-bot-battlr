import React from 'react';
import BotArmyCard from './BotArmyCard.jsx';
import './YourBotArmy.css';

const YourBotArmy = ({ enlistedBots, onRelease, onDelete }) => {
  if (enlistedBots.length === 0) {
    return (
      <div className="empty-army">
        <h2>Your Bot Army</h2>
        <p>No bots enlisted! Click "Enlist in Army" on any bot to add them.</p>
      </div>
    );
  }

  return (
    <div className="your-bot-army">
      <h2>Your Bot Army</h2>
      <div className="army-grid">
        {enlistedBots.map((bot) => (
          <BotArmyCard 
            key={bot.id} 
            bot={bot} 
            onRelease={onRelease} 
            onDelete={onDelete} 
          />
        ))}
      </div>
    </div>
  );
};

export default YourBotArmy;
