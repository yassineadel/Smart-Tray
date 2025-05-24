const express = require('express');
const cors = require('cors');
const apiRoutes = require('./routes/apiRoutes');
require('./mqttHandler');

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api', apiRoutes);

app.listen(5000, () => console.log('✅ Backend running on http://localhost:5000'));
