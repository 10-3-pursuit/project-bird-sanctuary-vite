import { useState } from "react";
import birdData from "../data/birds";

const Cart = ({cart}) => {
  
  
  function addTotal(){
    
  }

  function discount(){

  }

  function cartRemove(birdId){
    const removeBird = cart.find((bird) => bird.id === birdId);
    const keepBirds = cart.filter((bird) => bird.id !== birdId);
  }

  return (
    <div className="cart">
      <h2>Cart Component</h2>
     <ol>
      {cart.map((bird) => 
      <li key={bird.id}>{bird.name}: ${bird.amount} <button onClick={()=> cartRemove(bird.id)}>Delete</button></li>
      )}
    </ol>
      {/* Total Cart */}
      {/* Cart discount 10% if items adopt > 3  */}
      {/* Add to cart */}
      {/* Remove from cart */}
    </div>

  );
};

export default Cart;
