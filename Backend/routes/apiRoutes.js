const express = require('express');
const router = express.Router();
const { getSmartTrayData } = require('../controllers/dataController');

router.get('/smarttray', getSmartTrayData);

module.exports = router;
