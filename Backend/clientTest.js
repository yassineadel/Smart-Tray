const mqtt = require('mqtt');

// Connect to the broker running on the server device
const client = mqtt.connect('mqtt://10.5.50.232:1883');

client.on('connect', () => {
  console.log('✅ Connected to MQTT Broker!');
  client.publish('smarttray/weight', '300');  // Example message
  client.publish('smarttray/temperature', '5'); // Example message
});

client.on('error', (err) => {
  console.error('❌ MQTT Connection failed:', err);
});
