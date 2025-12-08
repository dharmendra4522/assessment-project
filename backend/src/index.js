const express = require('express');
const cors = require('cors');
const { getSales } = require('./controllers/salesController');

const app = express();
app.use(cors());
app.use(express.json());

// Routes
app.get('/api/sales', getSales);

// Start server
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Backend running on http://localhost:${PORT}`);
});
