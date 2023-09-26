const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 3000;

// Middleware for parsing JSON request bodies
app.use(bodyParser.json());

// Registration endpoint
app.post('/register', (req, res) => {
  // Here, you would typically validate and save the user's registration data to your database.
  // Replace this with your actual database logic.
  const { username, email, password } = req.body;

  // For demonstration purposes, we'll just send a success message.
  res.status(200).json({ message: 'Registration successful' });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
