import { useState } from "react";

const Cart = ({cart, total, handleRemoveBird }) => {

  function calculateDiscount(){
    if(cart.length < 3){
      return 0
    } else {
      return total * 0.1
    }
  }
  const discount = calculateDiscount()
  const finalTotal = total - discount

  return (
    <div className="cart">
      <h2>Cart</h2>
      <h4>Total: {finalTotal}$</h4>
      <h5>Discount: {discount === 0 ? 0 : 10}% (-${discount})</h5>
      <ol>
        {cart.map((bird) => (
          <li key={bird.id}>
            <p>{bird.name} - ${bird.amount}</p>
            <button onClick={()=>handleRemoveBird(bird)}>Delete</button>
          </li>
        ))}
      </ol>
    </div>
  );
};

export default Cart;
