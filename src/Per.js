import React from "react";
import './Per.css';
function Per(){
    return(
    <div className="p-container">
        {/* <div  className="per-container">
            <h1>
                Performance.....
            </h1>
        </div> */}
        <div className="Thermal-container">
            <h2>Thermal efficiency</h2>
            <p>Active cooling sustains blazing‑fast performance. Thanks to its advanced thermal system and the efficiency of Apple silicon, MacBook Pro can sustain pro levels of performance, so you can run CPU‑ and GPU‑intensive tasks for hours on end.</p>
        </div>
        <div  className="memory-container">
            <h2> Unified Memory</h2>
             <p>Faster memory.And more of it.M2 has 100GB per second of memory bandwidth — 50% more than M1. And it supports 24GB of unified memory for superfluid multitasking and workingwith massive files.</p>
        </div>
        <div  className="security-container">
        <h2>Security</h2>
        <p>The M2 chip and macOS give MacBook Pro security and privacy features beyond anything in its class. With built‑in protections against malware and viruses, the freedom to choose what you share and how you share it, and silicon‑level features like Touch ID, it’s built to safeguard your privacy and data at every stage.</p>
    </div>
    <div  className="Battery-container">
        <h2>All day Battery</h2>
        <p>Up to 20 hours of battery life. Go the distance.</p>
        <h2>Storage</h2>
        <p>superfast SSD storage14 .. Bring your photos, movies, music and documents with you — and open them in a flash.</p>
    </div>
    <div className="connection-container">
        <h2>Connectivity
Make connections. Faster than ever.</h2>
        <p>Ultra‑high bandwidth meets ultra‑versatility. Thunderbolt enables data transfer, charging and video output all through a single port — and MacBook Pro has two of them. Wi‑Fi 6 keeps MacBook Pro going strong as more and more devices join the network. And the headphone jack even supports high‑impedance headphones.</p>
    </div>
    <div className="touch-container">
        <h2>Touch Id</h2>
        <p>A touch on the sensor instantly unlocks your Mac, and a press locks it. Use your fingerprint to rent movies, buy apps or access things like locked documents or system settings without having to re-enter your password.</p>
    </div>
    <div className="bright-container">
        <h2>Brightness</h2>
        <img src="https://www.apple.com/v/macbook-pro-13/m/images/overview/backlight__88xvy48exo2u_large.png" alt="" />
        <p>500 nits of brilliance</p>
    </div>
    <div className="color-container">
        <h2>P3 wide colour</h2>
        <img src="https://www.apple.com/v/macbook-pro-13/m/images/overview/colors__cc3gcwoz8eya_large.jpg" alt="" />
        <p>25% more colours than sRGB</p>
    </div>
    <div className="tone-container">
        <h2>True Tone technology</h2>
        <img src="https://www.apple.com/v/macbook-pro-13/m/images/overview/truetone_icon__wczm34t3qrmy_large.png" alt="" />
        <p>A view that adjusts to your environment</p>
    </div>
    <div className="copy-container">
        <p>Copyright © 2022 Apple Inc. All rights reserved.  Privacy Policy |  Terms of Use |  Sales Policy | Legal | Site Map</p>
    </div>
    </div>
    )
}
export default Per;