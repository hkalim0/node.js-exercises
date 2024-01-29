// Step 1: Import the Express module
const express = require('express');

// Step 2: Create an Express application
const app = express();
const port = 3000;

// Step 3: Define a route handler for the root URL
app.get('/', (req, res) => {
    res.send('Hello, World!');
});

// Step 4: Start the Express server
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
