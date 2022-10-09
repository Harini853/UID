import React from "react";
import Macb from './mac.jpg';
import './Mac.css';
 function Mac(){
    return(
        <div className="mac-container">
            <div className="mac-img-container">
            <img src={Macb} alt="" />
            </div>
        <h1 >MacBook Pro</h1>
        
        <p>The new M2 chip makes the 13-inch MacBook Pro more capable than ever. The same compact design supports up to 20 hours of battery life1 and an active cooling system to sustain enhanced performance. Featuring a brilliant Retina display, a FaceTime HD camera and studio‑quality mics, it’s our most portable pro laptop.</p>

      <h2>From ₹129900.00*</h2>
        </div>
    )
 }
 export default Mac;
 