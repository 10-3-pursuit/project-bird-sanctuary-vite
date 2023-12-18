import { useState } from "react";
import birdData from "../data/birds";

const Cart = ({cart, cartRemove, total, discount, bonus}) => {
  
  
  return (
    <div className="cart">
      <h2>Cart Component</h2>
      <h4>Total:${total} </h4>
      <h5>Discount:{discount ? 10 : 0}% </h5>
     <ol>
      {cart.map((bird) => 
      <li key={bird.id}>{bird.name}: ${bird.amount}
      <button onClick={()=> cartRemove(bird.id)}>Delete</button></li>
      )}
    </ol>
    <p>Your donations have qualified you for the following items:</p>
      <ul>
      {bonus.map((bonusItem) => 
        <li>{bonusItem}</li>
      )}
      </ul>
    </div>

  );
};

export default Cart;
