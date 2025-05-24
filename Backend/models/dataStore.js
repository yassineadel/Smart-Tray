const weightPerItem = 250;
const trayWeight = 1000;

let latestData = {
  temperature: null,
  weight: null,
  itemCount: 0
};

function saveData(topic, value) {
  const numValue = parseFloat(value);
  console.log(`🧪 Received Topic: ${topic} | Raw Value: ${numValue}`);

  if (topic.includes('weight')) {
    const netWeight = numValue - trayWeight;
    latestData.weight = netWeight;
    latestData.itemCount = Math.max(0, Math.floor(netWeight / weightPerItem));
    console.log(`📦 Net Weight: ${netWeight}, Item Count: ${latestData.itemCount}`);
  } else if (topic.includes('temperature')) {
    latestData.temperature = numValue;
    console.log(`🌡️ Temperature: ${numValue}`);
  }
}

function getData() {
  return latestData;
}

module.exports = {
  saveData,
  getData
};
