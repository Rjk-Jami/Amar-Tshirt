import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import TShirt from '../TShirt/TShirt';
import Cart from '../Cart/Cart';
import './Home.css'
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
const Home = () => {
    const tShirts = useLoaderData()
    const [cart, setCart]= useState([])

    const addToCart = tShirt =>{
        console.log(tShirt)
        const exists = cart.find(ts=>ts._id === tShirt._id);
        if(exists){
            toast("Exist !")
        }
       else{
        const newCart = [...cart , tShirt]
        setCart(newCart)
       }
    }
    console.log(cart)
const handleRemoveFromCart = id =>{
    console.log(id)

    const remaining = cart.filter(ts=>ts._id !== id);
    setCart(remaining); 
}


    return (
        <div className='home-container'>
            <div className="tShirts-container">
            {
                tShirts.map(tShirt=><TShirt key={tShirt._id}
                tShirt={tShirt}
                addToCart={addToCart}></TShirt>)
            }
            </div>
            <div className="cart-container"><Cart cart={cart} 
            handleRemoveFromCart={handleRemoveFromCart}></Cart><ToastContainer /></div>
        </div>
    );
};

export default Home;