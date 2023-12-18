import { useState } from "react";
import birdData from "../data/birds";

const Cart = ({cart}) => {
  
  
  function addTotal(){
    
  }

  function discount(){

  }

  return (
    <div className="cart">
      <h2>Cart Component</h2>
     <ol>
      {cart.map((bird) => 
      <li key={bird.id}>{bird.name}: ${bird.amount}</li>
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
