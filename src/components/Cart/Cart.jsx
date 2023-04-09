import React from 'react';
import './Cart.css'
const Cart = ({cart,handleRemoveFromCart}) => {
    let msg ;
    if(cart.length === 0){
        msg = <p>Please add some products</p>
    }

    return (
        <div>
            <h2 className={cart.length ===0 ? 'orange' : 'blue'}>Order Summary: {cart.length}</h2>
            {msg}
            {
                cart.length > 2 ? <span className='red'>aro kino</span> : <span>fokir</span>
            }

            {
                cart.map(tShirt=><p 
                    key={tShirt._id}>{tShirt.name}<button onClick={()=>handleRemoveFromCart(tShirt._id)}>X</button></p>)
            }
            {
                cart.length === 2 && <p> free Offer!</p>
            }
        {
            cart.length === 2 || <p>No offer</p>
        }
        <h2 className={`bold bordered ${cart.length === 3 ? 'red' : 'orange '}`}>Jami</h2>
        </div>
    );
};

export default Cart;

// conditional rendering
// use if else
// ternary operator
// logical && 
// Logical ||  


// conditional css class
