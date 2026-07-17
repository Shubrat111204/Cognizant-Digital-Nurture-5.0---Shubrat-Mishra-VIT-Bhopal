# Cricket App - React ES6 Features

## Objective
This hands-on demonstrates the implementation of ES6 features in React, including:

- ES6 `map()` function
- Arrow Functions
- Array Filtering
- Destructuring
- Spread Operator (Array Merge)
- Conditional Rendering

## Technologies Used

- React
- JavaScript (ES6)
- Node.js
- npm
- Visual Studio Code

## Features

### List of Players
- Displays a list of 11 cricket players using the ES6 `map()` function.
- Filters and displays players having scores less than 70 using arrow functions.

### Indian Players
- Displays Odd Team Players using ES6 Destructuring.
- Displays Even Team Players using ES6 Destructuring.
- Merges T20 Players and Ranji Trophy Players using the ES6 Spread Operator.
- Displays the merged player list.

### Conditional Rendering
- Uses a boolean flag to switch between:
  - Player List View
  - Indian Players View

## Project Structure

```
cricketapp/
│
├── src/
│   ├── Components/
│   │   ├── ListofPlayers.js
│   │   └── IndianPlayers.js
│   │
│   ├── App.js
│   ├── index.js
│   └── App.css
│
├── package.json
└── README.md
```

## Output

- Displays all players.
- Displays players scoring less than 70.
- Displays Odd and Even Team Players.
- Displays merged list of Indian players.

## Learning Outcome

After completing this exercise, you will be able to:

- Use ES6 `map()` for rendering lists.
- Filter arrays using arrow functions.
- Apply ES6 Destructuring.
- Merge arrays using the Spread Operator.
- Implement Conditional Rendering in React.