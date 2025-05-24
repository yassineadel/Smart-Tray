import React, { useEffect, useState } from "react";
import "./RefItems.css";
import tray from "../../assets/images/tray.png";
import redbullimage from "../../assets/images/redbullimage.png";
import axios from "axios";

function RefItems() {
  const [itemCount, setItemCount] = useState(0);

  useEffect(() => {
    const fetchData = () => {
      axios.get("http://localhost:5000/api/smarttray")
        .then((res) => setItemCount(res.data.itemCount ?? 0))
        .catch((err) => console.error("Failed to fetch item count:", err));
    };

    fetchData();
    const interval = setInterval(fetchData, 5000);
    return () => clearInterval(interval);
  }, []);

  const items = Array.from({ length: itemCount }, (_, i) => (
  <button key={i} className="tray-button" />
));

  return (
    <div>
      <h1>Items List:</h1>
      <div className="trayimage">
        <img src={tray} alt="Tray" />
        <div className="items-container">{items}</div>
      </div>
    </div>
  );
}

export default RefItems;
