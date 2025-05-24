const dataStore = require('../models/dataStore');

const getSmartTrayData = (req, res) => {
  const data = dataStore.getData();
  res.json(data);
};

module.exports = { getSmartTrayData };
