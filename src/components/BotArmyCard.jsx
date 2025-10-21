import React from 'react';
import './BotArmyCard.css';

const BotArmyCard = ({ bot, onRelease, onDelete }) => {
  return (
    <div className="army-card">
      <img src={bot.avatar_url} alt={`${bot.name} avatar`} className="avatar" />
      <div className="army-info">
        <h3>{bot.name}</h3>
        <p>Class: {bot.bot_class}</p>
        <p>Health: {bot.health}</p>
        <p>Damage: {bot.damage}</p>
        <p>Armor: {bot.armor}</p>
        
      </div>
      <div className="actions">
        <button 
          className="release-btn"
          onClick={() => onRelease(bot.id)}
        >
          Release from Army
        </button>
        <button 
          className="delete-btn"
          onClick={() => onDelete(bot.id)}
        >
          x
        </button>
      </div>
    </div>
  );
};

export default BotArmyCard;
