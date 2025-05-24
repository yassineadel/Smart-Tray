const express = require('express');
const { getFridgeData } = require('./mqttHandler');

const app = express();
const PORT = process.env.PORT || 5000;

app.get('/fridge', (req, res) => {
  res.json(getFridgeData());
});

app.listen(PORT, () => {
  console.log(`🚀 Backend server running on http://localhost:${PORT}`);
});