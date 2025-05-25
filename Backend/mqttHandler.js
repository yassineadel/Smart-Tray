const mqtt = require('mqtt');
const dataStore = require('./models/dataStore');
const brokerIP = 'mqtt://41.176.34.155:1883';
const options = {
  username: 'myuser',
  password: 'Talaga1234',
};


const client = mqtt.connect(brokerIP, options);

client.on('connect', () => {
  console.log('✅ Connected to MQTT broker');
  client.subscribe('smarttray/#');
});

client.on('message', (topic, message) => {
  const value = message.toString();
  console.log(`📨 [${topic}] ${value}`);
  dataStore.saveData(topic, value);
});
