## Phase 2 Code Challenge: Bot Battlr
## Overview
Bot Battlr is an interactive React application designed to help users (galactic overlords) build and manage their own bot army. Users can browse a catalog of bots, enlist them into their army, release enlisted bots, and permanently delete bots from both the frontend and backend. This project was developed as part of Moringa School’s Phase 2 React Code Challenge, focusing on core React concepts including functional components, hooks (state/effects), props, and data fetching from a local JSON API.

## Features ✨
## Bot Battlr delivers these key functionalities:

View All Bots: Fetch and display a dynamic collection of available bots from a local JSON database.
Enlist Bots: Add bots to your personal army with duplicate prevention—bots remain visible in the main collection.
Release Bots: Remove bots from your army without altering the main collection.
Delete Bots: Permanently remove a bot from the backend database (DELETE /bots/:id) and the frontend army.
Responsive Card Layout: Bots are rendered in a grid of cards, automatically adjusting to screen size.
Clean UI: Organized interface with clear visual hierarchy, hover effects, and action buttons for intuitive interactions.
Tech Stack 
React.js: Core frontend framework (JSX, functional components, hooks).
JSON Server: Mock backend API for storing and fetching bot data.
HTML/CSS: Component-based styling for responsive layouts.
JavaScript (ES6+): For state management, API interactions, and event handling.


## Project Structure 
The project follows a modular React structure for maintainability:



Phase-2-Code-Challenge-Bot-Battlr/  # Root project folder (matches your terminal path)
├── public/                         # Static assets (HTML, favicons)
│   └── index.html                  # Entry point for React rendering
├── src/                            # Application source code
│   ├── components/                 # Reusable UI components
│   │   ├── BotCard.jsx             # Displays individual available bot details + enlist button
│   │   ├── BotArmyCard.jsx         # Displays individual enlisted bot details + release/delete buttons
│   │   ├── BotCollection.jsx       # Renders grid of available bots (uses BotCard)
│   │   └── YourBotArmy.jsx         # Manages enlisted bot UI (uses BotArmyCard)
│   ├── App.jsx                     # Main component: orchestrates state (bots/army) and fetches data
│   ├── index.jsx                   # React app entry: mounts root component to DOM
│   └── css/                        # Component-specific stylesheets
│       ├── App.css                 # Global app styling
│       ├── BotCard.css             # Styling for BotCard component
│       ├── BotArmyCard.css         # Styling for BotArmyCard component
│       ├── BotCollection.css       # Styling for BotCollection grid
│       ├── YourBotArmy.css         # Styling for YourBotArmy section
│       └── index.css               # Base styles (optional, if used)
├── db.json                         # Backend database (stores bot data)
└── package.json                    # Dependencies, scripts, and project metadata

Installation & Setup 🚀
Prerequisites
Node.js (v14+ recommended) with npm.
Git (for cloning the repository).
Steps
Clone the Repository

git clone <git@github.com:Ahman04/phase-2-code-challenge-bot-battlr.git>  
cd Phase-2-Code-Challenge-Bot-Battlr  # Navigate to project root  
Install Dependencies
Fetch React, JSON Server, and other required packages:
bash


npm install  
Start Development Servers
Run both the React app and JSON server concurrently using the dev script (defined in package.json):
bash


Future Improvements 
To enhance Bot Battlr further, consider these additions:

Search/Filter: Allow users to filter bots by class (Support, Medic, etc.) or search by name.
Sorting: Add a SortBar component to sort bots by health, damage, or armor.
Animations: Implement smooth transitions when enlisting/releasing bots (e.g., fade-in/out).
Persistent Storage: Use localStorage or a backend database to retain army data between sessions.
Catchphrase Truncation: Shorten long catchphrases with a "Read More" toggle for cleaner UI.
Author 
Abdirahman Mohamed

React Developer | Frontend Enthusiast
Moringa School Phase 2 Code Challenge Participant
License 
This project is licensed under the MIT License for educational use.

© 2024 Abdirahman Mohamed.

