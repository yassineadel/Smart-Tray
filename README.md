# Smart Fridge Tray Monitoring System

## 📦 Project Overview

The **Smart Tray** is an IoT-based refrigerator monitoring system built in three phases:

1. **Hardware Phase (ESP32):**  
   The ESP32 microcontroller collects:
   - **Weight data** using a load cell (via HX711 to convert the analog signals into digital signals)
   - **Temperature data** using a DHT sensor  
   It then sends this data to the backend using the **MQTT protocol**.

2. **Backend Phase (Node.js):**  
   - Acts as an MQTT subscriber, receiving data from the ESP32.
   - Calculates the **item count** based on weight.
   - Exposes RESTful **APIs** for the frontend.
   - Sends a **low item alert** if the count drops below 2.

3. **Frontend Phase (React):**  
   - Fetches data via the backend APIs.
   - Displays current **temperature** on the main content page,
   - Displays current **item count** inside the fridge .
   - Shows a visual **notification** when items are low and below of 2.

---

## 🛠 Tech Stack

- **Frontend:** React.js (Vite)
- **Backend:** Node.js + Express.js + MQTT.js
- **Hardware:** ESP32, HX711 load cell, DHT11 temperature sensor
- **Communication:** MQTT protocol
- **Others:** Axios, MongoDB (optional for persistent storage)

---

## 🚀 Setup Instructions

### 1. ESP32 Firmware
- Upload the Arduino code to ESP32 using the Arduino IDE.
- Make sure Wi-Fi credentials and MQTT broker IP are configured in the sketch.

### 2. Backend
```bash
cd Smart-Tray
npm install
node index.js
```

### 3. Frontend
If you have a frontend folder (`app.jsx`,`Header`,`Maincontent`,`Footer`,`Refitems`):
```bash
cd frontend
npm install
npm run dev
```

> Make sure the backend runs on port `5000` and frontend on `5173`.

---

## 🔄 Data Flow

```mermaid
graph TD
    A[ESP32 (Sensors)] -->|MQTT| B(Node.js Backend)
    B -->|API| C[React Frontend]
    B -->|Calculates| D[Item Count]
    D -->|If < 2| E[Alert: Low Item!]
```



