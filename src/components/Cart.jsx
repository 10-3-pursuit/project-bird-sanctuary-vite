import { useState } from "react";

const Cart = ({cart,removeFromCart,total,discount}) => {


  return (
    <div className="cart">
      <h2>Cart</h2>
      <p className="discount">Discount {discount ? <span>10%</span>:<span>0%</span>}</p>
      <ol>
      {cart.map(item=>{
        const amountToDollars = `$${item.amount.toFixed(2)}`
        return (
        <li key={item.id}>
          <p>{item.name}: {amountToDollars}</p>
          <button onClick={()=>removeFromCart(item.id)}>Remove</button>
        </li>
        )
      })}
      </ol>
      <p className="total">Total: ${total}</p>
    </div>
  );
};

export default Cart;
