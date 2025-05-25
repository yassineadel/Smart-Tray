import React, { useEffect, useState } from "react";
import "./MainContent.css";
import { useNavigate } from 'react-router-dom';
import Fanblades from "../../assets/images/fan_picture-removebg-preview.png";
import axios from "axios";

function MainContent() {
  const navigate = useNavigate();
  const [temperature, setTemperature] = useState(null);

  const increaseTemp = () => {
  setTemperature((prev) => (isNaN(prev) ? 0 : parseFloat(prev) + 1));
};

const decreaseTemp = () => {
  setTemperature((prev) => (isNaN(prev) ? 0 : parseFloat(prev) - 1));
};


  useEffect(() => {
    const fetchTemperature = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/smarttray");
        const temp = res.data?.temperature;
        setTemperature(temp !== null && temp !== undefined ? temp : "N/A");
      } catch (error) {
        console.error("Error fetching temperature:", error);
        setTemperature("Error");
      }
    };

    fetchTemperature(); // Initial fetch
    const interval = setInterval(fetchTemperature, 5000); // Auto-refresh every 5s
    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  return (
    <div className="fanimage">
      <h1 className="title">Refrigerator Temperature</h1>

      <img id="rotatingfans" src={Fanblades} alt="Fan blades" />

      <div className="tempbox">
        {temperature !== null ? `${temperature}°C` : "Loading..."}
      </div>

      <div className="controls">
        <button className="decrease" onClick={decreaseTemp}>- Lower Temp</button>
        <button className="increase" onClick={increaseTemp}>+ Raise Temp</button>
      </div>

      <div className="nextpage">
        <button onClick={() => navigate('/other')}>Check Items</button>
      </div>
    </div>
  );
}

export default MainContent;
