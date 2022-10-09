import React ,{Component} from "react";
import './Spec.css'
 class Spec extends Component{
    render(){
        return(
            <div className="spec-container">
                 <h1 >Level Up..!!!</h1>
            <div className="spec-img-container">
            <img src='https://www.apple.com/v/macbook-pro-13/m/images/overview/apple_silicon__b9y4fltj0os2_large.jpg' alt="" />
            </div>
       
        
        <p>The M2 chip begins the next generation of Apple silicon, with even more of the
speed and power efficiency introduced by M1. So you can rip through workflows with a more powerful 8-core CPU. Create stunning graphics with a lightning‑fast 10‑core GPU. Work with more streams of 4K and 8K ProRes video with the high-performance media engine. And do it all at once with
up to 24GB of faster unified memory.</p>
 <table border={1}>
    <tr>
        <td>Charging</td>
        <td>Fast Charging</td>
    </tr>
    <tr>
        <td>Display</td>
        <td>External display-6K</td>
    </tr>
    <tr>
        <td>Data transfer</td>
        <td>Up to 40Gb/s</td>
    </tr>
    <tr>
        <td>Headphone</td>
        <td>3.5 mm headphone jack</td>
    </tr>
    <tr>
        <td>Wi-Fi 6 </td>
        <td>up to 1.2Gb/s throughput</td>
    </tr>
 </table>
        </div>
        )
    }
 }
export default Spec