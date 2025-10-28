## Bot Battlr
## Description

Bot Battlr is an interactive React web application that allows users (galactic overlords) to build and manage their own robot army. Users can browse available bots, enlist them into their army, release bots, or permanently delete them from the database.

This project was developed as part of Moringa School’s Phase 2 React Code Challenge, focusing on core React concepts such as functional components, hooks (useState, useEffect), props, and API interaction using JSON Server.

## Author
Abdirahman Mohamed

## deployment link
[Deployment link](phase-2-code-challenge-bot-battlr-1an4-e0o25slsy.vercel.app)



## BDD (Behavior Driven Development)
Input	Action	Output
User opens app	Fetches data from JSON Server	Displays all available bots
User clicks “Enlist”    on a bot	Adds bot to army (no duplicates)	Bot appears in “Your Army” section
User clicks “Release”	Removes bot from army only	Bot remains in main collection
User clicks “Delete”	Sends DELETE request to backend	Bot removed from both frontend and backend
Invalid API respons 	Displays error or fallback message

## Technologies Used

React.js – Functional components, props, hooks (useState, useEffect)

JSON Server – Mock REST API for bot data

HTML5 & CSS3 – Component-based responsive styling

JavaScript (ES6+) – For dynamic UI interactions



## License

## MIT License

## Copyright (c) 2025 Abdirahman Mohamed

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.