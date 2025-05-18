import React from "react";
import "./RefItems.css";
import tray from "../../assets/images/tray.png"

function RefItems(){
    return(
    <div>
    <h1>Items List:</h1>
    <div className="trayimage">
         <img src={tray}/>
    </div>
    </div>);
}

export default RefItems;