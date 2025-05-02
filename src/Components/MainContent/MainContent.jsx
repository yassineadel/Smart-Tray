import React , {useState} from "react";
import "./MainContent.css"
import { useNavigate } from 'react-router-dom';
import Fanblades from "../../assets/images/fan_picture-removebg-preview.png"

function MainContent(){
   const navigate = useNavigate();  

   const [count , setcount] = useState(1);

  function increase(){
    if(count < 4){setcount(count + 1);}
      
  }
  function decrease(){
    if(count > 1)
    setcount(count - 1);
  }

    return(
    <div className="fanimage">
          <h1 style={{fontFamily:'josefin slab' , fontSize:'40px' ,  color:'white' , marginBottom:'40px' }}>Refrigerator Temperature</h1>

          <img id="rotatingfans" src={Fanblades}/>

          <div className="tempbox">{count}°C</div>

          <div className="fanbuttons">
           <button className="increase" onClick={increase}>+</button>
           <button className="decrease" onClick={decrease}>-</button>
          </div>

          <div className="nextpage">
            <button onClick={() => navigate('/other')}>Check Items</button>
          </div>
          
    </div>
);}

export default MainContent;