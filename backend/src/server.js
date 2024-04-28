const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;

// Routes
const exampleRoutes = require('./routes/exampleRoutes');

// Middleware
app.use(express.json());

// Routes Middleware
app.use('/api/examples', exampleRoutes);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
