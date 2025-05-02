import React from "react";
import "./MainContent.css"
import { useNavigate } from 'react-router-dom';
import Fanblades from "../../assets/images/fan_picture-removebg-preview.png"

function MainContent(){
   const navigate = useNavigate();
    return(
    <div className="fanimage">
          <h1 style={{fontFamily:'josefin slab' , fontSize:'40px' ,  color:'white' , marginBottom:'40px' }}>Refrigerator Temperature</h1>

          <img id="rotatingfans" src={Fanblades}/>

          <div className="tempbox">0°C</div>

          <div className="fanbuttons">
           <button>+</button>
           <button>-</button>
          </div>

          <div className="nextpage">
            <button onClick={() => navigate('/other')}>Check Items</button>
          </div>
          
    </div>
);}

export default MainContent;