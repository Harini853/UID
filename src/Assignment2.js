import React from 'react'
import Navbar from './Navbar'
import Card from './Card'
import Para from './Para'
import Table from './Table'
import './Assingment2.css'
const Assignment2 = () => {
  return (
    <div>
        <Navbar/>
        <div className="row m-3">
            <div className="col-3">
                <Card img="https://rukminim1.flixcart.com/image/312/312/l4hcx3k0/computer/y/j/z/macbook-air-thin-and-light-laptop-apple-original-imagfdeqter4sj2j.jpeg?q=70" name="MacBook Mac2" price={99999} />
            </div>
           
            <div className="col-3">
                <Card img="https://rukminim1.flixcart.com/image/312/312/kuyf8nk0/computer/g/z/q/mk1e3hn-a-laptop-apple-original-imag7yzmv57cvg3f.jpeg?q=70" name="MacBook Mac 1 Pro" price={125000} />
            </div>
            
            <div className="col-3">
                <Card img="https://rukminim1.flixcart.com/image/312/312/l4hcx3k0/computer/y/j/z/macbook-air-thin-and-light-laptop-apple-original-imagfdeqter4sj2j.jpeg?q=70" name="MacBook Mac2" price={99999} />
            </div>
            <div className="col-3">
                <Card img="https://rukminim1.flixcart.com/image/312/312/kuyf8nk0/computer/g/z/q/mk1e3hn-a-laptop-apple-original-imag7yzmv57cvg3f.jpeg?q=70" name="MacBook Mac 1 Pro" price={125000} />
            </div>
            
            
        </div>
        <div className="content">
            <div className='para'>
                <Para />
            </div>
            <div className='table'>
                <Table />
            </div>
        </div>
    </div>
  )
}

export default Assignment2