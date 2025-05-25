#include <WiFi.h>
#include <PubSubClient.h>
#include "HX711.h"

// === MQTT Server (WAN or Tailscale IP) ===
const char* mqtt_server = "41.176.34.155"; // Replace with the laptop server IP 

// === MQTT Auth ===
const char* mqtt_user = "myuser";
const char* mqtt_pass = "Talaga1234";

// === LM35 Temperature Sensor ===
#define LM35_PIN 34  // Analog input pin

// === HX711 Weight Sensor ===
#define DOUT 16
#define CLK 17
HX711 scale;
#define CALIBRATION_FACTOR 25300.0  // Replace with your calibrated value

// === MQTT Setup ===
WiFiClient espClient;
PubSubClient client(espClient);

// === Wi-Fi Connection Function ===
void setup_wifi() {
  Serial.begin(115200);
  Serial.print("Connecting to WiFi");
  WiFi.begin(ssid, password);

  while (WiFi.status() != WL_CONNECTED) {
    delay(500);
    Serial.print(".");
  }
  Serial.println("\n✅ WiFi connected");
}

// === MQTT Reconnect Function ===
void reconnect() {
  while (!client.connected()) {
    Serial.print("Connecting to MQTT...");
    if (client.connect("ESP32Client", mqtt_user, mqtt_pass)) {
      Serial.println("✅ Connected to MQTT broker");
    } else {
      Serial.print("❌ failed, rc=");
      Serial.print(client.state());
      delay(2000);
    }
  }
}

// === Setup Function ===
void setup() {
  delay(2000);
  setup_wifi();
  client.setServer(mqtt_server, 1883);

  // Initialize HX711
  scale.begin(DOUT, CLK);
  scale.set_scale(CALIBRATION_FACTOR);
  scale.tare();

  Serial.println("✅ Setup complete. Reading sensor values every 2 seconds...");
}

// === Main Loop ===
void loop() {
  if (!client.connected()) {
    reconnect();
  }
  client.loop();

  delay(2000);  // Read every 2 seconds

  // === Read temperature from LM35
  int analogValue = analogRead(LM35_PIN);
  float voltage = (analogValue / 4095.0) * 3.3;
  float temperatureC = voltage * 100.0;

  // === Read weight from HX711
  float weight = scale.get_units(5);

  // === Publish to MQTT
  char tempStr[10], weightStr[10];
  dtostrf(temperatureC, 1, 2, tempStr);
  dtostrf(weight, 1, 2, weightStr);

  client.publish("smarttray/temperature", tempStr);
  client.publish("smarttray/weight", weightStr);

  Serial.printf("📤 Sent: temperature = %s°C, weight = %sg\n", tempStr, weightStr);
}
