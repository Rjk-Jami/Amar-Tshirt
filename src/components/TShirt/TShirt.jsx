import React from 'react';
import './TShirt.css'
const TShirt = ({tShirt,addToCart}) => {
    const {_id,price,picture,name,gender}= tShirt
    return (
        <div className='t-shirt'>
            <img src={picture} alt="" />
            <h4>{name}</h4>
            <p>Price: ${price}</p>
            <button onClick={()=>addToCart(tShirt)}>Buy Now</button>
        </div>
    );
};

export default TShirt;
