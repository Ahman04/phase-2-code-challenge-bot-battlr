import React from 'react';
import './BotCard.css';

const BotCard = ({ bot, onEnlist }) => {
  return (
    <div className="bot-card">
      <img src={bot.avatar_url} alt={`${bot.name} avatar`} className="avatar" />
      <div className="bot-info">
        <h3>{bot.name}</h3>
        <p>Class: {bot.bot_class}</p>
        <p>Health: {bot.health}</p>
        <p>Damage: {bot.damage}</p>
        <p>Armor: {bot.armor}</p>
        
      </div>
      <button 
        className="enlist-btn"
        onClick={() => onEnlist(bot)}
      >
        Enlist in Army
      </button>
    </div>
  );
};

export default BotCard;
