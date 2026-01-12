import express from 'express';

const app = express();


// Middleware to parse JSON
app.use(express.json());

// Basic routes
app.get('/', (req, res) => {
  res.json({ message: 'Welcome to the basic Node.js API!' });
});

app.get('/api/users', (req, res) => {
  // Mock data
  const users = [
    { id: 1, name: 'John Doe' },
    { id: 2, name: 'Jane Doe' }
  ];
  res.json(users);
});

app.post('/api/users', (req, res) => {
  const newUser = req.body;
  //to do, add database
  res.status(201).json({ message: 'User created', user: newUser });
});

// Start server

const PORT = parseInt(process.env.PORT || '8080', 10);

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server running on port ${PORT}`);
});