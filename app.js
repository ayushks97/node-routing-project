const express = require('express');
const app = express();

const PORT = process.env.PORT || 3000;

// Home route
app.get('/', (req, res) => {
  res.send(`
    <h1>🌟 Welcome to My Node.js Routing Project!</h1>
    <p>This is the <strong>Home Page</strong>.</p>
    <hr>
    <a href="/about">About</a> | 
    <a href="/contact">Contact</a> | 
    <a href="/api/time">Time API</a>
  `);
});

// About route
app.get('/about', (req, res) => {
  res.send(`
    <h1>About This Project</h1>
    <p>This is a simple Node.js project using Express routing.</p>
    <a href="/">Go Back</a>
  `);
});

// Contact route
app.get('/contact', (req, res) => {
  res.send(`
    <h1>Contact Info</h1>
    <p>Email: <a href="mailto:ayush@example.com">ayush@example.com</a></p>
    <p>Phone: +91 12345 67890</p>
    <a href="/">Go Back</a>
  `);
});

// JSON API route
app.get('/api/time', (req, res) => {
  res.json({
    message: "Server time fetched successfully",
    serverTime: new Date().toISOString()
  });
});

// 404 route
app.use((req, res) => {
  res.status(404).send(`
    <h1>404 - Page Not Found</h1>
    <p>The page you're looking for doesn't exist.</p>
    <a href="/">Go to Home</a>
  `);
});

// Start server
app.listen(PORT, () => {
  console.log(`✅ Server is running at: http://localhost:${PORT}`);
});
