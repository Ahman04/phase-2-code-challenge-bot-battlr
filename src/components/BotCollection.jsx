import React from 'react';
import BotCard from './BotCard.jsx';
import './BotCollection.css';

const BotCollection = ({ bots, onEnlist }) => {
  return (
    <div className="bot-collection">
      <h2>Available Bots</h2>
      <div className="bot-grid">
        {bots.map((bot) => (
          <BotCard 
            key={bot.id} 
            bot={bot} 
            onEnlist={onEnlist} 
          />
        ))}
      </div>
    </div>
  );
};

export default BotCollection;
