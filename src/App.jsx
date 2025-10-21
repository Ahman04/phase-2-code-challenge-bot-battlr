import React, { useEffect, useState } from 'react';
import BotCollection from './components/BotCollection.jsx';
import YourBotArmy from './components/YourBotArmy.jsx';
import './App.css';

function App() {
  const [bots, setBots] = useState([]);
  const [army, setArmy] = useState([]);

  // Fetch data from db.json
  useEffect(() => {
    fetch('http://localhost:8001/bots')
      .then((res) => res.json())
      .then((data) => setBots(data))
      .catch((err) => console.error('Error fetching bots:', err));
  }, []);

  // Add bot to army (no duplicates)
  const handleEnlist = (bot) => {
    if (!army.find((b) => b.id === bot.id)) {
      setArmy([...army, bot]);
    }
  };

  // Release bot (remove from army)
  const handleRelease = (id) => {
    setArmy(army.filter((bot) => bot.id !== id));
  };

  // Delete bot (remove from both lists)
  const handleDelete = (id) => {
    setArmy(army.filter((bot) => bot.id !== id));
    setBots(bots.filter((bot) => bot.id !== id));
  };

  return (
    <div className="App">
      <h1>🤖 Bot Battlr</h1>
      <YourBotArmy 
        enlistedBots={army} 
        onRelease={handleRelease} 
        onDelete={handleDelete} 
      />
      <BotCollection 
        bots={bots} 
        onEnlist={handleEnlist} 
      />
    </div>
  );
}

export default App;
