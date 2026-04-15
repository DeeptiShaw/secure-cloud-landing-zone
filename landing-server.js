const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.LANDING_PORT || 8080;

// Serve static files from the root directory
app.use(express.static(path.join(__dirname)));

// Serve index.html for all routes (SPA fallback)
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Landing page server running on http://localhost:${PORT}`);
});