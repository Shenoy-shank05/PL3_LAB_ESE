const express = require('express');
const path = require('path');

const app = express();
const port = 3000;

// Route to render home.html from the views folder
app.get('/', (req, res) => {
  // Correct the path to point to the 'views' folder
  res.sendFile(path.join(__dirname, './views/home.html')); // Path to home.html
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
