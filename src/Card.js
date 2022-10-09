import React from 'react'
import './Card.css'
const Card = ({img,name,price}) => {
  return (
    <div className='product-card'>
        <div className="card shadow">
            <div className="card-body">
               < div class="card-img-container">
                    <img src={img}  alt="image" />
                </div>
                <h2>{name}</h2>
                <h4> ₹{price}</h4>
            </div>
        </div>
    </div>
  )
}

export default Card




