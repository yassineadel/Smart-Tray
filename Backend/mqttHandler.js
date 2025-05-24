const mqtt = require('mqtt');
const dataStore = require('./models/dataStore');


const client = mqtt.connect('mqtt://192.168.105.100:1883');

client.on('connect', () => {
  console.log('✅ Connected to MQTT broker');
  client.subscribe('smarttray/#');
});

client.on('message', (topic, message) => {
  const value = message.toString();
  console.log(`📨 [${topic}] ${value}`);
  dataStore.saveData(topic, value);
});
